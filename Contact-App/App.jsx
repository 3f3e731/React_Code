import React, { useState } from 'react'
import ContractList from './components/ContractList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddContact from './components/AddContact';
import ContactEdit from './components/ContactEdit';

const App = () => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      phone: "9876543210",
      email: "rahul@gmail.com"
    },
    {
      id: 2,
      name: "Priya Singh",
      phone: "9123456780",
      email: "priya@gmail.com"
    },
    {
      id: 3,
      name: "Amit Verma",
      phone: "9988776655",
      email: "amit@gmail.com"
    },
    {
      id: 4,
      name: "Neha Gupta",
      phone: "9871234567",
      email: "neha@gmail.com"
    },
    {
      id: 5,
      name: "Rohit Kumar",
      phone: "9012345678",
      email: "rohit@gmail.com"
    }
  ]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ContractList contacts={contacts} setContacts={setContacts} />} />
        <Route path='/addContact' element={<AddContact contacts={contacts} setContacts={setContacts} />} />
        <Route path='/edit/:id' element={<ContactEdit contacts={contacts} setContacts={setContacts} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
