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

function printTree(root: TreeNode | null): string[][] {
  if (!root) return [];

  const getHeight = (node: TreeNode | null): number => {
    if (!node) return -1;
    return 1 + Math.max(getHeight(node.left), getHeight(node.right));
  };

  const height = getHeight(root);
  const m = height + 1;
  const n = (1 << (height + 1)) - 1;

  const res: string[][] = Array.from({ length: m }, () => Array(n).fill(""));

  const fill = (node: TreeNode | null, r: number, c: number, level: number) => {
    if (!node) return;
    res[r][c] = node.val.toString();
    const gap = 1 << (height - level - 1);
    if (node.left) fill(node.left, r + 1, c - gap, level + 1);
    if (node.right) fill(node.right, r + 1, c + gap, level + 1);
  };

  fill(root, 0, (n - 1) / 2, 0);

  return res;
}
