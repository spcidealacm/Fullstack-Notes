'use strict'

const mySet = new Set();

mySet.add("10");
mySet.add("7");
mySet.add(10);
mySet.add(7);

const obj = {
    name: "Tianyang",
    age: 33
}

mySet.add(obj);

for(let [key,value] of mySet.entries()){
    console.log(key, value);
}

console.log(mySet);