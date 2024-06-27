/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head) return null;

  let dummy = new ListNode(0);
  dummy.next = head;
  let slowNode = dummy;
  let fastNode = dummy;
  for (let i = 0; i <= n; i++) {
    fastNode = fastNode.next;
  }
  console.log(slowNode, fastNode);
  while (fastNode !== null) {
    slowNode = slowNode.next;
    fastNode = fastNode.next;
  }

  slowNode.next = slowNode.next.next;

  return dummy.next;
}
