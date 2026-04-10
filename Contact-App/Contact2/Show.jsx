import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Show = ({ contact, setContact }) => {
    const navigate = useNavigate();

    function handleAdd() {
        navigate("/add");
    }
    function handleDelete(id) {
        const confirmDelete = window.confirm("Are you sure you want to delete?");
        if (!confirmDelete) return;
        const deleteContact = contact.filter((person) => person.id !== id);
        setContact(deleteContact);
    }
    function handleEdit(id) {
        navigate(`/${id}/edit`);
    }
    return (
        <div>
            <button onClick={handleAdd}>Add Contact</button>
            <br /><br />
            <h1>Show Contact</h1>

            {contact.length > 0 ? (
                contact.map((person) => (
                    <div key={person.id}>
                        <h3>{person.name}</h3>
                        <i>{person.phoneNo}</i>
                        <button onClick={() => handleDelete(person.id)}>Delete</button>
                        <button onClick={() => handleEdit(person.id)}>Edit</button>
                    </div>
                ))
            ) : (
                <p>No Contact Found!</p>
            )}

        </div>
    )
}

export default Show
