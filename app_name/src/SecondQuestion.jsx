import React from "react";
import { useRef } from "react";

const SecondQuestion = () => {

    const inputRef = useRef();

    return (
        <div>
            <input ref={inputRef}/>
            <button onClick={() => inputRef.current.focus()}>
                Focus
            </button>
        </div>
    )
}

export default SecondQuestion;