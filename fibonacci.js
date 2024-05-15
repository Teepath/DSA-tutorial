// function fibonacci(n){

//     if(n <2) return n

//     const fib=[0, 1]

//     for(let i=2; i < n; i++){
//        fib[i] = fib[i - 1] + fib[i - 2]
//        console.log(fib[i - 1])
//     }

//     return fib

// }

function fibonacci(n){
    if(n<2){
        return n
    }

    return (fibonacci(n-1) + fibonacci(n-2))
}
console.log(fibonacci(1))
console.log(fibonacci(3))
console.log(fibonacci(6))