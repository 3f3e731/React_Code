import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddContact = ({ contact, setContact }) => {
    const [name, setName] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState('');

    function generateId() {
        return Date.now() + Math.random().toString(36).substr(2, 9);
    }

    function handleSubmit(e) {
        e.preventDefault();

        const trimName = name.trim();
        const trimPhone = phoneNo.trim();

        if (trimName.length === 0) {
            setError("Name is required!");
            return;
        }

        if (trimName.length <= 2) {
            setError("Name must be greater than 2 characters");
            return;
        }

        if (trimPhone.length === 0) {
            setError("Phone number is required");
            return;
        }

        if (!/^\d{10}$/.test(trimPhone)) {
            setError("Phone number must be exactly 10 digits");
            return;
        }

        const newStudent = {
            id: generateId(),
            name: name,
            phoneNo: phoneNo
        }
        setContact([...contact, newStudent]);
        setName('');
        setPhoneNo('');

        navigate("/");
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    placeholder='Enter Name'
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
                <button type='submit'>Save</button>
            </form>
        </div>
    )
}

export default AddContact
