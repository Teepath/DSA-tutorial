// function factorial(n){
//     if(n ==0) return 1
//     let result=n

//     for(let i=n-1; i>0; i--){
//         console.log(result)
//         result = result * i
      
//     }

//     return result

// }

function factorial(n){
    if(n===0){
        return 1
    }
  
    return n * factorial(n-1)
}


console.log(factorial(5))