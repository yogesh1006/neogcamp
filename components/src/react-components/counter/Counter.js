import React,{useState} from 'react'

function Counter() {
    const [counter, setCounter] = useState(0);

    function increment() {
      //let count = 0;
      setCounter(preCount => preCount + 1);
    }
    function decrement() {
      //let count = 0;
      setCounter(preCount => preCount - 1);
    }
  
    function reset() {
      let counter = 0;
      setCounter(counter);
    }
  
    return (
      <div className="App">
        <h1>counter</h1>
        <h1>{counter}</h1>
        <button style={{ margin: "1rem" }} onClick={increment}>
          +
        </button>
        <button disabled={!counter} onClick={() => decrement()}>
          -
        </button>
        <button style={{ margin: "1rem" }} onClick={() => reset()}>
          Reset
        </button>
      </div>
    );
}

export default Counter
