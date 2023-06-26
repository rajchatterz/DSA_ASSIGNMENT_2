let flowerbed = [1,0,0,0,1]
let n = 1;
function placeFlower(flowerbed){
    let count = 0;
    for(let i=0;i<flowerbed.length;i++){
        if(flowerbed[i]===0 && (i===0 || flowerbed[i-1]===0) && (i===flowerbed.length-1 || flowerbed[i+1]===0)){
            count++
            flowerbed[i]=1
        }
    }
    return count>=n;
}