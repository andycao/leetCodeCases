type TypeNode = {
  val: any;
  children: any;
  isEnd: boolean;
};

function TNode(val: any) {
  this.val = val;
  this.children = {};
  this.isEnd = false;
}

class Trie {
  root: TypeNode;
  constructor() {
    this.root = new TNode(null);
  }

  insert(word: string) {
    let current = this.root;
    for (let w of word) {
      if (current.children[w] === undefined) {
        current.children[w] = new TNode(w);
      }
      current = current.children[w];
    }
    current.isEnd = true;
  }

  search(word: string) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      const w = word[i];
      if (current.children[w]) {
        current = current.children[w];
      } else {
        return false;
      }
    }
    return current.isEnd;
  }
}

const trie = new Trie();
trie.insert("can");
trie.insert("cat");
trie.insert("cats");

console.log(trie);

const s = trie.search("bs");
console.log(s);
