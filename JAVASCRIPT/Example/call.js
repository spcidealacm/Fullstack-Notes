'use strict'

function animal(name, type = 'animal'){
    this.property = type
    this.name = name
}

function animal2(name, type = 'animal'){
    this.property2 = type
    this.name = name + "2"
}

function dog(name){
    animal.call(this, name, 'dog')
    animal2.call(this, name, 'dog')
}

function cat(name){
    animal.call(this, name, 'cat')
    animal2.call(this, name, 'cat')
}

let aDog = new dog('huahua')
let aCat = new cat('caocao')

console.log(aDog)
console.log(aCat)