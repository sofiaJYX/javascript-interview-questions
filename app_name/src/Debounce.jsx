import React, { useEffect } from "react";
import { useState } from "react";



const Debounce = () => {
    const [text, setText] = useState("");
    const debouncedText = useDebounce(text, 1000);

    const useDebounce = (data, delay) => {
        const [debounce, setDebounce] = useState(data);
        
        useEffect(() => {
            const timer = setTimeout(() => {
                setDebounce(data);
            }, delay)

            return () => {
                clearTimeout(timer);
            }
        },[text, delay])

        return debounce;
    }

    return (
        <div>
            <input 
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <p>Debonuced value: {text}</p>
        </div>
    )
}

export default Debounce;