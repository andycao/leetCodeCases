export function* walkPreOrder(node) {
  if (!node) return;
  yield node;
  for (let child of node.children) {
    yield* walkPreOrder(child);
  }
}
