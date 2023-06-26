let candyType = [1,1,2,2,3,3,4,4,5,5,6,6];


 function maxCandy(candyType){
    let uniquecandy = new Set()
    for(let i=0;i<candyType.length;i++){
        uniquecandy.add(candyType[i])
    }
    return Math.min(candyType.length/2)
 }
console.log( maxCandy(candyType))