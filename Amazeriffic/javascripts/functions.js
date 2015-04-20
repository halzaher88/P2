//Pro. #2
// Req. A
var isArmstrong = function(n){
	"use strict";
	var sum = 0;
	var result = 0;
	n = String(n);
	for(var i=0; i<n.length; ++i){
		sum = parseInt(n[i]);
		result += Math.pow(sum, n.length);
	}
	if(n==result){
		return true;
	}
	else  {
		return false;
	}
}

//Req. B
var allArmstrongs = function(){
	var calNum;
	var result = " ";
	var str = " ";
	var  arr = [ ];
	for(var i=0; i<100000; ++i){
		calNum = String(i);

		for(var h=0; h<calNum.length; ++h) {
			var doMh = Math.pow(calNum[h], calNum.length);
			//arr.push(doMh);
		};
		var total = 0;
		for(var j=0; j<arr.length; ++j){
			total +=  arr[j];
		};
		if (total==calNum){
			result += calNum + ", ";
			arr.length = 0;
		}
		else{
			arr.length = 0;
		}
	}
		result = result.substring(0, result.length-2);
		return(result);
		result = " ";
}

//Req. C
var allSubstrings1 = function(n){
	var result = " ";
	for(var i=0; i<n.length; ++i){
		for(var h=i+1; h<=n.length; ++h){
			result = result + n.substring(i, h) + ", ";
		}
	}
	return result;
}

//Req. D
var allSubstrings2 = function(n){
	var result = "";
	var arr = [ ];
	for(var i=0; i<n.length; ++i){
		for(var h=i+1; h<=n.length; ++h){
			result = result + n.substring(i, h);
			arr.push(result);
		}
	}
	return arr;
}

//Req. E
var maxWord = function(n){
	var result = plyWWord[0];
	plyWWord = n.split(" ");
	//plyWWord = n.split(" ");
	for(var i=0; i<plyWWord.length; ++i){
		if(result.length<plyWWord[i].length){
			result = plyWWord[i];
		}
	}
	return result;
}