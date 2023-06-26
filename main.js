function minScore(nums, k) {
  let minScore = Infinity;

  for (let i = 0; i < nums.length; i++) {
    let modifiedNums = [...nums];
    modifiedNums[i] -= k;

    let maxNum = -Infinity;
    let minNum = Infinity;

    for (let num of modifiedNums) {
      maxNum = Math.max(maxNum, num);
      minNum = Math.min(minNum, num);
    }

    let score = maxNum - minNum;
    minScore = Math.min(minScore, score);
  }

  return minScore;
}

const nums = [1];
const k = 0;
const minScoreValue = minScore(nums, k);
console.log(minScoreValue); 
