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

function isValidBST(root: TreeNode | null): boolean {
  let prev = null;
  let result = true;

  const inOrderTraversal = (node: TreeNode) => {
    if (!node || !result) return;
    inOrderTraversal(node.left);

    if (prev && prev.val >= node.val) {
      result = false;
      return;
    }
    prev = node;

    inOrderTraversal(node.right);
  };

  inOrderTraversal(root);
  return result;
}
