const Giftcard = () => {
  return (
    <div className='flex h-80 justify-between mb-10'>
      <div className=' w-1/3 bg-gray-400 flex flex-col justify-center items-center'>
        <div className='font-semibold text-xl'>Introducing</div>
        <div className='font-semibold text-7xl'>Airbnb</div>
        <div className='font-semibold text-7xl'>gifit cardds</div>
        <button className='bg-slate-900 text-slate-50'>Shop now</button>
      </div>
      <div className='w-1/3 bg-gray-400'>Giftcard Image</div>
    </div>
  );
};

export default Giftcard;
