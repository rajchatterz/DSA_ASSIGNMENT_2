let nums = [1,2,3,4,2,3,4,5]
function maxProduct(nums){
    let start = 0;
    let end = nums.length-1
    let product1=(nums[end]*nums[end-1]*nums[end-2])
    let product2 = (nums[start]*nums[start+1]*nums[end-1])
    return Math.max(product1,product2)
    
    
    }
console.log(maxProduct(nums))