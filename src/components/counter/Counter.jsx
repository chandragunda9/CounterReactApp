import { useState } from 'react';

import './Counter.css';
import CounterButton from './CounterButton';
import ResetButton from './ResetButton';


function Counter() {

    function incrementCounterParentFunction(by) {
        setCount(count + by);
    }

    function decrementCounterParentFunction(by) {
        setCount(count - by);
    }

    function resetCounter() {
        setCount(0);
    }

    function someMethodInParent() {
        console.log("parent method called");
    }

    const [count, setCount] = useState(0);
    return (
        <>
            <span className='totalCount'>{count}</span>
            <CounterButton by={1} method={someMethodInParent} increment={incrementCounterParentFunction}
                decrement={decrementCounterParentFunction} />
            <CounterButton by={2} method={someMethodInParent} increment={incrementCounterParentFunction}
                decrement={decrementCounterParentFunction} />
            <CounterButton by={5} method={someMethodInParent} increment={incrementCounterParentFunction}
                decrement={decrementCounterParentFunction} />
            <CounterButton method={someMethodInParent} increment={incrementCounterParentFunction}
                decrement={decrementCounterParentFunction}></CounterButton>
            <ResetButton resetMethod={resetCounter}></ResetButton>
        </>
    )
}

export default Counter;