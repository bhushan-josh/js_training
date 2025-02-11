function* fibonacci() {
  let fib1 = 0;
  let fib2 = 1;

  while (1) {
    yield fib1;
    let fibn = fib1 + fib2;
    fib1 = fib2;
    fib2 = fibn;
  }
}

const fibSeries = fibonacci();

console.log(fibSeries.next().value); // 0
console.log(fibSeries.next().value); // 1
console.log(fibSeries.next().value); // 1
console.log(fibSeries.next().value); // 2
console.log(fibSeries.next().value); // 3
