'use strict'
function person(a, b){
    this.time = a * b
    return this.time;
}

person.username = "Tianyang Guan";
person.age = 30;
person.skills = { 
    driver: 3, 
    cooking: 2
}
person.func = function(){
    return 0;
}

person.name="haha";

let result = new person(2, 3);
let result2 = new person(3, 5);

console.log(person(4, 6));

console.log(result2);