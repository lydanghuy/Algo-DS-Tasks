const inputGraph = [
  [0, 1, 0, 0, 0, 0, 0],
  [1, 0, 1, 1, 1, 0, 0],
  [0, 1, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0, 1, 1],
  [0, 1, 0, 0, 0, 0, 1],
  [0, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 1, 1, 0, 0],
]

const bfs = (graph) => {
  const queue = [];
  const touched = new Set();
  queue.push(0);
  touched.add(0);

  while(queue.length) {
    let u = queue.shift();
    console.log(u + ' ');
    for (let v = 0; v < graph.length; v++) {
      if (graph[u][v] === 1 && !touched.has(v)) {
        queue.push(v);
        touched.add(v);
      }
    }
  }
}

bfs(inputGraph);