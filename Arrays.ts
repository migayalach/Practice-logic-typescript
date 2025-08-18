function fillArray(elements: number) {
  let vector: number[] = [];
  for (let i = 0; i < elements; i++) {
    const k = Math.floor(Math.random() * 99);
    vector.push(k);
  }
  return vector;
}

// Llenar un array de elementos aleatorios y contar solo los numeros que pertenecen a la serie fibonacci
function fibonacci(num: number) {
  let a = -1;
  let b = 1;
  let c = 0;
  for (let i = 0; i < 99; i++) {
    c = a + b;
    // if (c < num) {
    //   return c;
    //   a = b;
    //   b = c;
    // }
    return;
  }
}

function countFiboArray() {
  const array = fillArray(10);
  let count = 0;
  for (let i = 0; i < array.length; i++) {}
}

// 0 1 1 2 3 5 8 13
console.log(fibonacci(2));

// realizar el metodo burbuja

// Llenar un array de elementos aleatorios y rotar a la derecha

// Llenar un array de elementos rotar los elementos pares a la izquierda y los impares a la derecha

// Escribe un programa que lea 15 números por teclado y que los almacene en un array
// Rota los elementos de ese array, es decir, el elemento de la posición 0 debe pasar a
// la posición 1, el de la 1 a la 2, etc. El número que se encuentra en la última posición
// debe pasar a la posición 0. Finalmente, muestra el contenido del array.
