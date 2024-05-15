function recursiveBinarySearch(arr, target){
    return search(arr, target, left=0, right=arr.length-1)
}


function search(arr, target,left, right){
    if(left > right) return -1;

    let middleIndex = Math.floor((left + right)/2)

    if(target === arr[middleIndex]){
        return middleIndex
    }

    if(target < arr[middleIndex]){
       return search(arr, target, left=0, right=middleIndex-1)
    }else{
        return search(arr,target, left=middleIndex+1, right=arr.length-1)
    }
}


console.log(recursiveBinarySearch([-5, 2, 4, 6, 10, 13], 13))
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10, 13], 6))
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10, 13],4))


