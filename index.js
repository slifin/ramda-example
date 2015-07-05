/* objective return an array of names from json variable
in the most maintainable way */
(function(_){
	'use strict';
	var result,
	getNames,
	json =[
	{name:'Johnny'},
	{name:'Bravo'}
	];
	//
	//procedural -- no reuse
	//
	result = [];
	for(var i = 0; i < json.length; i++){
		result.push(json[i].name);
	}
	console.log('procedural');
	console.log(result);
	//
	//functional -- no reuse
	//
	result = _.map(function(obj){
		return obj.name;
	},json);
	console.log('basic functional');
	console.log(result);
	//
	//functional -- with reuse -- without currying
	//
	getNames = function(obj){
		return obj.name;
	};
	result = _.map(getNames,json);
	console.log('named function, functional');
	console.log(result);
	//
	//functional -- with reuse -- with data decoupled from operations
	//
	getNames = _.curry(function(obj){
		return obj.name;
	});
	getNames = _.map(getNames);
	result = getNames(json);
	console.log('curried getNames function');
	console.log(result);
	//
	//functional -- with reuse -- with currying -- with ramda
	//
	getNames = _.map(_.prop('name'));
	result = getNames(json);
	console.log('ramda helper function');
	console.log(result);
	//the important step is decoupling data from the operations
})(R);