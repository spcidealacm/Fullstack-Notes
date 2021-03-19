// 对 传入的subject对象 内部存储的所有内容执行回调
function execRecursively(fn, subject, _refs = null){
	if(!_refs)
		_refs = new WeakSet();

	// 避免无限递归
	if(_refs.has(subject))
		return;

	fn(subject);
	if("object" === typeof subject){
		_refs.add(subject);
		for(let key in subject)
			execRecursively(fn, subject[key], _refs);
	}
}

const foo = {
	foo: "Foo",
	bar: {
		bar: "Bar"
	}
};

foo.bar.baz = foo; // 循环引用!
execRecursively(obj => console.log(obj), foo);