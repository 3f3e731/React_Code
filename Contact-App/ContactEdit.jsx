import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'


const ContactEdit = ({ contacts, setContacts }) => {

    const { id } = useParams();
    const navigate = useNavigate();

    const contact = contacts.find(c => c.id == id);

    const [name, setName] = useState(contact.name);
    const [phone, setPhone] = useState(contact.phone);
    const [email, setEmail] = useState(contact.email);

    function handleUpdate(e) {
        e.preventDefault();

        const updatedContact = contacts.map(c =>
            c.id == id ? { ...c, name, phone, email } : c
        );

        setContacts(updatedContact);
        navigate('/');
    }

    return (
        <div className="edit-container">

            <h2>Edit Contact</h2>

            <form className="edit-form" onSubmit={handleUpdate}>

                <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Enter Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <button className="update-btn" type="submit">
                    Update Contact
                </button>

            </form>

        </div>
    )
}

export default ContactEdit