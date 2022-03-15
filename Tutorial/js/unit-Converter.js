function App() {
    const [times, setTimes] = React.useState(0);
    const [flipped, setFlipped] = React.useState(false);
    const onChange = (event) => {
        setTimes(event.target.value);
    }
    
    const reset = () => setTimes(0);
    const onFlip = () => {
        reset();
        setFlipped(current => !current);
    }

    return (
        <div>
            <h1 className="Text">시간 단위변환기</h1>
            
            <div>
                <input 
                    type="number" 
                    id="Minutes" 
                    placeholder="Minute" 
                    value={flipped ? times * 60 : times}
                    disabled={flipped === true}
                    onChange={onChange}
                />
                
                <label htmlFor="Minutes">분 은</label>
            </div>

            <div>
                <input 
                    type="number" 
                    id="Hours" 
                    placeholder="Hour"
                    value={flipped ? times : Math.round(times / 60)}
                    disabled={flipped === false}
                />

                <label htmlFor="Hours">시간 입니다.</label>
            </div>

            <button onClick={reset}>Reset</button>
            <button onClick={onFlip}>Flip</button>
        </div>
    )
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);