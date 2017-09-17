module.exports = function multiply(first, second) {
if (first*second<9007199254740991) {
		return String(first*second);
	} else {

	var firstArr = first.split("").reverse();
	var secondArr = second.split("").reverse();
	var result = [];

	for(var i = 0; i<firstArr.length; i++) {
	for(var j = 0; j<secondArr.length; j++) {
	var position = i+j;
	if (result[position] === undefined) {
	result[position] = 0;
} 
	result[position]+=firstArr[i]*secondArr[j];
	
}
}
	for(var k = 0; k<result.length; k++) {
	if (result[k]>9) {
if (result[k+1] === undefined) {
	result[k+1] = 0;
}
	result[k+1] += Math.floor(result[k] / 10);
	result[k] = result[k]%10;

}
}
return result.reverse().join("");
} 
}
