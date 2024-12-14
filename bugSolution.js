function foo(a, b) {
  // Solution 1: Explicit type checking
  a = typeof a === 'number' ? a : 0;
  b = typeof b === 'number' ? b : 0;
  return a + b;
}

function foo2(a, b) {
  // Solution 2: Optional Chaining and Nullish Coalescing
  return (a ?? 0) + (b ?? 0);
}

console.log(foo(undefined, 2)); // 2
console.log(foo(null, 2)); // 2
console.log(foo2(undefined,2)); //2
console.log(foo2(null, 2)); //2