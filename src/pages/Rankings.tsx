export default function Rankings({ rankingsList }: { rankingsList: { name: string, imageUrl: string, points: number }[] }) {

    return (
        <div className="bg-purple-400 shadow-md rounded-md overflow-y-auto flex justify-center p-8">

            <div className="bg-amber-600 overflow-y-auto">

                <div className="bg-gray-100 py-2 px-4">
                    <h2 className="text-xl font-semibold text-gray-800">NEAL Rankings</h2>
                </div>

                <ul className="flex flex-col gap-4">
                    {
                        rankingsList.map((user, index) => (
                            <li className="flex items-center py-4 px-6 bg-violet-600">
                                <span className="text-gray-700 text-lg font-medium mr-4">{(index + 1).toString() + '.'}</span>
                                <img className="w-12 h-12 rounded-full object-cover mr-4"
                                    src={user.imageUrl !== '' ? user.imageUrl : 'https://randomuser.me/api/portraits/men/40.jpg'}
                                    alt="User avatar"
                                />
                                <div className="flex-1">
                                    <p className="text-lg font-medium text-gray-800">{user.name}</p>
                                    <p className="text-base">{user.points.toString() + ' points'}</p>
                                </div>
                            </li>
                        ))
                    }
                </ul>

            </div>
        </div>
    )
}