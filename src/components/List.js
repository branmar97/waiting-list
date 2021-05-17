const List = ({ waiting }) => {
    const addPerson = (name, id) => {
        return <li data-testid="list-li" key={id}>{name}</li>
    }
    
    return (
        <ul data-testid="list-ul">
            {waiting.map((person, index) => addPerson(person, index))}
        </ul>
    )
}

export default List;