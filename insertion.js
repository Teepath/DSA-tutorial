function insertionSort(arr){
    if(arr.length <2){
        return arr
    }

    for(let i=0; i<arr.length; i++){
        let numberToinsert=arr[i];
        let j= i-1;

        while(j>=0 && arr[j] > numberToinsert){
            arr[j + 1] = arr[j]
            j=j-1
        }
        arr[j+1] =numberToinsert
    }
    return arr
}


const arr = [8,20,-2,4,-6]

insertionSort(arr)

console.log(arr)