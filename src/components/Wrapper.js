import { useState } from "react";
import Counter from "./Counter";

function Wrapper() {
  const [counter, setCounter] = useState(0);
  const [isCounter, setIsCounter] = useState(0);
  let [inputValue, setInputValue] = useState(0);

  const inputOnChange = (e) => {
    setInputValue(Number(e.target.value));
  };

  const startCounter = () => {
    clearInterval(isCounter);

    const newInterval = setInterval(() => {
      setCounter((inputValue = 1 + inputValue));
    }, 1000);
    setIsCounter(newInterval);
  };
  const stopCounter = () => {
    if (isCounter) {
      clearInterval(isCounter);
    }
  };

  const deleteCounter = () => {
    clearInterval(isCounter);
    setCounter(0);
    setIsCounter(0);
    setInputValue(0);
  };

  return (
    <>
      <div className="container-main">
        <div className="container">
          <h1 className="heading">COUNTER APP</h1>
          <p className="para">Enter a number</p>

          <input
            className="input"
            type="number"
            name="number"
            placeholder="Enter..."
            onChange={inputOnChange}
          ></input>

          {isCounter === 0 ? (
            <></>
          ) : (
            <div>
              <Counter counter={counter} />
            </div>
          )}
          <div className="button">
            <button onClick={() => startCounter()}>START</button>
            <button onClick={() => stopCounter()}>STOP</button>

            <button onClick={() => deleteCounter()}>DELETE</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wrapper;
