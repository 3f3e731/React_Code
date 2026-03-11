import React from 'react'
import { useNavigate } from 'react-router-dom'

const ContractList = ({ contacts, setContacts }) => {

    const navigate = useNavigate();

    function addContact() {
        navigate('/addContact');
    }

    function handleDelete(id) {
        const delContact = contacts.filter(person => person.id !== id);
        setContacts(delContact);
    }

    function handleEdit(id) {
        navigate(`/Edit/${id}`);
    }

    return (
        <>
            <button className="add-btn" onClick={addContact}>
                Add Contact
            </button>

            <div className="container">
                <h1>Contact List</h1>

                {contacts.map((person) => (
                    <div className="contact-card" key={person.id}>
                        <h3>{person.name}</h3>
                        <h4>{person.phone}</h4>
                        <h4>{person.email}</h4>

                        <div className="btn-group">
                            <button
                                className="delete-btn"
                                onClick={() => handleDelete(person.id)}
                            >
                                Delete
                            </button>

                            <button
                                className="edit-btn"
                                onClick={() => handleEdit(person.id)}
                            >
                                Edit
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ContractList