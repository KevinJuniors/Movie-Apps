// const button = document.querySelector("#btn");
const button = document.getElementById("btn");

function handleClick() {
    console.log("버튼을 클릭하셨습니다.");
}

button.addEventListener("click", handleClick);