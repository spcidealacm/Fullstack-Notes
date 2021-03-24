'use strict'
function Foo(){
    this[100] = 'test-100';
    this['B'] = 'Bar-B';
    this[1] = 'test-1';
    this['A'] = 'Bar-A';
}

let bar = new Foo();

Foo.func = function(){
    return 0;
}

bar.func = function(){
    return this[100] + this[1];
}

for(let key in bar){
    console.log(`index: ${key} value: ${bar[key]}`);
}