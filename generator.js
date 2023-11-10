function* flatGen(arr) {
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (typeof item !== "number") {
      yield* flatGen(item);
    } else {
      yield item;
    }
  }
}

const list = [1, 2, 3, [4, 5], [[6, [7, 8]]]];

console.log(...flatGen(list));


