import React from "react";
import { useState } from "react";

const FirstQuestion = () => {
    
    const names = ["James", "Jacob", "Sofia", "Anna"];
    const [data, setData] = useState(names);
    const [searchTerm, setSearchTerm] = useState("");
    
    const handleChange = (name: string) => {
        setSearchTerm(name);
    }
    
    return (
        <div>
            <input 
                type="text"
                placeholder="Search here"
                onChange={(name: string) => handleChange(name)} 
            />
                
            {data.map((name) => {
                return <p>{name}</p>;
            })}
        </div>
    )
}

export default FirstQuestion;