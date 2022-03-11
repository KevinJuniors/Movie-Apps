// import React from "react";
// import ReactDOM from "react-dom";

const root = document.getElementById("root");

function App() {
    const [counter, modifier] = React.useState(0);
    
    const onClick = () => {
        modifier(100);
        counter = 100;
    }

    return (
        <div>
            <h3>합계 : {counter}</h3>
            <button>Push</button>
        </div>
    )
}

ReactDOM.render(<App />, root);