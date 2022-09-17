import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

/**
 * react-redux akan secara otomatis melakukan subscription kepada store.
 * sehingga setiap kali state pada store berubah, komponen di bawah ini akan selalu di-render ulang
 *
 * ketika anda ingin melakukan proses unmount pada komponen tersebut, react-redux
 * juga akan secara otomatis memberhentikan subscription kepada store
 */

const Counter = () => {
  /**
   * useSelector dapat digunakan untuk mengambil beberapa data spesifik
   * dari sebuah state
   */
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };

  const handleIncrease = (amount) => {
    dispatch({ type: "increase", amount });
  };

  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };

  const handleDecrease = (amount) => {
    dispatch({ type: "decrease", amount });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      {showCounter && (
        <div>
          <button onClick={handleIncrement}>increment</button>
          <button onClick={handleDecrement}>decrement</button>
          <button onClick={() => handleIncrease(5)}>increase by 5</button>
        </div>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter Button</button>
    </main>
  );
};

export default Counter;
