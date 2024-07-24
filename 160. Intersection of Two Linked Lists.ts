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

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  if (!headA || !headB) return null;
  let lenA = 0;
  let lenB = 0;
  let curA = headA;
  let curB = headB;

  while (curA) {
    lenA++;
    curA = curA.next;
  }

  while (curB) {
    lenB++;
    curB = curB.next;
  }

  curA = headA;
  curB = headB;

  if (lenA > lenB) {
    for (let i = 0; i < lenA - lenB; i++) {
      curA = curA.next;
    }
  } else if (lenB > lenA) {
    for (let i = 0; i < lenB - lenA; i++) {
      curB = curB.next;
    }
  }

  while (curA && curB) {
    if (curA === curB) {
      return curA;
    }
    curA = curA.next;
    curB = curB.next;
  }

  return null;
}
