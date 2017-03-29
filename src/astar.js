import { astar, Graph } from 'javascript-astar';

function gridToGraph(grid) {
  return new Graph(grid
    .map(row => row
      .map(({ isClear, isStart, isEnd }) => isClear || isStart || isEnd
      ? 1
      : 0))
    .toJS());
}

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
