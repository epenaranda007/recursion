// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if(typeof obj === 'function' || typeof obj === 'undefined'){
  	return;
  }
  else if(obj === null){ 
  	return "null";
  }
  else if(typeof obj === 'string'){
  	return "\""+obj+"\"";
  }
  else if(Array.isArray(obj)){
  	var result = "[";
	if(obj.length === 0){ 
  		return "[]";
  	}
  	result += obj.map(function(item){ return stringifyJSON(item);}).toString() + "]"; 
  	return result;
  }
  else if(typeof obj === 'object'){ 
  	var result = "{";
	if(Object.keys(obj).length === 0){
		return "{}";
	}
	_.each(obj, function(value, key){
		if(stringifyJSON(value) !== undefined){
			if(result.length === 1){ 
				result += stringifyJSON(key) + ":" + stringifyJSON(value);
			}
			else{
				result += "," + stringifyJSON(key) + ":" + stringifyJSON(value);
			}	
		}
	});
	return result + "}";
  }
  else{
  	return obj.toString();
  }
};

