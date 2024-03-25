// @ts-ignore
const list = [1, 2, 3, [4, 5, [6, 7]]];

const myflat = (array) => {
  return array.reduce((acc, value) => {
    if (Array.isArray(value)) {
      return acc.concat(myflat(value));
    } else {
      return acc.concat(value);
    }
  }, []);
};


console.log(myflat(list1));
