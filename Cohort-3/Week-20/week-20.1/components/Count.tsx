


"use client"
import { useState } from "react";


export default function Button() {
    const [count, setCount] = useState(0);

    return <div>
        <button onClick={() => {
            setCount(c => c + 1);
        }}>Click me! ({count})</button>
    </div>
}

