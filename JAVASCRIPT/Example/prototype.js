// 'use strict'

function func() {

}


//一个constructor function(构造函数) 的prototype（原型）中，有constructor这个结构。而这个结构的内容指向这个函数。
//所以func的原型（prototype）应该是
{
    constructor: func()
    __proto__: Object()
}

//而普通的object是没有constructor的。普通的object只有__proto__
let bar = {}
//其结构原型(prototype)应该是
{
    __proto__: Object()
}

//然而，constructor function (构造函数)所产生的对象(let Func = new func())
//会将 constructor function 的 prototype 完全赋予给 新产生对象的 __proto__
function func() {

}
let Func = new func()
// Func 本身的结构就是
{
    __proto__: {
        constructor: func()
        __proto__: Object()
    }
}
// ----------------------------------------------------
function func2() {

}
func2.prototype.a = 'haha'
//此时这个 constructor function 构造函数的 prototype 应该是
{
    a: 'haha'
    constructor: func2()
    __proto__: Object()
}
//因为这个 a 直接设置在了原型上面。

function func3() {

}
func3.prototype.a = 'haha'
func3.b = 'hehe'
//此时的prototype是
{
    a: 'haha'
    constructor: { //f func3()
        b: 'hehe'
    }
    __proto__: Object()
}
// b此时在constructor内部。
function func3() {
    this.c = 'hihi'
}
func3.prototype.a = 'haha'
func3.b = 'hehe'
let Func3 = new func3()
// 此时观察和Func3的结构
{
    c: 'hihi'
    __proto__: {
        a: 'haha'
        constructor: { //f func3()
            b: 'hehe'
        }
        __proto__: Object()
    }
}

//此时如果打印 console.log(Func3.a, Func3.b, Func3.c)其结果是 haha undefined hihi
console.log(Func3.a, Func3.b, Func3.c)
// 这是因为object并不会寻找constructor内的内容。它只会寻找自身属性，然后是原型上面的属性。