function PriNode(value) {
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

const root = new PriNode(1);
root.left = new PriNode(2);
root.right = new PriNode(3);
root.left.right = new PriNode(4);

const a = walkPreOrder(root);
const b = walkIter(root);

console.log([...b]);
