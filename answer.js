function firstNonConsecutive (arr) {
  var newArr =[]
    var findNonConsecutive = (currentNumber,index,arr) => {
        newArr.push(currentNumber-arr[index-1] > 1 ? currentNumber: null)
    }
    arr.forEach(findNonConsecutive)
    let result = newArr.filter(x=>x !== null)[0]
    return result === undefined ? null : result
}

function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i + 1]
    }
  }
  return null
}

function firstNonConsecutive (arr) {
    let result = arr.find((val, index) => val !== index + arr[0]);

    return (Number.isInteger(result)) ? result : null;
}
