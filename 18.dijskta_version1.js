// This Prioirty Queue has a complexity of O(N * log (N)).
// It is not the ideal situation but it is simple that's why we are starting with it.

class PrioirtyQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({
      val,
      priority,
    });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    // {A:[]}
  }
  addEdge(vertex1, vertex2, weight) {
    //{A:[{node:"B",weight:10}]}
    this.adjacencyList[vertex1].push({
      node: vertex2,
      weight,
    });
    this.adjacencyList[vertex2].push({
      node: vertex1,
      weight,
    });
  }
  Dijkstra(start, finish) {
    const nodes = new PrioirtyQueue();
    const distances = {};
    const previous = {};
    let smallest;
    //to return at end
    let path = [];

    //build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        //initially distance A->A will be zero while other will be Infinity
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    // as long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        //WE ARE DONE
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        // this.adjacencyList[smallest] means this.adjacencyList["A"] neighbors
        for (let neighbor in this.adjacencyList[smallest]) {
          // find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor];
          let nextNeighbor = nextNode.node;
          // calculate new distance to neigboring node
          let candidate = distances[smallest] + nextNode.weight;
          if (candidate < distances[nextNeighbor]) {
            // updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            //updating previous - How we got to neigbor
            previous[nextNeighbor] = smallest;
            //enqueue in priority with new Prioirty
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

var graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

graph.Dijkstra("A", "E");

// ["A", "C", "D", "F", "E"]
