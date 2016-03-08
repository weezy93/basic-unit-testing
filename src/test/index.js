// function intersection(array1, array2) {
// 	var resultArray = [];
// 	// return an array of items that is in both input arrays
// 	array1.filter(function(item){
// 		if(array2.indexOf(item) !== -1){
// 			resultArray.push(item);
// 		}
// 	});
// 	return resultArray;
// }

function intersection(array1, array2) {
	return array1.filter(function(item){
		if(array2.indexOf(item) !== -1){
			return item;
		}
	});
}




	// return an array of items that is in both input arrays