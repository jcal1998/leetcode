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

function isSymmetric(root: TreeNode | null): boolean {
  return isMirror(root.left, root.right);
}

const isMirror = (t1: TreeNode | null, t2: TreeNode | null): boolean => {
  if (t1 === null && t2 === null) return true;
  if (t1 === null || t2 === null || t1.val !== t2.val) return false;

  const left = isMirror(t1.left, t2.right);
  const right = isMirror(t1.right, t2.left);

  return left && right;
};
