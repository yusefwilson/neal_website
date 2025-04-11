import Footer from './components/Footer';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Rankings from './pages/Rankings';

import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { RankingsList } from './types';

const produceRankings = (rawRankings: { name: string, imageUrl: string, points: number, wins: number }[]): RankingsList => {
  // sort rankings by points
  const sortedRankings = rawRankings.sort((a, b) => b.points !== a.points ? b.points - a.points : b.wins - a.wins);

  const newRankings = [];

  // add rank to each object
  let currentRank = 1;
  let currentPoints = sortedRankings[0].points;
  let currentWins = sortedRankings[0].wins;

  for (let i = 0; i < sortedRankings.length; i++) {
    if (sortedRankings[i].points === currentPoints && sortedRankings[i].wins === currentWins) {
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