import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddContact = ({ contacts, setContacts }) => {

    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    function generateId() {
        return Date.now() + Math.random().toString(36).substr(2, 9);
    }

    function handleSaveContact(e) {
        e.preventDefault();

        const newContact = {
            id: generateId(),
            name: name,
            phone: phoneNumber,
            email: email
        }

        setContacts([...contacts, newContact]);
        navigate('/');
    }

    return (
        <div className="form-container">
            <h2>Add Contact</h2>

            <form onSubmit={handleSaveContact}>

                <label>Name</label>
                <input
                    type="text"
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label>Phone Number</label>
                <input
                    type="number"
                    placeholder="Enter Your Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />

                <label>Email</label>
                <input
                    type="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <button type="submit">Save Contact</button>

            </form>
        </div>
    )
}

export default AddContact