## Implement an LRU Cache.

##### **Time** - O(1) -> Constant lookup time in hashmaps. 
#### **Space** - O(n) -> Linked List will hold 'n' items.

```javascript
class NodeLL {
  //initializing constructor with key, value, pointer to the next node, and pointer to the previous node
  constructor(key, value, next = null, prev = null) {
    this.key = key;
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

//initializing the LRU constructor with its parameters
class LRUCache {
  constructor(limit) {
    this.head = null;
    this.tail = null;
    this.limit = limit;
    this.cache = {};
    this.size = 0;
  }

//adding to the cache 
put(key, value) {
    //check if the cache has hit the limit or if the value already exists in the cache
    this.checkSize(key);
  
    // if the vaue don't already exist in the cache
    if (!this.cache[key]) {
      //if there is no head
      //if this is the first item in the cache
      if (!this.head) {
        //head and tail will be the same node
        //creating an instance of the class node
        //and assigning the values passed in the parameters
        this.head = this.tail = new NodeLL(key, value);
      } else {
        //if there is already an item in the array
        //make the inserted value as the head
        const node = new NodeLL(key, value, this.head);
        this.head.prev = node;
        this.head = node;
      }

      this.cache[key] = this.head;
      //increment the size since we now have an item in the cache
      this.size++;
    } else {
      //check if the key already exists in the cache
      //if it already exists delete the current key
      //and set the same key to the new value
      const node = new NodeLL(key, value, this.head);
      this.head.prev = node;
      this.head = node;
      this.remove(key);
      this.cache[key] = node;
      this.size++;
    }
  }

  // Read the cache element
  get(key) {
    if (this.cache[key]) {
      const value = this.cache[key].value;
      //the key is removed so that every read item should
      //now appear as the head of the list
      this.remove(key);
      this.put(key, value);

      return value;
    }

    console.log(`Item not available in the cache for key ${key}!`)
  }

  // Remove the cache element
  remove(key) {
    const node = this.cache[key];
    //check if the current node to be deleted has a previous node
    if (node.prev !== null) {
      node.prev.next = node.next;
    } else {
      this.head = node.next;
    }
    //check if the current node to be deleted has a next node
    if (node.next !== null) {
      node.next.prev = node.prev;
    } else {
      this.tail = node.prev;
    }
    
    delete this.cache[key];
    this.size--;
  }

  // Clear all elements
  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.cache = {};
  }

  //perform checks for if the cache is full and if the key is already in the cache
  checkSize(key) {
    if (this.size + 1 > this.limit && !this.cache[key]) {
      this.remove(this.tail.key);
    }
  }
}
```
