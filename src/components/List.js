const List = ({ waiting }) => {
    const addPerson = (name, id) => {
        return <li key={id}>{name}</li>
    }
    
    return (
        <ul>
            {waiting.map((person, index) => addPerson(person, index))}
        </ul>
    )
}

export default List;