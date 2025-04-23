import RankingList from '../components/RankingList';
import { RankingsList } from '../types';

export default function Rankings({ maleRankingsList, femaleRankingsList }: { maleRankingsList: RankingsList, femaleRankingsList: RankingsList }) {

    return (
        <div className='bg-gray-500 overflow-y-auto flex flex-col justify-center p-8'>
            <h2 className='bg-gray-500 text-xl font-semibold p-2 mb-2 text-center'>NEAL Rankings</h2>

            <div className='flex flex-row gap-4 overflow-y-auto'>
                <RankingList title='Male Rankings' rankingsList={maleRankingsList} />
                <RankingList title='Female Rankings' rankingsList={femaleRankingsList} />
            </div>

        </div>
    )
}