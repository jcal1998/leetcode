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

function maxPathSum(root: TreeNode | null): number {
  let max = -Infinity;

  const maxGain = (node: TreeNode) => {
    if (!node) return 0;

    const left = Math.max(maxGain(node.left), 0);
    const right = Math.max(maxGain(node.right), 0);

    const sum = node.val + left + right;
    max = Math.max(sum, max);

    return node.val + Math.max(left, right);
  };

  maxGain(root);
  return max;
}
