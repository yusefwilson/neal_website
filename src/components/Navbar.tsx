export default function Navbar() {
    return (
        <div className='sticky top-0 left-0 flex flex-row bg-gray-400 justify-between p-4 z-10 w-full border-b-2 border-white'>
            <div className='flex justify-between w-full items-center'>
                <div className='div'>
                    <a className='text-lg font-bold rounded-md' href='/'><img height={64} width={64} src='/img/NEAL_Logo_Small.png'></img></a>
                </div>
                <div className='div'>
                    <a className='text-lg font-bold bg-orange-400 rounded-md p-2' href='/rankings'>Rankings</a>
                </div>
            </div>
        </div>
    );
} 