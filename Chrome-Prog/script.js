"use strict";


var a = [1,2,3,4,5];
function sortRec(arr,newarray=[]){
	if(arr.length==0){
		return newarray;
    }else{
		newarray.push(arr.pop())
		return sortRec(arr,newarray);
    }

}
var result = sortRec(a);
console.log(result,'aaaaaaaa');
var abv = 1;


/***********************************************************/

function sort(x, i=0){
	if(i == x.length){
		return x;
	}
		if(x[i-1] > x[i]){
        var tmp = x[i - 1];
        x[i - 1] = x[i];
        x[i] = tmp;
	}
	return sort(x, i+1);
}
console.log(sort([2,5,1,6,85,12,45]));

var a = (function abc(){
	let count = 0;
	return function(){
		return (count++);
	}


})();
a();
a();
a();
console.log('result',a());

name = 'tanoy';
var obj = {
	name:'shekhar',
	print: () => {
		console.log(this.name);
	}

}
obj.print();
/***********************************************************/


var a= [{card:'visa',name:'shekhar'},{card:'mastercard',name:'tanoy'},{card:'visa',name:'nitish'},{card:'mastercard',name:'saket'}];

function group(arr,key){
	return arr.reduce((output,item) => {
		if(!output[item[key]]){
        	output[item[key]] = [];
		}
		output[item[key]].push(item);
	return output;
	},{});
}

group(a,'card');

/***********************************************************/

function celebrityIDCreator (theCelebrities) {
  var i;
  var uniqueID = 100;
  for (i = 0; i < theCelebrities.length; i++) {
      theCelebrities[i]["id"] = function (j)  { // the j parametric variable is the i passed in on invocation of this IIFE
          return function () {
              return uniqueID + j; // each iteration of the for loop passes the current value of i into this IIFE and it saves the correct value to the array
          } // BY adding () at the end of this function, we are executing it immediately and returning just the value of uniqueID + j, instead of returning a function.
      } (i); // immediately invoke the function passing the i variable as a parameter
  }

  return theCelebrities;
}

var actionCelebs = [{name:"Stallone", id:0}, {name:"Cruise", id:0}, {name:"Willis", id:0}];
var createIdForActionCelebs = celebrityIDCreator (actionCelebs);
var stalloneID = createIdForActionCelebs [0];
console.log(stalloneID.id()); // 100
var cruiseID = createIdForActionCelebs [1];console.log(cruiseID.id()); // 101



/***********************************************************/

class parents{
  print(){
      console.log('parent called');
  }
}

class child extends parents{
  print(){
      super.print();
      console.log('child called');
  }
}

var obj = new child();
obj.print();

/***********************************************************/

function abc(kids,toys,s){
	var result = 0;
	var isSecodLoop = false;
	while(toys>0){
		start = isSecodLoop ? 1:s;
		isSecodLoop = true;
    	for(var i = start;i<=kids && toys>0;i++){
        	toys--;
			result = i;
		}
	}
	console.log(result);
}
abc(3,5,2);

/***********************************************************/

function abcd(arr=[3,2,6,5],result=0){
	if(arr.length==2){
    return result + arr[0]+arr[1];
	}else{
		var first = arr.shift();
		var last = arr.pop();
        result = first+last;
		return abcd(arr,result);
    }

}
abcd();

/***********************************************************/
