'use strict';

var fooSingletonModule = (function() {
	var instance;
	var publicObject = {};

	function MyFunction(arg1, arg2) {
		this.a = arg1 || 0;
		this.b = arg2 || 0;
		this.sum = function() {
			return this.a + this.b;
		}
	}

	publicObject.getInstance = function(arg1, arg2) {
		if (instance === undefined) {
			instance = new MyFunction(arg1, arg2);
			return instance;
		}
		
		return instance;
	}	

	return publicObject;
})();

var singletonTest1 = fooSingletonModule.getInstance(1, 2);
var singletonTest2 = fooSingletonModule.getInstance(3, 4);
var singletonTest3 = fooSingletonModule.getInstance(5, 6);

console.log('The sum is: %i', singletonTest1.sum()); //works ok
console.log('The sum continues to be: %i', singletonTest2.sum()); //works ok but the same values references from the first instance remain
console.log('We can also access internal properties: %i + %i = %i', singletonTest1.a, singletonTest1.b, singletonTest1.sum()); //yeap
console.log('And mess around mixing the instances: %i + %i = %i', singletonTest2.a, singletonTest1.b, singletonTest3.sum()); //no matter what the module instance refers to the existing instantiation
console.log('Trying to access "private" instance variable: %s', singletonTest1.instance); //undefined
console.log('Trying to access "private" MyFunction function: %o', singletonTest1.MyFunction); //undefined
