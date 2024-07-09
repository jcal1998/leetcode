/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     next: _Node | null
 *     random: _Node | null
 *
 *     constructor(val?: number, next?: _Node, random?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

function copyRandomList(head: _Node | null): _Node | null {
  if (!head) return null;

  const nodeMap = new Map<_Node, _Node>();

  let current = head;
  while (current !== null) {
    nodeMap.set(current, new _Node(current.val));
    current = current.next;
  }

  current = head;
  while (current !== null) {
    const newNode = nodeMap.get(current);
    newNode.next = current.next ? nodeMap.get(current.next) : null;
    newNode.random = current.random ? nodeMap.get(current.random) : null;
    current = current.next;
  }

  return nodeMap.get(head);
}
