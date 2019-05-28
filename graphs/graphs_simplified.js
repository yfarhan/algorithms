class Graph {
  constructor(n) {
    this.edges = n;
    this.adj = [];
    for (let i = 0; i < n; i++) {
      this.adj[i] = [];
    }
  }

  addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
    return this;
  }

  /** DFS */
  dfs(s) {
    const stack = [s];
    let marked = {
      [s]: true
    };
    while (stack.length > 0) {
      let c = stack.shift();
      console.log('visited :', c);
      for (let i of this.adj[c]) {
        if (!marked[i]) {
          stack.unshift(i);
          marked[i] = true;
        }
      }
    }
  }

  // BFS
  bfs(s) {
    const queue = [s];
    let marked = {
      [s]: true
    };
    const edgeTo = [];
    while (queue.length > 0) {
      let c = queue.shift();
      console.log('visited ', c);
      for (let i of this.adj[c]) {
        if (!marked[i]) {
          queue.push(i);
          marked[i] = true;
          edgeTo[i] = c;
        }
      }
    }
    return edgeTo;
  }

  shortTestPath(source, v, edgeTo) {
    let path = [];
    for (let i = v; i != source; i = edgeTo[i]) {
      path.push(i);
    }
    path.push(source);

    console.log(path.toString());
  }
}

let g = new Graph(5);
g.addEdge(0, 1)
  .addEdge(0, 2)
  .addEdge(1, 3)
  .addEdge(2, 4)
  .addEdge(1, 4);

// g.dfs(0);
g.shortTestPath(0, 4, g.bfs(0));
debugger;
