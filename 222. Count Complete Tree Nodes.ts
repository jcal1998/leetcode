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

function countNodes(root: TreeNode | null): number {
  if (root === null) return 0;
  const queue = [root];
  let count = 0;

  while (queue.length) {
    const temp = queue.shift();
    count++;
    if (temp.left) queue.push(temp.left);
    if (temp.right) queue.push(temp.right);
  }

  return count;
}
