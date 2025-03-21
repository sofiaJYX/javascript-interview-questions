import React from "react";
import { useState } from "react";

const FirstQuestion = () => {
    
    const names = ["James", "Jacob", "Sofia", "Anna"];
    const [data, setData] = useState(names);
    const [searchTerm, setSearchTerm] = useState("");
    
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        console.log(searchTerm);
    }

    const namesFiltered = data.filter((person) => 
        person.includes(searchTerm)
    );
    
    return (
        <div>
            <input 
                type="text"
                placeholder="Search here"
                onChange={handleChange} 
            />
                
            {namesFiltered.map((person) => {
                return <p>{person}</p>;
            })}
        </div>
    )
}

export default FirstQuestion;