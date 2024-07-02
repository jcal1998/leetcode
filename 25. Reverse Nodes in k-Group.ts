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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (head === null || k === 1) {
    return head;
  }

  let dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy,
    current = dummy,
    next = dummy;
  let length = 0;

  while (current.next) {
    current = current.next;
    length++;
  }

  while (length >= k) {
    current = prev.next;
    next = current.next;

    for (let i = 0; i < k - 1; i++) {
      current.next = next.next;
      next.next = prev.next;
      prev.next = next;
      next = current.next;
    }

    prev = current;
    length -= k;
  }

  return dummy.next;
}
