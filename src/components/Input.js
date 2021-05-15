import { useState } from "react";

const Input = ({ updateList }) => {
    const [currentInput, setCurrentInput] = useState("")
    
    return (
        <form onSubmit={updateList(currentInput)}>
            <input type='text' value={currentInput} onChange={(e) => setCurrentInput(e.target.value)} />
        </form>
    )
}

export default Input;