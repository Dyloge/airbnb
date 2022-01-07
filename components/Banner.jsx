import Image from 'next/image';
const Banner = () => {
  return (
    <div className='flex flex-col justify-start items-center h-[64rem] bg-banner  bg-cover '>
      <div className=' bg-slate-50  rounded-full py-2 pl-10 pr-3  mx-auto text-xl flex justify-center items-center font-bold h-20 hover:bg-slate-200 my-10 invisible mobile:visible '>
        <form className='w-[45rem] '>
          <input
            className=' w-[45rem] border-0 outline-0 bg-transparent placeholder:text-gray-900 placeholder:text-center placeholder:text-2xl placeholder:opacity-100 placeholder:font-semibold'
            type='text'
            placeholder='&#x1F50E;&#xFE0E; Where are you going?'
          />
        </form>
      </div>
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
