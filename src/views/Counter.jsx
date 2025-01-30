import { useEffect, useState } from "react";
import { CounterModel } from "../model/model";
import { counterIntent } from "../intent/intent";
const Counter = () => {
  const [count, setCount] = useState(CounterModel.state.count);
  const [autoIncrement, setAutoIncrement] = useState(
    CounterModel.state.autoIncrement
  );
  const updateView = () => {
    setCount(CounterModel.state.count);
    setAutoIncrement(CounterModel.state.autoIncrement);
  };
  useEffect(() => {
    if (autoIncrement) {
      const intervalId = setInterval(() => {
        if (CounterModel.state.count < 98) {
          CounterModel.increment();
          setCount(CounterModel.state.count);
        }
      }, 1100);

      return () => clearInterval(intervalId); // Cleanup when autoIncrement is disabled
    }
  }, [autoIncrement]);

  const intent = counterIntent(updateView);
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={intent.onIncrement}>increment</button>
      <button onClick={intent.onDecrement}>decrement</button>
      <button onClick={intent.onReset}>restart</button>
      <button onClick={intent.onToggleAutoIncrement}>
        {autoIncrement ? "stop" : "start autoincrement"}
      </button>
    </div>
  );
};

export default Counter;
