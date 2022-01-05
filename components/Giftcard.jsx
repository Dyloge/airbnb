const Giftcard = () => {
  return (
    <div className='bg-black h-[52rem] flex justify-center items-center  '>
      <div className='flex h-[45rem]  w-full justify-center '>
        <div className=' w-[40rem] bg-[#E6E7E9] flex flex-col justify-center items-center rounded-tl-2xl rounded-bl-2xl'>
          <div className='font-semibold text-xl text-gray-800'>Introducing</div>
          <div className='font-semibold text-7xl text-gray-800'>Airbnb</div>
          <div className='font-semibold text-7xl text-gray-800'>
            gifit cardds
          </div>
          <button className='bg-gray-800 text-slate-50 rounded-lg px-8 py-4 text-lg font-bold mt-10'>
            Shop now
          </button>
        </div>
        <div className='w-[40rem] bg-giftcard bg-cover rounded-tr-2xl rounded-br-2xl'></div>
      </div>
    </div>
  );
};

export default Giftcard;
