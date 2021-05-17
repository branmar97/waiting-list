import { useState } from "react";

const Input = ({ list, updateList }) => {
    const [currentInput, setCurrentInput] = useState("")
    
    const handleSubmit = (event) => {
        event.preventDefault()
        updateList([...list, currentInput])
        setCurrentInput("")
    }

    return (
        <form data-testid="input-form" onSubmit={handleSubmit}>
            <input data-testid="input-field" placeholder="Name" type='text' value={currentInput} onChange={(e) => setCurrentInput(e.target.value)} />

            <button data-testid="button" placeholder='Add to Waitlist' type='submit'>Add to Waitlist</button>
        </form>
    )
}

export default Input;