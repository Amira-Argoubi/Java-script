//ex1
function sumNums(num) {
  let array = [];
  for (let i = 0; i <= num; i++) {
    array.push(i);
  }
  return array.reduce((a, b) => a + b);
}
console.log(sumNums(3));
//ex2
let array = [1, 2, 3, 4];
function reverse(array) {
  return array.reverse();
}
console.log(reverse(array));
//ex3
let array = [1, 2, 3, 4];
function last(array) {
  return array[array.length - 1];
}
console.log(last(array));

//ex4

let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7];

function conca(arr1, arr2) {
  return arr1.concat(arr2);
}
console.log(conca(arr1, arr2));

//ex5
let arr = [1, 2, 3, 4];

function pos(arr, item) {
  return arr.indexOf(item);
}
console.log(pos(arr, 1));

//ex6
function MultipliedArr(array) {
  return array.map(el => el * 2);
}
console.log(getMultipliedArr([8, 10, 6]));
//ex7
function long(array) {
  return array.map(el => el.length);
}
console.log(long(["aml", "asd"]));
//ex8
function sum(input) {
  if (toString.call(input) !== "[object Array]") return false;

  var total = 0;
  for (var i = 0; i < input.length; i++) {
    if (isNaN(input[i])) {
      continue;
    }
    total += Number(input[i]);
  }
  return total;
}
console.log(sum([1, 2, 3]));
//ex9
var arr = [4, 5, 7, 8, 14, 45, 76];

function even(a) {
  return a.filter(function(val) {
    return val % 2 === 0;
  });
}

console.log(even(arr));

//ex10
function findLargestNum(array) {
  return Math.max(...array);
}
console.log(findLargestNum([5, 10, 50, 200]));
//ex11
function findSmallerNum(array) {
  return Math.min(...array);
}
console.log(findSmallerNum([5, 10, 50, 200]));
//ex12
var array = ["one", 3, "cool", 4];

var firstAndLast = function(arr) {
  return [arr[0], arr[arr.length - 1]];
};

console.log(firstAndLast(array));
//ex13
function diff(array) {
  return Math.max(...array) - Math.min(...array);
}
console.log(diff([5, 10, 50, 200]));
//ex14
function multipArr(array) {
  return array.map(el => el * array.length);
}
console.log(multipArr([8, 10, 6]));
//ex15
function multipArr(array) {
  return array.map(el => el * -1);
}
console.log(multipArr([8, 10, 6]));
//ex16
var arr = ["amira", "amis", "arme"];

function longStr(str) {
  return str.filter(function(string) {
    return string.length == 4;
  });
}

console.log(longStr(arr));
//ex17
function arrStr(array, str) {
  return array.map(el => el + str);
}
console.log(arrStr(["am", "is", "or"], "er"));
//ex18
function Null(a) {
  return a.filter(function(val) {
    return val != null;
  });
}

console.log(Null(["4", null, "8"]));
//ex19
function Null(a) {
  return a.filter(function(val) {
    return val % 13 !== 0;
  });
}

console.log(Null(["4", 26, "8"]));
