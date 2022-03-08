const root = document.getElementById("root");
const bigText = <h2 id="Title">Text</h2>
const Button = <button>버튼</button>

const containter = React.createElement("div", null [bigText, Button]);
ReactDOM.render(containter, root);