const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let res = []
	for( let i = 0 ; i < arr.length ; i++){
		let sum = 0
		let temp = []
		for(let j = i ; j < arr.length ; j++){
			sum += arr[j]
			if(sum<=n){
			
			temp.push(arr[j])
			}else{
				break;
			}
			
		}
		temp.length && res.push(temp)  
	}
	return res; 
};

const n = prompt("Enter n: "); 
alert(JSON.stringify(divide(arr, n))); 