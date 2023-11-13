function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function* walkPreOrder(root) {
  if (root === null) return;

  const stack = [root];
  while (stack.length) {
    const item = stack.pop();
    if (item) {
      yield item.value;
      if (item.right) stack.push(item.right);
      if (item.left) stack.push(item.left);
    }
  }
}

function* walkIter(root) {
  if (root) {
    yield root.value;
    yield* walkIter(root.left);
    yield* walkIter(root.right);
  }
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.right = new Node(4);

const a = walkPreOrder(root);
const b = walkIter(root);

console.log([...b]);
