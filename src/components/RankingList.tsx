import { RankingsList } from "../types";

export default function RankingList({ title, rankingsList }: { title: string, rankingsList: RankingsList }) {
    return (
        <div className="flex flex-col bg-gray-200 shadow-md rounded-md overflow-y-auto w-full max-w-2xl mx-auto p-8 mb-4">
            <h2 className='text-xl font-semibold mb-4 text-center'>{title}</h2>
            <ul className='flex flex-col gap-4'>
                {
                    rankingsList.map((user, index) => (
                        <li className='flex items-center py-4 px-6 bg-orange-400' key={index}>
                            <span className='text-gray-700 text-lg font-medium mr-4'>{(user.rank).toString() + '.'}</span>
                            <img className='w-12 h-12 rounded-full object-cover mr-4'
                                src={user.imageUrl !== '' ? user.imageUrl : 'https://static-00.iconduck.com/assets.00/avatar-icon-2048x2048-aiocer4i.png'}
                                alt='User avatar'
                            />
                            <div className='flex-1'>
                                <p className='text-lg font-medium'>{user.name}</p>
                                <p className='text-base'>{user.points.toString() + ' points'}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
} 