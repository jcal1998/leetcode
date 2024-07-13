/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  const result = [];
  const queue = [root];
  let invert = false;

  while (queue.length) {
    const lLen = queue.length;
    const lNodes = [];

    for (let i = 0; i < lLen; i++) {
      const node = queue.shift();

      lNodes.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    if (invert) {
      lNodes.reverse();
    }

    result.push(lNodes);
    invert = !invert;
  }

  return result;
}
