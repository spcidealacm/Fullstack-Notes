'use strict'
function person(a, b) {
    return a * b;
}

person.username = "Tianyang Guan";
person.age = 30;
person.skills = {
    driver: 3,
    cooking: 2
}
person.func = function () {
    return 0;
}


let result = new person(2, 3);
let result2 = new person(3, 5);

console.log(person(4, 6));

console.log(result2);



function foo() {
    let number = 1
    function bar() {
        number++
        console.log(number)
    }
    return bar
}
var mybar = foo()
mybar()