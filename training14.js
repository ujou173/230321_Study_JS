function one(first, second, callback) {
  let addResult = first + second; // first + second 연산
  return callback(addResult);
};

const oneCallback = one(3, 5, function(result) {
  let callbackResult = result * 2; // first + second 연산 뒤에 * 2 연산
  return callbackResult;
});

console.log(oneCallback);

const exampleArray = [5,2,7,-5,3,9,324,1,-1,66,43];
function minValue(array, callback) {
  let min = array[0] // 배열의 0번 값을 변수에 넣어두고
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) { // 배열의 0번 보다 작을 경우
      min = array[i]; // 변수를 갱신
    }
  }
  return callback(min);
}

const minValueExample = minValue(exampleArray, function(result) {
  return result * 2;
});

console.log(minValueExample);