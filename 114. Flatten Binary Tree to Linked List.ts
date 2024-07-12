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

/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
  let prev = null;
  let current = root;

  const dfs = (node: TreeNode) => {
    if (node === null) return;

    console.log(node.val);
    dfs(node.right);
    dfs(node.left);

    node.left = null;
    node.right = prev;
    prev = node;

    return root;
  };

  dfs(root);
}
