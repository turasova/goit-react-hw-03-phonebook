import css from './ContactItem.module.css'

export const ContactItem = ({ contacts, deleteContact}) => {
    return (
        <>
        <li>
            <p>{contacts.name}: { contacts.number}</p>
        </li>
            <button className={css.buttonDelete} onClick={() => deleteContact(contacts.id)}>Delete</button>  
        </>
    )
}