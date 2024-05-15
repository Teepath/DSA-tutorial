// var merge = function(nums1, m, nums2, n) {
    
//     nums1= nums1.slice(0, n)
//     nums1=[...nums1, ...nums2]
    
//     for(let i=0; i<nums1.length-1; i++){
//         let toInsert = nums1[i];
//         let j=i-1;

//         while(j>=0 && nums1[j] > toInsert){
//             nums1[j +1] = nums1[j]
//             j=j-1
//         }
//         nums1[j+1] = toInsert
//     }
//     console.log(nums1)
// };

fu

const nums1=[1,2,3,0,0,0]
const nums2=[2,5,6]
const m=3,n=3;
merge(nums1, m, nums2, n)
