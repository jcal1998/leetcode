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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  if (inorder.length === 0 || postorder.length === 0) return null;

  const rootPostOrder = postorder[postorder.length - 1];
  const root = new TreeNode(rootPostOrder);
  const rootIndex = inorder.indexOf(rootPostOrder);

  const leftInOrder = inorder.slice(0, rootIndex);
  const rightInOrder = inorder.slice(rootIndex + 1);
  const leftPostOrder = postorder.slice(0, leftInOrder.length);
  const rightPostOrder = postorder.slice(
    leftInOrder.length,
    postorder.length - 1
  );

  root.left = buildTree(leftInOrder, leftPostOrder);
  root.right = buildTree(rightInOrder, rightPostOrder);

  return root;
}
