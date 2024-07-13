/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     neighbors: _Node[]
 *
 *     constructor(val?: number, neighbors?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 *
 */

function cloneGraph(node: Node | null): Node | null {
  if (!node) return null;

  const visited = new Map<Node, Node>();

  const dfs = (node: Node) => {
    if (visited.has(node)) {
      return visited.get(node);
    }

    const newNode = new _Node(node.val);
    visited.set(node, newNode);

    for (let neighbors of node.neighbors) {
      newNode.neighbors.push(dfs(neighbors));
    }

    return newNode;
  };

  return dfs(node);
}
