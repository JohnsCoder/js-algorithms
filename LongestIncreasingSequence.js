function LongestIncreasingSequence(arr) {
  let scoreArr = [];

  for (let idx1 = 0; idx1 < arr.length; idx1++) {
    let score = 0;

    let firstValue = arr[idx1];
    for (let idx2 = idx1 + 1; idx2 < arr.length; idx2++) {
      if (firstValue < arr[idx2]) {
          firstValue = arr[idx2];
        score += 1;
      }
    }
    scoreArr.push(score + 1);
  }
  let highLis = 0;
  for (let idx3 = 0; idx3 < scoreArr.length; idx3++) {
    if (scoreArr[idx3] > highLis) {
      highLis = scoreArr[idx3];
    }
  }
  return highLis;
}

console.log(
  LongestIncreasingSequence([9, 9, 4, 2])
);
