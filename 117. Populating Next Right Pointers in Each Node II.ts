/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     left: _Node | null
 *     right: _Node | null
 *     next: _Node | null
 *
 *     constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root: _Node | null): _Node | null {
  if (!root) return null;
  const queue = [root];
  let current;
  let prev = null;

  while (queue.length) {
    let prev = null;
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      current = queue.shift();
      if (prev !== null) {
        prev.next = current;
      }

      prev = current;

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }

  return root;
}
