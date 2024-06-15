class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const result = new ListNode();
  let addNextBy = 0;
  let node1 = l1;
  let node2 = l2;
  let curNode = result;

  while (node1 || node2) {
    const sum = (node1?.val || 0) + (node2?.val || 0) + addNextBy;
    if (sum >= 10) {
      addNextBy = 1;
      curNode.val = sum - 10;
    } else {
      addNextBy = 0;
      curNode.val = sum;
    }

    node1 = node1?.next ? node1.next : null;
    node2 = node2?.next ? node2.next : null;
    curNode.next =
      node1 || node2 ? new ListNode() : addNextBy ? new ListNode(1) : null;
    curNode = curNode.next as ListNode;
  }

  return result;
}
