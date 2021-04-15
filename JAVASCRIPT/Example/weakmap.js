'use strict'

const wmap = new WeakMap();

function block() {
    const item_1 = {
        name: "Tianyang",
        age: "33"
    }

    const item_2 = {
        name: "Guan",
        age: "33"
    }

    const teacher = function (student, tag = "") {
        const students = [];
        students.push(student);
        console.log(tag, students);
    }

    wmap.set(item_1, "student");
    wmap.set(item_2, teacher);

    wmap.get(item_2)(wmap.get(item_1), "1")

    return { item_1, item_2 };
}

let { item_1, item_2 } = block();
delete item_1.age

wmap.get(item_2)(wmap.get(item_1), "2")


