import { useCounter } from '../hooks/useCounter';
import './Counter.css';

export function Counter() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div className="counter">
      <h2>Counter Example</h2>
      <div className="counter-display">{count}</div>
      <div className="counter-buttons">
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}
