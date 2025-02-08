import React, { useReducer } from 'react'



function countFn(state, action) {

    if (action.type == "inc") {

        return { count: state.count + 1 }
    } else if (action.type == "dec") {
        return { count: state.count - 1 }
    }
}
const Counter = () => {

    const [state, action] = useReducer(countFn, { count: 0 })
    return (
        <div>

            <p>counter:{state.count}</p>

            <button onClick={() => action({ type: "inc" })}>+</button>
            <button onClick={() => action({ type: "dec" })}>-</button>

        </div>
    )
}

export default Counter
