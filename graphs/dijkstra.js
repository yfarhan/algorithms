class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.adj = {};
    vertices.forEach(vertice => (this.adj[vertice] = []));
  }

  addEdges(edges) {
    edges.forEach(([from, to, weight]) => {
      this.adj[from].push({ node: to, weight });
      this.adj[to].push({ node: from, weight });
    });
  }

  findPath(from, to) {
    let times = {};
    let backtrack = {};

    // default pathWeight w.r.t 'from'
    this.vertices.forEach(a => (times[a] = Infinity));
    times[from] = 0;

    let queue = [from];
    let currNode;
    while (queue.length > 0) {
      currNode = queue.shift();

      for (let { node, weight } of this.adj[currNode]) {
        if (times[node] > times[currNode] + weight) {
          backtrack[node] = currNode;
          times[node] = times[currNode] + weight;
          queue.push(node);
        }
      }
    }

    let path = [];
    for (let i = to; from !== i; i = backtrack[i]) {
      path.push(i);
    }
    path.push(from);

    console.log(`Shortest path is ${path.toString()} at ${times[to]}`);
    return path;
  }
}

const VERTICES = [
  'FULLSTACK',
  'STARBUCKS',
  'DUBLINER',
  'BIGINN',
  'INSOMNIACOOKIE',
  'CAFEGRUMPY'
];

const EDGES = [
  ['FULLSTACK', 'BIGINN', 7],
  ['FULLSTACK', 'DUBLINER', 2],
  ['FULLSTACK', 'STARBUCKS', 6],
  ['BIGINN', 'DUBLINER', 4],
  ['BIGINN', 'CAFEGRUMPY', 9],
  ['STARBUCKS', 'DUBLINER', 3],
  ['STARBUCKS', 'INSOMNIACOOKIE', 6],
  ['INSOMNIACOOKIE', 'DUBLINER', 7],
  ['INSOMNIACOOKIE', 'CAFEGRUMPY', 5]
];

let g = new Graph(VERTICES);
g.addEdges(EDGES);

g.findPath('FULLSTACK', 'INSOMNIACOOKIE');
