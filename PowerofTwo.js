// function powerOfTwo(n){
//     if(n<1) return false

//     while(n > 1){
//         if(n% 2 !== 0) return false;

//         n=n/2
//     }

//     return true
// }

function BetwisePoweroftwo(n){
    if(n<1)return

    return (n & (n-1))  === 0;
}


// console.log(powerOfTwo(1))
// console.log(powerOfTwo(5))
// console.log(powerOfTwo(8))

console.log(BetwisePoweroftwo(1))

console.log(BetwisePoweroftwo(5))

console.log(BetwisePoweroftwo(8))