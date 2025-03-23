import {useEffect, useState} from "react";
import React from "react";

const Counter = () => {
    const [isOn, setIsOn] = useState(false);

    return (
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? "ON" : "OFF"}
      </button>
    );
}

export default Counter;