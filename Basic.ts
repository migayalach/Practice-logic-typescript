// invertir un numero
function invertirNumero(number: any) {
  if (number > 0) {
    let n = 0;
    let c = 1;
    while (number !== 0) {
      let x = number % 10;
      number = Math.trunc(number / 10);
      if (c > 1) {
        n = n * 10 + x;
      } else {
        n = x;
      }
      c++;
    }
    return n;
  } else {
    return `:C`;
  }
}

// Palíndromo
function palindromo(word: string) {
  let tam = word.length;
  let np = "";
  for (let i = tam - 1; i >= 0; i--) {
    np += word[i];
  }
  if (word === np) {
    return ";D";
  }
  return ":C";
}

// Binario decimal
function binarioDecimal(number: number) {
  let p = 0;
  let nn = 0;
  while (number !== 0) {
    let x = number % 10;
    number = Math.trunc(number / 10);
    if (x === 1) {
      nn += Math.pow(2, p);
    }
    p++;
  }
  return nn;
}

// Decimal binario
function decimalBinario(num: number) {
  if (num === 1) {
    return 1;
  } else if (num < 1) {
    return 0;
  }

  let nn = 0;
  let mul = 0;
  let z = 1;
  while (num !== 0) {
    let x = num % 2;
    num = Math.trunc(num / 2);
    nn = nn * 10 + x;
    mul++;
  }

  if (nn === 1) {
    for (let i = 0; i < mul - 1; i++) {
      z = z * 10;
    }
    return z;
  }

  return nn;
}

console.log(invertirNumero(971));
console.log(invertirNumero(276));
console.log(invertirNumero(5060));
console.log(palindromo("memem"));
console.log(binarioDecimal(1101));
console.log(binarioDecimal(1001));
console.log(binarioDecimal(1000));
console.log(decimalBinario(21));
console.log(decimalBinario(9));
console.log(decimalBinario(8));
console.log(decimalBinario(1));
console.log(decimalBinario(16));
console.log(decimalBinario(32));
console.log(decimalBinario(-32));
console.log(decimalBinario(0));
console.log(decimalBinario(2));
