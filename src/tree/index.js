import { walkPreOrder } from "./domPreorder.js";

function locateById(nodeId) {
  // iterate through all nodes in depth first (preOrder) fashion
  // return the node as soon as it's found
  for (let node of walkPreOrder(document.body)) {
    if (node.id === nodeId) {
      return node;
    }
  }
  return null;
}

function locateAllByClassName(className) {
  const result = [];
  for (let node of walkPreOrder(document.body)) {
    if (node.classList.contains(className)) {
      result.push(node);
    }
  }

  return result;
}

const node = locateById("profile");

const nodes = locateAllByClassName("row");

function select(selector) {
  for (let node of walkPreOrder(document.body)) {
    if (node.matches(selector)) {
      return node;
    }
  }
  return null;
}

const anode = select(".container .row:first-child");
console.log(anode);
