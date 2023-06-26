function bionary(nums,target){
    let start=0
    let end = nums.length-1
    while(start<=end){
        const mid = Math.floor((start+end)/2)
        if(nums[mid]===target){
            return mid
        }else if(nums[mid]<target){
            start=mid+1
        }else{
            end=mid-1
        }
    }
    return -1;
}

let nums = [-1,0,3,5,9,12]

let target=9;
const result = bionary(nums,target)
console.log(result)