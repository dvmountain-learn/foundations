function smallestDifference(a, b) {
    let minDiff = Infinity
    a.forEach(aNum => {
        b.forEach(bNum => {
            let diff = Math.abs(aNum - bNum)
            if (diff < minDiff) minDiff = diff
        })
    })
    return minDiff
}

function smallestDiff(first, second) {
    first = first.sort((a, b) => a - b);
    second = second.sort((a, b) => a - b);
    let best = null;
  
    let indexOne = 0;
    let indexTwo = 0;
  
    while (indexOne < first.length && indexTwo < second.length) {
      let diff = first[indexOne] - second[indexTwo]
  
      if (diff === 0) {
        return 0
      }
  
      if (best === null || diff < best) {
        best = diff
      }
  
      if (first[indexOne] > second[indexTwo]) {
        indexTwo++
      } else {
        indexOne++
      }
    }
  
    return best
}

console.log(smallestDifference([10, 20, 14, 16, 18], [30, 23, 54, 33, 96]))
console.log(smallestDifference([1, 2, 11, 5], [4, 12, 19, 23, 127, 235]))

const setArray = arr => [...new Set(arr)]
const arr = [1,2,3,4,5,1,3,4,5,2,6]
console.log(setArray(arr))