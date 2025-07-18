import { RankingsList } from '../types';

export default function RankingList({ title, rankingsList }: { title: string, rankingsList: RankingsList }) {
    return (
        <div className='flex flex-col bg-gray-200 shadow-md rounded-md overflow-y-auto w-full max-w-2xl mx-auto p-2 mb-4'>
            <h2 className='text-xl font-semibold mb-4 text-center'>{title}</h2>
            <ul className='flex flex-col gap-4'>
                {
                    rankingsList.map((user, index) => (
                        <li className='flex flex-col sm:flex-row sm:items-center py-4 px-6 bg-orange-400 rounded-md' key={index}>
                            <div className="flex flex-row">
                                <span className='text-gray-700 text-lg font-medium mr-4'>{(user.rank).toString() + '.'}</span>
                                <img className='w-8 h-8 sm:w-12 sm:h-12 rounded-full object-cover mr-4'
                                    src={`/img/pullers/${user.name.replace(/\s+/g, '_')}.jpg`}
                                    alt='User avatar'
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.onerror = null; // prevent infinite loop
                                        target.src = '/img/pullers/Default_Avatar.png';
                                        target.width = 256;
                                        target.height = 256;
                                    }}
                                />
                            </div>

                            <div className='flex-1'>
                                <p className='text-sm sm:text-lg font-medium'>{user.name}</p>
                                <div className='flex flex-row gap-2'>
                                    <p className='text-sm sm:text-md'>{user.points.toString() + ' points, '}</p>
                                    <p className='text-sm sm:text-md'>{user.wins.toString() + ' win' + (user.wins === 1 ? '' : 's')}</p>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
} 