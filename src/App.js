import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Create from './pages/Create';
import Landing from './pages/Landing';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/create' element={<Create />} />
      <Route path='/event' element={<Create />} />
    </Routes>
  );
}

export default App;
