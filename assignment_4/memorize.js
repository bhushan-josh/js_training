const memoize = ((inputFunc) =>{
  var cache = new Map();

  return function (arg) {
    if (cache.has(arg)) {
      console.log("Using cached memory");
      return cache.get(arg);
    } else {
      var result = inputFunc(arg);
      cache.set(arg, result);
      return result;
    }
  };
})

var square = (n) => n * n;
var memoizeSquare = memoize(square);

console.log(square(5));
console.log(memoizeSquare(5));
console.log(memoizeSquare(5));
