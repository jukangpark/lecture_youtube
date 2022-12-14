// 변수의 선언과 할당

console.log(humanName); // undefined "값" // 호이스팅

// 1. 변수의 선언 = 변수를 생성
var humanName;

// 2. 값의 할당
humanName = "jukang";

console.log(humanName);

/* 
    <식별자 네이밍 규칙>
    1. 특수문자를 제외한, 문자, 숫자, 언더스코어(_), 달러기호($)를 포함할 수 있다.
    2. 식별자는 숫자로 시작할 수 없다.
    3. 예약어는 식별자로 사용할 수 없다.  (let, var, if)
 */

// 변수 선언은 소스코드가 순차적으로 실행되는 시점인 런타임 이전에 먼저 실행되지만,
// 값의 할당은 소스코드가 순차적으로 실행되는 시점인 런타임에 실행된다.
// 실행컨텍스트와 호이스팅
