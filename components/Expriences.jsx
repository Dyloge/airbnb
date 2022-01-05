const Expriences = () => {
  return (
    <div>
      <div className='text-4xl font-semibold mt-20 mb-10 ml-12'>
        Discover Airbnb Expriences
      </div>
      <div className='flex h-[45rem] justify-center mb-10 '>
        <div className='w-[42rem] bg-dicover1 bg-cover mx-2 rounded-2xl p-5 '>
          <div className='font-semibold text-5xl w-80 text-slate-50 mb-10'>
            Things to do on your trip
          </div>
          <button className='bg-slate-50 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-200'>
            Expriences
          </button>
        </div>
        <div className='w-[42rem] bg-discover2 bg-cover mx-2 rounded-2xl p-5'>
          <div className='font-semibold text-5xl w-80 text-slate-50 mb-10'>
            Things to do from home
          </div>
          <button className='bg-slate-50 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-200'>
            Online Expriences
          </button>
        </div>
      </div>
    </div>
  );
};

export default Expriences;
