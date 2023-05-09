import PropTypes from "prop-types";

const Contacts = ({ contact: { name, number, id }, onDelete }) => {
    return <>
        <p>{name} : {number}</p>
        <button type="button" onClick={() => {onDelete(id)}}>Delete</button>
    </>
}

Contacts.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contacts;