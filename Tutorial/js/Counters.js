let counter = 0;

function countUp() {
    counter = counter + 1;c
}

const Container = () => (
    <div>
        <h3>합계 : {counter}</h3>
        <button onClick={countUp}>Click Me</button>
    </div>
);

ReactDOM.render(<Container />, root);