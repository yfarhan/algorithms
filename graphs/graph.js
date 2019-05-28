class Graph {
  constructor(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for (let i = 0; i < v; ++i) {
      this.adj[i] = [];
    }

    this.marked = [];
    this.edgeTo = [];
  }

  addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
    return this;
  }

  bfs(s) {
    let queue = [];
    // Process the node
    this.marked[s] = true;
    queue.push(s);
    while (queue.length > 0) {
      let v = queue.shift();
      if (v !== undefined) {
        console.log('visited vertex ', v);
      }

      for (let i = 0; i < this.adj[v].length; ++i) {
        let w = this.adj[v][i];
        // Check if already marked
        if (!this.marked[w]) {
          queue.push(w);
          this.edgeTo[w] = v;
          this.marked[w] = true;
        }
      }
    }
  }

  pathTo(source, v) {
    if (!this.hasPathTo(v)) {
      return undefined;
    }

    let path = [];
    for (let i = v; i != source; i = this.edgeTo[i]) {
      path.push(i);
    }

    path.push(source);
    return path;
  }

  hasPathTo(v) {
    return this.marked[v];
  }
}

let g = new Graph(5);
g.addEdge(0, 1)
  .addEdge(0, 2)
  .addEdge(1, 3)
  .addEdge(2, 4);

g.bfs(0);
let p = g.pathTo(0, 4);
debugger;
