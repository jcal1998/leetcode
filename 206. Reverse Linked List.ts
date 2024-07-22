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

function reverseList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;
  let dummy = new ListNode();
  dummy.next = head;
  let prev = dummy;
  let cur = dummy.next;
  let next = cur.next;

  while (cur && cur.next) {
    cur.next = next.next;
    next.next = prev.next;
    prev.next = next;
    next = cur.next;
  }

  return dummy.next;
}
