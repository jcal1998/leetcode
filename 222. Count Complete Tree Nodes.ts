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

function countNodes(root: TreeNode | null): number {
  if (root === null) return 0;
  const queue = [root];
  let count = 0;

  while (queue.length) {
    const temp = queue.shift();
    count++;
    if (temp.left) queue.push(temp.left);
    if (temp.right) queue.push(temp.right);
  }

  return count;
}

// chat gpt
function countNodes(root: TreeNode | null): number {
  if (root === null) return 0;

  const getHeight = (node: TreeNode) => {
    let count = 0;
    while (node) {
      count++;
      node = node.left;
    }
    return count;
  };

  const lHeight = getHeight(root.left);
  const rHeight = getHeight(root.right);

  if (lHeight === rHeight) {
    return (1 << lHeight) + countNodes(root.right);
  } else {
    return (1 << rHeight) + countNodes(root.left);
  }
}
