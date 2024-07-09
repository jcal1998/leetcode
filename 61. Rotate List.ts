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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head || !head.next || k === 0) return head;

  let dummy = new ListNode(0);
  dummy.next = head;
  let current = head;
  let len = 1;
  while (current.next) {
    len++;
    current = current.next;
  }
  const rotate = k % len;
  if (rotate === 0) return head;

  let slow = dummy;
  let fast = dummy;
  for (let i = 0; i < rotate; i++) {
    fast = fast.next;
  }

  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  fast.next = dummy.next;
  dummy.next = slow.next;
  slow.next = null;

  return dummy.next;
}
