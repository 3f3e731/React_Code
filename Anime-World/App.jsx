import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AnimeWorld from './components/AnimeWorld';
import AnimeDetails from './pages/AnimeDetails';

const App = () => {
  const api = "https://api.jikan.moe/v4/anime";

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AnimeWorld api={api} />} />
        <Route path='/anime/:id' element={<AnimeDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
