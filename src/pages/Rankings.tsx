export default function Rankings({ rankingsList }: { rankingsList: { name: string, imageUrl: string, points: number }[] }) {

    return (
        <div className='bg-gray-500 shadow-md rounded-md overflow-y-auto flex justify-center p-8'>

            <div className='bg-amber-600 overflow-y-auto p-2 rounded-md'>

                <h2 className='bg-gray-400 text-xl font-semibold p-2 mb-2 text-center'>NEAL Rankings</h2>

                <ul className='flex flex-col gap-4'>
                    {
                        rankingsList.map((user, index) => (
                            <li className='flex items-center py-4 px-6 bg-gray-500'>
                                <span className='text-gray-700 text-lg font-medium mr-4'>{(index + 1).toString() + '.'}</span>
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
        </div>
    )
}