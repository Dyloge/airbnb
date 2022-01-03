const Expriences = () => {
  return (
    <div className='flex h-80 justify-between mb-10'>
      <div className='w-1/3 bg-gray-400 '>
        <div className='font-semibold text-5xl w-80'>
          Things to do on your trip
        </div>
        <button className='bg-slate-50'>Expriences</button>
      </div>
      <div className='w-1/3 bg-gray-400'>
        <div className='font-semibold text-5xl w-80'>
          Things to do from home
        </div>
        <button className='bg-slate-50'> Online Expriences</button>
      </div>
    </div>
  );
};

export default Expriences;
