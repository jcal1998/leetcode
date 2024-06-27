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
  const result: number[] = [];
  let slowNode = head;
  let fastNode = head;
  for (let i = 0; i < n; i++) {
    fastNode = head.next;
  }
  console.log(slowNode, fastNode);
  while (slowNode.next) {
    result.push(slowNode.val);
    console.log(result);
    if (fastNode.next === null) {
      slowNode.next = slowNode.next.next;
    } else {
      fastNode = fastNode.next;
    }
    slowNode = slowNode.next ? slowNode.next : null;
  }

  return head;
}
