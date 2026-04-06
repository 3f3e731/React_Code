import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Count from './CounterApp/Count';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/count' element={<Count />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
