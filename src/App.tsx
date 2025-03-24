import Footer from './components/Footer';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Rankings from './pages/Rankings';

import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

const produceRankings = (rawRankings: { name: string, imageUrl: string, points: number }[]): { name: string, imageUrl: string, points: number, rank: number }[] => {
  // sort rankings by points
  const sortedRankings = rawRankings.sort((a, b) => b.points - a.points);

  const newRankings = [];

  // add rank to each object
  let currentRank = 1;
  let currentPoints = sortedRankings[0].points;
  for (let i = 0; i < sortedRankings.length; i++) {
    if (sortedRankings[i].points === currentPoints) {
      newRankings.push({ ...sortedRankings[i], rank: currentRank });
    }
    else {
      currentRank = i + 1;
      currentPoints = sortedRankings[i].points;
      newRankings.push({ ...sortedRankings[i], rank: currentRank });
    }
  }

  return newRankings;
}

export default function App() {

  const [rankingsList, setRankingsList] = useState<{ name: string, imageUrl: string, points: number, rank: number }[]>([])

  useEffect(() => {

    // load rankings data from json
    async function fetchData() {
      const response = await fetch('/NEALPointsList.json')
      const data = await response.json()
      const rankingsList = produceRankings(data.list);
      console.log(rankingsList);
      setRankingsList(rankingsList);
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
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}