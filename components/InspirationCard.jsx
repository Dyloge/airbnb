const InspirationCard = () => {
  return (
    <div>
      <div className='text-4xl font-semibold mt-20 ml-12'>
        Inspiration for your next trip
      </div>
      <div className='flex  justify-around items-center mx-10 my-10'>
        <div className='h-[26rem]  w-80  cursor-pointer'>
          <div className='bg-card1 bg-cover h-1/2 rounded-tr-2xl rounded-tl-2xl'></div>
          <div className='h-1/2 bg-[#CC2D4A] rounded-br-2xl rounded-bl-2xl pl-6 pt-8'>
            <div className='text-slate-50 font-bold text-3xl'>Warsaw</div>
            <div className='text-slate-50 font-normal text-lg'>
              251 kilometers away
            </div>
          </div>
        </div>
        <div className='h-[26rem]  w-80 cursor-pointer'>
          <div className='bg-card2 bg-cover h-1/2 rounded-tr-2xl rounded-tl-2xl'></div>
          <div className='h-1/2 bg-[#D93B30] rounded-br-2xl rounded-bl-2xl pl-6 pt-8'>
            <div className='text-slate-50 font-bold text-3xl'>Katowice</div>
            <div className='text-slate-50 font-normal text-lg'>
              61 kilometers away
            </div>
          </div>
        </div>
        <div className='h-[26rem]  w-80 cursor-pointer'>
          <div className='bg-card3 bg-cover h-1/2 rounded-tr-2xl rounded-tl-2xl'></div>
          <div className='h-1/2 bg-[#DE3151] rounded-br-2xl rounded-bl-2xl pl-6 pt-8'>
            <div className='text-slate-50 font-bold text-3xl'>Wisła</div>
            <div className='text-slate-50 font-normal text-lg'>
              {' '}
              89 kilometers away
            </div>
          </div>
        </div>
        <div className='h-[26rem]  w-80 cursor-pointer'>
          <div className='bg-card4 bg-conver h-1/2 rounded-tr-2xl rounded-tl-2xl'></div>
          <div className='h-1/2 bg-[#BC1A6E] rounded-br-2xl rounded-bl-2xl pl-6 pt-8'>
            <div className='text-slate-50 font-bold text-3xl'>Łódź</div>
            <div className='text-slate-50 font-normal text-lg'>
              {' '}
              190 kilometers away
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InspirationCard;
