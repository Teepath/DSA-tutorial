function binarySearch(arr, t){

    let leftIndex=0;
    let rightIndex= arr.length-1

    while(leftIndex <= rightIndex){
        let middleIndex= Math.floor((leftIndex + rightIndex)/2)

        if(arr[middleIndex] === t){
            return middleIndex
        }

        if(t < arr[middleIndex]){
            rightIndex=middleIndex -1
        }else{
            leftIndex = middleIndex +1
        }
    }

    return -1
}


console.log(binarySearch([-5, 2, 4, 6, 10, 13], 13))
console.log(binarySearch([-5, 2, 4, 6, 10], 6))
console.log(binarySearch([-5, 2, 4, 6, 10], 20))