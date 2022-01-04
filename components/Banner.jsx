const Banner = () => {
  return (
    <div className='flex flex-col justify-start items-center h-[64rem] bg-banner  bg-cover '>
      <div className='text-slate-50 font-bold text-5xl pt-36 pb-10'>
        Not sure where to go? Perfect.
      </div>
      <button className='bg-slate-50 text-pink-700 rounded-full px-8 py-4'>
        <p className='text-xl font-bold bg-gradient-to-r from-violet-900 to-fuchsia-600 bg-clip-text text-transparent'>
          I&apos;m flexible
        </p>
      </button>
    </div>
  );
};

export default Banner;
