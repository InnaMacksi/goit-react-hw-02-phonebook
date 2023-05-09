import Contacts from "components/Contacts/Contacts";
import PropTypes from "prop-types";

import styles from './contactList.module.css';

const ContactList = ({contacts, onDelete}) => {
    return <ul className={styles.list}>
        {contacts.map(contact => {
            return <li key={contact.id}><Contacts contact={contact} onDelete={onDelete}/></li>
      })}
  </ul>  
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;