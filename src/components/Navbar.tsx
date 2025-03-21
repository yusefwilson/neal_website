export default function Navbar() {
    return (
        <div className='sticky top-0 left-0 flex flex-row bg-purple-300 justify-between p-2 z-10 w-full overflow-x-auto'>
            <div className='flex items-center'>
                <a className='text-2xl font-bold text-black ml-2' href='/'>NEAL</a>
                <a className='text-lg text-black ml-2' href='/rankings'>Rankings</a>
            </div>
        </div>
    );
} 