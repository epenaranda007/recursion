// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var result = [];

  searchForClassName(document.childNodes, 0);
  
  function searchForClassName(obj, index){
  	if(index === obj.length){ /* base case */
  		return;
  	}
  	if(obj[index].nodeType === 1){  /* 1 means element, filters only elements  */
  		var cList = obj[index].classList;
	  	if(cList.length !== 0 && constainsClass(cList, 0)){ 
	  		result.push(obj[index]);
	  	}		
  		if(obj[index].childNodes.length > 0){
  			searchForClassName(obj[index].childNodes, 0);
  		}	  	
	}
  	searchForClassName(obj, index+1);
  };

  function constainsClass(array, index){
  	if(array[index] === className){
  		return true;
  	}
  	if(array.length-1 === index){
  		return false;
  	}
  	return constainsClass(array, index+1);
  }
  
  return result;
};
