function App() {
    const [minutes, setMinutes] = React.useState();
    const onChange = (event) => {
        setMinutes(event.target.value);
    }

    return (
        <div>
            <h1 className="Text">시간 단위변환기</h1>

            <input 
                type="number" 
                id="Minutes" 
                placeholder="Minute" 
                value={minutes} 
                onChange={onChange} 
            />
                <label htmlFor="Minutes">분</label> →
            <h4>변환하고 싶은 시간 단위의 결과는 : {minutes} 분</h4>
            <input type="number" id="Hours" placeholder="Hour" />
                <label htmlFor="Hours">시</label>
        </div>
    )
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);