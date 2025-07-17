import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);


    return (
        <div>
            <p>{count}</p>
            <div style={{border: '1px solid white'}}>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    )
}