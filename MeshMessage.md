## Problem: You wrote a trendy new messaging app, MeshMessage, to get around flaky cell phone coverage.

Instead of routing texts through cell towers, your app sends messages via the phones of nearby users, passing each message along from one phone to the next until it reaches the intended recipient. (Don't worry—the messages are encrypted while they're in transit.)

Some friends have been using your service, and they're complaining that it takes a long time for messages to get delivered. After some preliminary debugging, you suspect messages might not be taking the most direct route from the sender to the recipient.

Given information about active users on the network, find the shortest route for a message from one user (the sender) to another (the recipient). Return an array of users that make up this route.

> There might be a few shortest delivery routes, all with the same length. For now, let's just return any shortest route.

Your network information takes the form of an object where keys are usernames and values are arrays of other users nearby:

```
const network = {
  'Min'     : ['William', 'Jayden', 'Omar'],
  'William' : ['Min', 'Noam'],
  'Jayden'  : ['Min', 'Amelia', 'Ren', 'Noam'],
  'Ren'     : ['Jayden', 'Omar'],
  'Amelia'  : ['Jayden', 'Adam', 'Miguel'],
  'Adam'    : ['Amelia', 'Miguel', 'Sofia', 'Lucas'],
  'Miguel'  : ['Amelia', 'Adam', 'Liam', 'Nathan'],
  'Noam'    : ['Nathan', 'Jayden', 'William'],
  'Omar'    : ['Ren', 'Min', 'Scott'],
  ...
};
```

For the network above, a message from Jayden to Adam should have this route:

```
['Jayden', 'Amelia', 'Adam']
```

## Gotchas

We can find the shortest route in O(N+M) time, where NN is the number of users and MM is the number of connections between them.

It's easy to write code that can get caught in an infinite loop for some inputs! Does your code always finish running?

What happens if there's no way for messages to get to the recipient?

What happens if the sender tries to send a message to themselves?

## Solution

We treat the input user network as a graph in adjacency list format. Then we do a breadth-first search from the sender, stopping once we reach the recipient.

In order to recover the actual shortest path from the sender to the recipient, we do two things:

- during our breadth-first search, we keep track of how we reached each node, and
- after our breadth-first search reaches the end node, we use our object to backtrack from the recipient to the sender.

To make sure our breadth-first search terminates, we're careful to avoid visiting any node twice. We could keep track of the nodes we've already seen in a set, but, to save space, we reuse the object we've already set up for recovering the path.

```
// const network = {
//   'Min'     : ['William', 'Jayden', 'Omar'],
//   'William' : ['Min', 'Noam'],
//   'Jayden'  : ['Min', 'Amelia', 'Ren', 'Noam'],
//   'Ren'     : ['Jayden', 'Omar'],
//   'Amelia'  : ['Jayden', 'Adam', 'Miguel'],
//   'Adam'    : ['Amelia', 'Miguel', 'Sofia', 'Lucas'],
//   'Miguel'  : ['Amelia', 'Adam', 'Liam', 'Nathan'],
//   'Noam'    : ['Nathan', 'Jayden', 'William'],
//   'Omar'    : ['Ren', 'Min', 'Scott'],
// };

// For the network above, a message from Jayden to Adam should have this route:
// ['Jayden', 'Amelia', 'Adam']

class Queue {
  constructor(){
    this.queue = [];
    this.size = 0;
  }

  enqueue(item){
    this.size += 1; 
    this.queue.unshift(item);
  }

  dequeue(item){
    this.size -= 1;
    return this.queue.pop();
  }
}

function reconstructPath(howWeReachedNodes, startNode, endNode) {
  let reversedPath = [];

  let currentNode = endNode;

  while(currentNode != null){
    reversedPath.push(currentNode);
    currentNode = howWeReachedNodes[currentNode];
  }

  console.log(reversedPath.reverse());
}

function bfsGetPath(graph, startNode, endNode){
  if(!graph.hasOwnProperty(startNode) && !graph.hasOwnProperty(endNode)){
    throw new Error('Error!');
  }

  let nodesToVisit = new Queue();
  nodesToVisit.enqueue(startNode);

  let howWeReachedNodes = {};
  howWeReachedNodes[startNode] = null;

  while (nodesToVisit.size > 0){
    let currentNode = nodesToVisit.dequeue(); // d

    if (currentNode === endNode){
      return reconstructPath(howWeReachedNodes, startNode, endNode);
    }

    graph[currentNode].forEach((neighbor) => {
      if(!howWeReachedNodes.hasOwnProperty(neighbor)){
        nodesToVisit.enqueue(neighbor);
        howWeReachedNodes[neighbor] = currentNode;
      }
    })
  }
  return null;
}

const graph = {
  'a': ['b', 'c', 'd'],
  'b': ['a', 'd'],
  'c': ['a', 'e'],
  'd': ['a', 'b'],
  'e': ['c'],
  'f': ['g'],
  'g': ['f']
};

let actual = bfsGetPath(graph, 'a', 'e');
// expected = ['a', 'c', 'e'];
```

## Complexity

Our solution has two main steps. First, we do a breadth-first search of the user network starting from the sender. Then, we use the results of our search to backtrack and find the shortest path.

How much work is a breadth-first search?

In the worst case, we'll go through the BFS loop once for every node in the graph, since we only ever add each node to nodesToVisit once (we check howWeReachedNodes to see if we've already added a node before). Each loop iteration involves a constant amount of work to dequeue the node and check if it's our end node. If we have nn nodes, then this portion of the loop is O(N).

But there's more to each loop iteration: we also look at the current node's neighbors. Over all of the nodes in the graph, checking the neighbors is O(M), since it involves crossing each edge twice: once for each node at either end.

Putting this together, the complexity of the breadth-first search is O(N+M).

BFS and DFS are common enough that it's often acceptable to just state their complexity as O(N+M). Some interviewers might want you to derive it though, so definitely be ready in case they ask.

What about backtracking to determine the shortest path? Handling each node in the path is O(1), and we could have at most NN nodes in our shortest path. So, that's O(N) for building up the path. Then, it's another O(N) to reverse it. So, the total time complexity of our backtracking step is O(N).

Putting these together, the time complexity of our entire algorithm is O(N+M).

What about space complexity? The queue of nodes to visit, the mapping of nodes to previous nodes, and the final path ... they all store a constant amount of information per node. So, each data structure could take up to O(N) space if it stored information about all of our nodes. That means our overall space complexity is O(N).
