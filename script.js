const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let res = []
    let sum  = 0 
    let temp = []
    for(let j = 0 ; j < arr.length; j++){
        
        sum += arr[j]        
        if(sum<=n){
            temp.push(arr[j])
        }else{
            res.push(temp)
            temp = [arr[j]]
            sum = arr[j]
            
        }
        
        if(j==arr.length-1 && temp.length){
            res.push(temp)
        }

       
    }
    
	
	return res; 
};

const n = prompt("Enter n: ");  
alert(JSON.stringify(divide(arr, n))); 

