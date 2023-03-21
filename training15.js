const stringExample = "참깨빵 위에 순쇠고기 패티 두 장 특별한 소스 양상추 치즈 피클 양파까지";

function splitString(stringParams) {
  let result = stringParams.split(' ');
  console.log(result); //['참깨빵', '위에', '순쇠고기', '패티', '두', '장', '특별한', '소스', '양상추', '치즈', '피클', '양파까지' ]
  return result;
};

function appendString(stringArray, callback) {
  let body = "";
  stringArray.forEach(function(element) {
    body = body + element;
  });
  callback(body);
  console.log("body " + body);
};

let bodyTemplate = ``;
let resultCase = appendString(splitString(stringExample), function(body) {
  console.log(body); // 참깨빵위에순쇠고기패티두장특별한소스양상추치즈피클양파까지
  bodyTemplate += body.substring(0, body.indexOf("티") + 1);
  console.log(bodyTemplate); //참깨빵위에순쇠고기패티
});

function elementMaker(string) {
  return `<div>${string}</div>`;
}

console.log(elementMaker(bodyTemplate)); //<div>참깨빵위에순쇠고기패티</div>