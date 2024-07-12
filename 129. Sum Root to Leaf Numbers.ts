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

function sumNumbers(root: TreeNode | null): number {
  const dfs = (node: TreeNode, cur: number) => {
    if (node === null) {
      console.log(cur);
      return 0;
    }

    cur = cur * 10 + node.val;
    if (node.left || node.right) {
      return dfs(node.left, cur) + dfs(node.right, cur);
    }

    return cur;
  };

  return dfs(root, 0);
}
