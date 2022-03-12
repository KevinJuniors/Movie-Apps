function App() {
    const [counter, setCounter] = React.useState(0);
    
    const onClick = () => {
        setCounter(counter + 1);
        // setCounter((current) => current + 1);
    }

    console.log(counter);
    // console.log(current);

    return (
        <div>
            <h3>합계 : {counter}</h3>
            <button onClick={onClick}>Call</button>
        </div>
    )
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);