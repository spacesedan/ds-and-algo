class MyHash {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let addr = this._hash(key);
    if (!this.data[addr]) {
      this.data[addr] = [];
    }
    this.data[addr].push([key, value]);
  }

  get(key) {
    const addr = this._hash(key);
    const currentBucket = this.data[addr];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          console.log(currentBucket[i][1]);
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    const keysArr = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArr.push(this.data[i][0][0]);
      }
    }
    console.log(keysArr);
    return keysArr;
  }
}

const myHash = new MyHash(50);
myHash.set('grapes', 1000);
myHash.set('apples', 300);
myHash.set('bananas', 400);
myHash.set('oranges', 30);
myHash.get('grapes');
myHash.get('apples');
console.log(myHash);
myHash.keys();
