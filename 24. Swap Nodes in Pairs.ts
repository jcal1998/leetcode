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

function swapPairs(head: ListNode | null): ListNode | null {
  const dummy = new ListNode(0);
  dummy.next = head;

  let prev = dummy;
  let current = dummy.next;

  while (current && current.next) {
    let first = current;
    let second = current.next;

    prev.next = second;
    first.next = second.next;
    second.next = first;

    prev = first;
    current = first.next;
  }

  return dummy.next;
}
