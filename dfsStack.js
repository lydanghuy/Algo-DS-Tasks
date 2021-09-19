const inputGraph = [
  [0, 1, 0, 0, 0, 0, 0],
  [1, 0, 1, 1, 1, 0, 0],
  [0, 1, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0, 1, 1],
  [0, 1, 0, 0, 0, 0, 1],
  [0, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 1, 1, 0, 0],
]

const dfs = (graph) => {
  const stack = [];
  const touched = new Set();
  stack.push(0);
  touched.add(0);

  while (stack.length) {
    let u = stack.pop();
    console.log(u + ' ');
    for (let v = 0; v < graph.length; v++) {
      if (graph[u][v] === 1 && !touched.has(v)) {
        stack.push(v);
        touched.add(v);
      }
    }
  }
}

dfs(inputGraph);