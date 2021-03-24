function func(a, b){
    this.time = a * b
    return this.time;
}

func.username = "Tianyang Guan";
func.age = 30;

let result = new func(2, 3);
let result2 = new func(3, 5);

console.log(func(4, 6));

console.log(result2);