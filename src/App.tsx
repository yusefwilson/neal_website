import Navbar from './components/Navbar'
import Home from './pages/Home'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Rankings from './pages/Rankings';

export default function App() {
  return (
    <Router>
      <div className='flex flex-col bg-slate-200 h-screen w-screen'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rankings' element={<Rankings />} />
        </Routes>
      </div>
    </Router>
  );
}