const factorial = (limit: number) => {
  let r = 1;
  for (let i = 1; i <= limit; i++) {
    r = r * i;
    console.log(r);
  }
  return r;
};

const fibonnaci = (limit: number) => {
  let a = -1;
  let b = 1;
  let r = 0;
  for (let i = 0; i < limit; i++) {
    r = a + b;
    console.log(r);
    a = b;
    b = r;
  }
  return r;
};

const primo = (number: number) => {
  let p = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      p++;
    }
  }
  if (p === 2) {
    return 1;
  } else {
    return 0;
  }
};

const seriePrimos = (limit: number) => {
  let c = 1;
  let n = limit;
  while (c <= n) {
    let result = primo(c);
    result === 1 ? console.log(c) : n++;
    c++;
  }
  return "That is all";
};

const baseNumber = (number: number, base: number) => {
  let result = 1;
  for (let i = 1; i <= base; i++) {
    result = result * number;
  }
  return result;
};

// 1, 4, 9, 16, 25, ...
const seriePotencia = (limit: number, base: number) => {
  for (let i = 1; i <= limit; i++) {
    const number = baseNumber(i, base);
    console.log(number);
  }
};

// seriePotencia(5, 3);
// seriePotencia(5, 2);
// console.log(seriePrimos(5));
// console.log(primo(25));
// console.log(factorial(5));
// console.log(fibonnaci(3));
