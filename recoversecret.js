function recoverSecret(triplets) {
    let graph = new Map(); 
    let indegree = new Map();
    for (let triplet of triplets) {
      let [x, y, z] = triplet;
      
      if (!graph.has(x)) graph.set(x, new Set());
      if (!graph.has(y)) graph.set(y, new Set());
      if (!graph.has(z)) graph.set(z, new Set());
      
      if (!indegree.has(x)) indegree.set(x, 0);
      if (!indegree.has(y)) indegree.set(y, 0);
      if (!indegree.has(z)) indegree.set(z, 0);
      
      graph.get(x).add(y);
      graph.get(y).add(z);
      
      indegree.set(y, indegree.get(y) + 1);
      indegree.set(z, indegree.get(z) + 1);
    }

    let queue = [];
    indegree.forEach((value, key) => {
      if (value === 0) queue.push(key);
    });
    
    let result = [];

    while (queue.length > 0) {
      let current = queue.shift();
      result.push(current);
      
      if (graph.has(current)) {
        for (let neighbor of graph.get(current)) {
          indegree.set(neighbor, indegree.get(neighbor) - 1);
          if (indegree.get(neighbor) === 0) {
            queue.push(neighbor);
          }
        }
      }
    }
 
    return result.join('');
  }
  