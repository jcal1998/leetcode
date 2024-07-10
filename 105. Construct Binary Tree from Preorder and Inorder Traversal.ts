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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (preorder.length === 0 || inorder.length === 0) return null;
  const root = new TreeNode(preorder[0]);
  const rootIndex = inorder.indexOf(preorder[0]);

  const leftInOrder = inorder.slice(0, rootIndex);
  const rightInOrder = inorder.slice(rootIndex + 1);
  const leftPreOrder = preorder.slice(1, leftInOrder.length + 1);
  const rightPreOrder = preorder.slice(leftInOrder.length + 1);

  root.left = buildTree(leftPreOrder, leftInOrder);
  root.right = buildTree(rightPreOrder, rightInOrder);

  return root;
}
