'use strict';

var fooModule = (function() {
	var publicObject = {};
	var privateProperty = 'they caught me!!';

	publicObject.publicMethod = function() {
		return privateProperty;
	}

	return publicObject;
})();

console.log('Accessing "privateProperty" variable through module function: %s.', fooModule.publicMethod()); //works ok
console.log('Accessing "privateProperty" variable directly: %s.', fooModule.privateProperty); //undefined