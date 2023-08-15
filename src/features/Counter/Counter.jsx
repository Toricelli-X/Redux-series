import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount,reset } from "./CounterSlice";
import { useState } from "react";
const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incrementAmount,setIncrementAmount] = useState(0)
  const addValue = Number(incrementAmount)||0
  const resetAll = ()=>{
     setIncrementAmount(0)
     dispatch(reset())
  }
  return (
    <section>
      <p>{count}</p>
      <div>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </button>

        <button onClick={()=>{
          dispatch(resetAll())
        }}>
          Reset
        </button>
        <input type="text" 
         value={incrementAmount}
         onChange={(e)=> setIncrementAmount(e.target.value)}
        />
      </div>

      <div onClick={()=>dispatch(incrementByAmount(addValue))}>
        Add amount
      </div>
    </section>
  );
};

export default Counter;
