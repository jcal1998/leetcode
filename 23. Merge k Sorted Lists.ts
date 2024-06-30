class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length === 0) return null;
  if (lists.length === 1) return lists[0];

  const center = Math.floor(lists.length / 2);
  const left = mergeKLists(lists.slice(0, center));
  const right = mergeKLists(lists.slice(center));

  return merge(left!, right!);
}

const merge = (list1: ListNode, list2: ListNode) => {
  let dummy = new ListNode(0);
  let temp = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      temp.next = list1;
      list1 = list1.next!;
    } else {
      temp.next = list2;
      list2 = list2.next!;
    }
    temp = temp.next;
  }

  temp.next = list1 || list2;

  return dummy.next;
};
