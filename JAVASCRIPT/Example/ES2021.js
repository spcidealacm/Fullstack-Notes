[a, b] = [false, true];
a ||= b //=> a = a || b
console.log(a); // true


[a, b] = [false, true];
a &&= b //=> a = a && b
console.log(a); // false


[a, b] = [false, true];
a ??= b //=> a = a ?? b
console.log(a); // false

const money = 1_000_000_000; 
//=> const money = 1000000000
console.log(typeof(money))
//number
console.log(money === 1000000000)
//true


[a, b] = [2, 1];
a ||= b // a = a || b
console.log(a); // 1


[a, b] = [2, 1];
a &&= b // a = a && b
console.log(a); // 2


[a, b] = [2, 1];
a ??= b // a = a ?? b
console.log(a); // 1



[a, b] = [null, true];
a ||= b // a = a || b
console.log(a); // true

[a, b] = [null, true];
a &&= b // a = a && b
console.log(a); // null

[a, b] = [null, false];
a &&= b // a = a && b
console.log(a); // null

[a, b] = [false, null];
a &&= b // a = a && b
console.log(a); // false

[a, b] = [true, null];
a &&= b // a = a && b
console.log(a); // null

[a, b] = [null, true];
a ??= b // a = a ?? b
console.log(a); // true

a ?? b; //等价于
(a !== null && a !== undefined) ? a : b;