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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  const dfs = (node: TreeNode, sum) => {
    if (node === null) return false;
    sum += node.val;
    if (node.left || node.right) {
      return !!(dfs(node.left, sum) || dfs(node.right, sum));
    } else {
      return sum === targetSum;
    }
  };

  return dfs(root, 0);
}
