import styles from './filter.module.css';

const Filter = ({ value, onChange }) => {
    return <div className={styles.filter}>
        <p>Find contacts by name</p>
        <input type="text" onChange={onChange} value={value} />
    </div>
}
export default Filter;