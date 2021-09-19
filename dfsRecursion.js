const touched = new Set();
touched.add(0);

const dfs = (u, graph, touched) => {
  console.log(u + ' ');
  for (let v = graph.length - 1; v >= 0; v--) {
    if (graph[u][v] === 1 && !touched.has(v)) {
      touched.add(v);
      dfs(v, graph, touched)
    }
  }
}

const inputGraph = [
  [0, 1, 0, 0, 0, 0, 0],
  [1, 0, 1, 1, 1, 0, 0],
  [0, 1, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0, 1, 1],
  [0, 1, 0, 0, 0, 0, 1],
  [0, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 1, 1, 0, 0],
]

dfs(0, inputGraph, touched);