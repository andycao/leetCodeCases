const a = "9993";
const b = "98";

function plus(a, b) {
  const max = Math.max(a.length, b.length);
  const result = [];
  let addon = 0;
  for (let i = 0; i < max; i++) {
    const an = Number(a.charAt(a.length - i - 1));
    const bn = Number(b.charAt(b.length - i - 1));

    const num = an + bn + addon;
    if (num > 9) {
      addon = 1;
    } else {
      addon = 0;
    }

    result.push(num % 10);
  }
  if (addon) {
    result.push(1);
  }

  console.log(result.reverse());
}
plus(a, b);
