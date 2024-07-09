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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let dummy = new ListNode(0);
  dummy.next = head;
  let current = dummy.next;
  let prev = dummy;

  while (current && current.next) {
    if (current.val === current.next.val) {
      while (current.next && current.val === current.next.val) {
        current = current.next;
      }
      prev.next = current.next;
    } else {
      prev = current;
    }

    current = current.next;
  }

  return dummy.next;
}
