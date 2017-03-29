import { astar, Graph } from 'javascript-astar';


/**
 * Convert our grid object to a javascript primitive that has weighted cells.
 *
 * @param {any} grid
 * @returns
 */
function gridToGraph(grid) {
  return new Graph(grid
    .map(row => row
      .map(({ isClear, isStart, isEnd }) => isClear || isStart || isEnd
      ? 1
      : 0))
    .toJS());
}


/**
 * Wrap the javascript-astar library in our own data format.
 *
 * @export
 * @param {any} grid
 * @param {any} start
 * @param {any} end
 * @returns
 */
export function findShortestRoute(grid, start, end) {
  const graph = gridToGraph(grid);
  const path = astar.search(
    graph,
    graph.grid[start.get('row')][start.get('column')],
    graph.grid[end.get('row')][end.get('column')],
  );

  const index = path
    .reduce(
      (dst, node) => dst.set(`${node.x}:${node.y}`, true),
      I.Map(),
  );

  return index;
}
