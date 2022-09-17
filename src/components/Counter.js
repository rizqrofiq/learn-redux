import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store";
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
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleIncrease = (amount) => {
    dispatch(counterActions.increase(amount));
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handleDecrease = (amount) => {
    dispatch(counterActions.decrease(amount));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
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
