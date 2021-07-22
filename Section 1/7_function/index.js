// task 1
function checkAge(age) {
  return age > 18 ? true : confirm("Родители разрешили?");
}

function checkAge2(age) {
  return age > 18 || confirm("Родители разрешили?");
}

// task 2
function min(a, b) {
  return a < b ? a : b;
}
console.log(min(56, 76), min(96, 76));

// task 3
function pow(x, n) {
  return n > 1 ? x ** n : console.log("Введите натуральное n");
}
console.log(pow(3, 2));
