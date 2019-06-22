function fib(till, x, y) {
  if (y > till) return;
  fib(till, y, x + y);
}

fib(10, 1, 1);
