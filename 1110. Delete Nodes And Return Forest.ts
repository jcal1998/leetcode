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

function delNodes(
  root: TreeNode | null,
  to_delete: number[]
): Array<TreeNode | null> {
  const toDelete = new Set(to_delete);
  const forest: TreeNode[] = [];

  const inOrderTraversal = (node: TreeNode, isRoot: boolean) => {
    if (!node) return null;

    const needToDelete = toDelete.has(node.val);

    if (!needToDelete && isRoot) {
      forest.push(node);
    }

    node.left = inOrderTraversal(node.left, needToDelete);
    node.right = inOrderTraversal(node.right, needToDelete);

    return needToDelete ? null : node;
  };

  inOrderTraversal(root, true);
  return forest;
}
