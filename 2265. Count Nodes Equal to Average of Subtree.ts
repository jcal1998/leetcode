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

function averageOfSubtree(root: TreeNode | null): number {
  let result = 0;

  const postOrderTraversal = (node: TreeNode) => {
    if (!node) return [0, 0];

    const [leftSum, leftCount] = postOrderTraversal(node.left);
    const [rightSum, rightCount] = postOrderTraversal(node.right);

    const sum = leftSum + rightSum + node.val;
    const count = leftCount + rightCount + 1;

    if (Math.floor(sum / count) === node.val) {
      result++;
    }

    return [sum, count];
  };

  postOrderTraversal(root);
  return result;
}
