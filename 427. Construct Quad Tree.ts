/**
 * Definition for _Node.
 * class _Node {
 *     val: boolean
 *     isLeaf: boolean
 *     topLeft: _Node | null
 * 	topRight: _Node | null
 * 	bottomLeft: _Node | null
 * 	bottomRight: _Node | null
 * 	constructor(val?: boolean, isLeaf?: boolean, topLeft?: _Node, topRight?: _Node, bottomLeft?: _Node, bottomRight?: _Node) {
 *         this.val = (val===undefined ? false : val)
 *         this.isLeaf = (isLeaf===undefined ? false : isLeaf)
 *         this.topLeft = (topLeft===undefined ? null : topLeft)
 *         this.topRight = (topRight===undefined ? null : topRight)
 *         this.bottomLeft = (bottomLeft===undefined ? null : bottomLeft)
 *         this.bottomRight = (bottomRight===undefined ? null : bottomRight)
 *   }
 * }
 */

function construct(grid: number[][]): _Node | null {
  const isEqual = (x1: number, x2: number, y1: number, y2: number) => {
    const val = grid[x1][y1];
    for (let i = x1; i <= x2; i++) {
      for (let j = y1; j <= y2; j++) {
        if (grid[i][j] !== val) return false;
      }
    }
    return true;
  };

  const buildQuadTree = (x1: number, x2: number, y1: number, y2: number) => {
    if (isEqual(x1, x2, y1, y2)) {
      return new _Node(grid[x1][y1] === 1, true);
    }

    const rowMid = Math.floor((x1 + x2) / 2);
    const colMid = Math.floor((y1 + y2) / 2);

    const topLeft = buildQuadTree(x1, rowMid, y1, colMid);
    const topRight = buildQuadTree(x1, rowMid, colMid + 1, y2);
    const botLeft = buildQuadTree(rowMid + 1, x2, y1, colMid);
    const botRight = buildQuadTree(rowMid + 1, x2, colMid + 1, y2);

    return new _Node(false, false, topLeft, topRight, botLeft, botRight);
  };

  return buildQuadTree(0, grid.length - 1, 0, grid[0].length - 1);
}
