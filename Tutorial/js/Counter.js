// count의 초기값을 설정
let count = 0;

// 생성한 HTML Element들의 ID 속성과 TagName을 JavaScript로 불러옴
const button = document.getElementById("btn");
const span = document.querySelector("span");        

// Clcik Event HandleClick를 생성
function handleClick() {
    // "count" Data를 업데이트
    count = count + 1;

    // 업데이트된 Count Data를 HTML 상의 span Element에 반영
    span.innerText = `합계 : ${count}`;
}

// Click Evnet를 감지하여 실행
button.addEventListener("click", handleClick);