import Contacts from "components/Contacts/Contacts";
import styles from './contactList.module.css';

const ContactList = ({contacts, onDelete}) => {
    return <ul className={styles.list}>
        {contacts.map(contact => {
            return <li key={contact.id}><Contacts contact={contact} onDelete={onDelete}/></li>
      })}
  </ul>  
}
export default ContactList;