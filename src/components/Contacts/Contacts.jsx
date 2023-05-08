const Contacts = ({contact:{name, number, id}, onDelete}) => {
    return <>
        <p>{name} : {number}</p>
        <button type="button" onClick={() => {onDelete(id)}}>Delete</button>
    </>
}
export default Contacts;