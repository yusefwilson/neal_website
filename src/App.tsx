import Footer from './components/Footer';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Rankings from './pages/Rankings';

import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function App() {

  const [rankingsList, setRankingsList] = useState<{ name: string, imageUrl: string, points: number }[]>([])

  useEffect(() => {

    // load rankings data from json
    async function fetchData() {
      const response = await fetch('/NEALPointsList.json')
      const data = await response.json()
      setRankingsList(data.list);
    }

    fetchData()
  }, [])

  return (
    <Router>
      <div className='flex flex-col bg-gray-500 h-screen w-screen'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rankings' element={<Rankings rankingsList={rankingsList} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}