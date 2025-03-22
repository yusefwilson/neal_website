export default function Home() {
    return (
        <div className='flex items-center h-full w-full justify-center'>
            <div className='sm:flex items-center max-w-screen-xl'>
                <div className='sm:w-1/2 p-10'>
                    <div className='image object-center text-center'>
                        <img src='/img/NEAL_Logo_Big.png' />
                    </div>
                </div>
                <div className='sm:w-1/2 p-5'>
                    <div className='text'>
                        <h2 className='my-4 font-bold text-3xl  sm:text-4xl '>About <span className='text-orange-400'>NEAL</span>
                        </h2>
                        <p className='s'>
                            New England Armwrestling League is the premier armwrestling league in the New England area. We host events all over the region, open to all levels of competitors, ranging from complete Novice, to total Pro!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}