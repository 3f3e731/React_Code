import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditContact = ({ contact, setContact }) => {
    const navigate = useNavigate();
    const { id } = useParams();

    const cont = contact.find((person) => person.id === id);

    const [name, setName] = useState(cont?.name || "");
    const [phoneNo, setPhoneNo] = useState(cont?.phoneNo || "");
    const [error, setError] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        const trimName = name.trim();
        const trimPhone = phoneNo.trim();

        if (trimName.length == 0) {
            setError("Name is required!")
            return;
        }
        if (trimName.length <= 2) {
            setError("Name must be greater than 2 characters");
            return;
        }

        if (trimPhone.length == 0) {
            setError("Phone no is must required");
            return;
        }

        if (!/^\d{10}$/.test(trimPhone)) {
            setError("Phone no. is must be digit 10")
            return;
        }

        const update = contact.map((person) => person.id == id ? { ...person, name: name, phoneNo: phoneNo } : person);

        setContact(update);
        navigate("/");
    }

    return (
        <div>
            <h1>Edit Page</h1>

            <br /><br />
            <form onSubmit={handleSubmit}>
                <input type="text"
                    placeholder='Enter name'
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
                <br /><br />
                <input type="text"
                    placeholder='Enter PhoneNo'
                    value={phoneNo}
                    onChange={(e) => setPhoneNo(e.target.value)} />
                <br /><br />
                {
                    error && <p style={{ color: "red" }}>{error}</p>
                }
                <button type='submit'>Save Edit</button>
            </form>
        </div>
    )
}

export default EditContact
