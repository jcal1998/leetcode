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

function partition(head: ListNode | null, x: number): ListNode | null {
  let lessIniList = new ListNode(0);
  let greatIniList = new ListNode(0);
  let lessList = lessIniList;
  let greatList = greatIniList;
  let current = head;

  while (current) {
    if (current.val < x) {
      lessList.next = current;
      lessList = lessList.next;
    } else {
      greatList.next = current;
      greatList = greatList.next;
    }
    current = current.next;
  }

  greatList.next = null;
  lessList.next = greatIniList.next;
  return lessIniList.next;
}
