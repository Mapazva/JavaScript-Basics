// task 1
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}
// task 2
for (let i = 0; i < 3; i++) {
  console.log(`number ${i}!`);
}
let i = 0;
while (i < 3) {
  console.log(`number ${i}!`);
  i++;
}
// task 3
function findAllSimpleNum(n) {
  label: for (let i = 2; i <= n; i++) {
    for (let j = i - 1; j > 1; j--) {
      if (i % j === 0) continue label;
    }
    console.log(i);
  }
  return;
}
console.log(findAllSimpleNum(10));
console.log(findAllSimpleNum(200));
console.log(findAllSimpleNum(100));
