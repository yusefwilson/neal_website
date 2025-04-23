import { RankingsList } from './types';

export const produceRankings = (rawRankings: { name: string, imageUrl: string, points: number, wins: number }[]): RankingsList => {
    // sort rankings by points, then by wins
    const sortedRankings = rawRankings.sort((a, b) => b.points !== a.points ? b.points - a.points : b.wins - a.wins);
    const newRankings = [];

    // add rank to each object
    let currentRank = 1;
    let currentPoints = sortedRankings[0].points;
    let currentWins = sortedRankings[0].wins;

    for (let i = 0; i < sortedRankings.length; i++) {
        // if the points and wins are the same as the previous one, keep the same rank
        if (sortedRankings[i].points === currentPoints && sortedRankings[i].wins === currentWins) {
            newRankings.push({ ...sortedRankings[i], rank: currentRank });
        }
        // if the points or wins are different, update the rank
        else {
            currentRank = i + 1;
            currentPoints = sortedRankings[i].points;
            currentWins = sortedRankings[i].wins;
            newRankings.push({ ...sortedRankings[i], rank: currentRank });
        }
    }

    return newRankings;
}