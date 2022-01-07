const Giftcard = () => {
  return (
    <div className='bg-black h-[52rem] flex justify-center items-center  '>
      <div className='flex mobile:flex-col mobile:items-center mobile:justify-center   h-[45rem]  w-full justify-center '>
        <div className=' w-[40rem] mobile:flex-1 bg-[#E6E7E9] flex flex-col justify-center items-center rounded-tl-2xl rounded-bl-2xl mobile:rounded-tr-2xl mobile:rounded-bl-none'>
          <div className='font-semibold text-xl text-gray-800'>Introducing</div>
          <div className='font-semibold text-7xl text-gray-800'>Airbnb</div>
          <div className='font-semibold text-7xl text-gray-800'>
            gifit cards
          </div>
          <button className='bg-gray-800 hover:bg-black text-slate-50 rounded-lg px-8 py-4 text-lg font-bold mt-10'>
            Shop now
          </button>
        </div>
        <div className='w-[40rem] bg-giftcard bg-cover mobile:flex-1 rounded-tr-2xl rounded-br-2xl mobile:rounded-tr-none mobile:rounded-bl-2xl'></div>
      </div>
    </div>
  );
};

export default Giftcard;
