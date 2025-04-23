import Footer from './components/Footer';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Rankings from './pages/Rankings';

import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { RankingsList } from './types';
import { produceRankings } from './utils';

export default function App() {

  const [maleRankingsList, setMaleRankingsList] = useState<RankingsList>([])
  const [femaleRankingsList, setFemaleRankingsList] = useState<RankingsList>([])

  useEffect(() => {

    // load rankings data from json
    async function fetchData() {
      const malePointsResponse = await fetch('/MalePointsList.json')
      const femalePointsResponse = await fetch('/FemalePointsList.json')

      if (!malePointsResponse.ok || !femalePointsResponse.ok) {
        console.error('Failed to fetch rankings data');
        return;
      }

      const maleData = await malePointsResponse.json()
      const femaleData = await femalePointsResponse.json()

      const maleRankingsList = produceRankings(maleData.list);
      const femaleRankingsList = produceRankings(femaleData.list);

      setMaleRankingsList(maleRankingsList);
      setFemaleRankingsList(femaleRankingsList);
    }

    fetchData()
  }, [])

  return (
    <Router>
      <div className='flex flex-col bg-gray-500 h-screen w-screen'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rankings' element={<Rankings maleRankingsList={maleRankingsList} femaleRankingsList={femaleRankingsList} />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}