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

function sortList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  let mid = getMiddle(head);
  let left = head;
  let right = mid.next;
  mid.next = null;

  left = sortList(left);
  right = sortList(right);

  return merge(left, right);
}

const getMiddle = (node: ListNode): ListNode => {
  let slow = node;
  let fast = node.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

const merge = (left: ListNode, right: ListNode) => {
  let dummy = new ListNode();
  let current = dummy;

  while (left && right) {
    if (left.val < right.val) {
      current.next = left;
      left = left.next;
    } else {
      current.next = right;
      right = right.next;
    }
    current = current.next;
  }

  if (left) {
    current.next = left;
  }

  if (right) {
    current.next = right;
  }

  return dummy.next;
};
