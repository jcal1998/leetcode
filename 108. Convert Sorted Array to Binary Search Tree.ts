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

function sortedArrayToBST(nums: number[]): TreeNode | null {
  const buildBST = (left: number, right: number) => {
    if (left > right) return null;

    const middle = Math.floor((right + left) / 2);
    const node = new TreeNode(nums[middle]);

    node.left = buildBST(left, middle - 1);
    node.right = buildBST(middle + 1, right);

    return node;
  };

  return buildBST(0, nums.length - 1);
}
