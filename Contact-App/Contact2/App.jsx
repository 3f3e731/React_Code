import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Show from './contact1/show';
import AddContact from './contact1/AddContact';
import EditContact from './contact1/EditContact';


const App = () => {
  const [contact, setContact] = useState(() => {
    const saved = localStorage.getItem("contacts");
    return saved ? JSON.parse(saved) : []
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contact))
  }, [contact])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Show contact={contact} setContact={setContact} />} />
          <Route path='/add' element={<AddContact contact={contact} setContact={setContact} />} />
          <Route path='/:id/edit' element={<EditContact contact={contact} setContact={setContact} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
