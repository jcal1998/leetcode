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

class BSTIterator {
  cur: number;
  treeArr: Array<number>;
  constructor(root: TreeNode | null) {
    this.cur = 0;
    this.treeArr = [];
    this.dfs(root);
  }

  next(): number {
    this.cur++;
    return this.treeArr[this.cur - 1];
  }

  hasNext(): boolean {
    return this.cur < this.treeArr.length;
  }

  private dfs(node: TreeNode) {
    if (!node) return;
    this.dfs(node.left);
    this.treeArr.push(node.val);
    console.log(node.val);
    this.dfs(node.right);
  }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

// chat gpt

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

class BSTIterator {
  stack: Array<TreeNode>;
  constructor(root: TreeNode | null) {
    this.stack = [];
    let cur = root;
    while (cur) {
      this.stack.push(cur);
      cur = cur.left;
    }
  }

  next(): number {
    let temp = this.stack.pop();
    if (temp.right) {
      let cur = temp.right;
      while (cur) {
        this.stack.push(cur);
        cur = cur.left;
      }
    }

    return temp.val;
  }

  hasNext(): boolean {
    return this.stack.length > 0;
  }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
