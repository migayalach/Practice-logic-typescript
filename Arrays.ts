function fillArray(elements: number) {
  let vector: number[] = [];
  for (let i = 0; i < elements; i++) {
    const k = Math.floor(Math.random() * 30);
    vector.push(k);
  }
  return vector;
}

// Llenar un array de elementos aleatorios y contar solo los numeros que pertenecen a la serie fibonacci
function fibonacci(num: number) {
  let a = -1;
  let b = 1;
  let c = 0;
  for (let i = 0; i < 30; i++) {
    if (c < num) {
      c = a + b;
      if (c === num) {
        return 1;
      } else {
        a = b;
        b = c;
      }
    } else {
      return 0;
    }
  }
}

function countFiboArray() {
  const array = fillArray(10);
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    let r = fibonacci(array[i]);
    if (r === 1) {
      count++;
    }
  }
  return count;
}
console.log(countFiboArray());

// realizar el metodo burbuja para ordenar el array en forma ascendente [2,4,6,7,8,12]
function burbuja(array: any) {
  let aux = 0;
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        aux = array[j];
        array[j] = array[i];
        array[i] = aux;
      }
    }
  }
  return array;
}

// const array = fillArray(10);
// console.log(burbuja(array));

// rotar n veces a la derecha lo elementos de un array
// [1,2,3,4,5]
// n = 2
// [5,1,2,3,4]
// [4,5,1,2,3]
// n=4
// [5,1,2,3,4]
// [4,5,1,2,3]
// [3,4,5,1,2]
// [2,3,4,5,1]
function rote(n, array) {
  let aux = 0;
  let c = 0;
  let tam = array.length - 1;
  while (c < n) {
    aux = array[tam];
    for (let i = tam; i > 0; i--) {
      array[i] = array[i - 1];
    }
    array[0] = aux;
    c++;
  }
  return array;
}
// const array = fillArray(5);
// console.log(array);
// console.log(rote(2, array));

// Llenar un array de elementos rotar los elementos pares a la izquierda y los impares a la derecha
// no usar un array auxiliar
function orden(array) {
  let aux = 0;
  let c = 0;
  let tam = array.length - 1;
  let p = 0;
  while (c < tam) {
    if (array[c] % 2 === 1) {
      p = c;
      aux = array[c];
      for (let i = p + 1; i < tam + 1; i++) {
        if (array[i] % 2 === 0) {
          array[p] = array[i];
          array[i] = aux;
          break;
        }
      }
    }
    c++;
  }
  return array;
}

const array = fillArray(9);
console.log(array);
console.log(orden(array));

console.log(orden([2,7,9,4,3,2]));
console.log(orden([1,2,3,5,7]));
console.log(orden([1,2,3,5,6]));
console.log(orden([8,2,10,5,6, 1]));
