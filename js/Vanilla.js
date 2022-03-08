const root = document.getElementById("root");
const span = React.createElement("h2", {id: "Frist"}, "Text");
const btn = React.createElement("button", {
    onClick: () => console.log("Clicked")
}, "Click"); 
const containter = React.createElement("div", null, [span, btn]);

ReactDOM.render(containter, root);