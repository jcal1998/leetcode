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

function getMinimumDifference(root: TreeNode | null): number {
  let prev = null;
  let result = Infinity;

  const dfs = (node: TreeNode) => {
    if (!node) return null;
    dfs(node.left);
    if (prev) {
      result = Math.min(result, node.val - prev.val);
    }
    prev = node;
    dfs(node.right);
  };

  dfs(root);
  return result;
}
