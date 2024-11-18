// import { useState } from "react";

import { PropTypes } from 'prop-types'

function CounterButton({ by, increment, decrement }) {

    // const buttonStyle = {
    //     fontSize: '30px',
    //     backgroundColor: '#00a5ab',
    //     width: '100px',
    //     color: 'white',
    //     margin: '10px',
    //     padding: '15px',
    //     border: '2px solid red',
    //     borderRadius: '30px'
    // };

    // const state = useState(0);

    console.log(by);


    // const [count, setCount] = useState(0);

    function incrementCounterFunction() {
        // setCount(count + by);
        // console.log(count);
        increment(by);
        // state[1](state[0] + 1);
        // console.log(state[0]);
        // console.log(state[1]);
        // console.log('increment clicked');
    }


    // function decrementCounterFunction() {
    //     setCount(count - by);
    //     decrement(by);
    // }

    return (
        <div>
            {/* <span className="count">0</span> */}
            {/* <span className='count'>{count}</span> */}
            <div>
                <button className="counterButton" onClick={incrementCounterFunction}
                // style={buttonStyle}
                >+{by}</button>

                <button className='counterButton' onClick={() => decrement(by)}>
                    -{by}
                </button>
            </div>

        </div>
    )
}

CounterButton.propTypes = {
    by: PropTypes.number
};

CounterButton.defaultProps = {
    by: 7
};


export default CounterButton;