import Image from 'next/image';
const Header2 = () => {
  return (
    <div className='bg-black flex justify-center  py-10 mobile:hidden'>
      <div className='flex bg-slate-50  h-20  rounded-full'>
        <div className=' bg-slate-50  rounded-full py-2 pl-10 pr-3   text-xl  flex justify-center font-bold h-20 hover:bg-slate-200'>
          <form className='flex flex-col w-64'>
            <label htmlFor='' className='text-lg font-medium'>
              Location
            </label>
            <input
              className='block border-0 outline-0 bg-transparent '
              type='text'
              placeholder='Where are you going?'
            />
          </form>
        </div>
        <div className=' bg-slate-50  rounded-full py-2 pl-10 pr-3  mx-auto text-xl  flex justify-center font-bold h-20 hover:bg-slate-200'>
          <form className='flex flex-col w-36'>
            <label htmlFor='' className='text-lg font-medium'>
              Check in
            </label>
            <input
              className='block border-0 outline-0 bg-transparent '
              type='text'
              placeholder='Add dates'
            />
          </form>
        </div>
        <div className=' bg-slate-50  rounded-full py-2 pl-10 pr-3  mx-auto text-xl  flex justify-center font-bold h-20 hover:bg-slate-200'>
          <form className='flex flex-col w-36'>
            <label htmlFor='' className='text-lg font-medium'>
              Check out
            </label>
            <input
              className='block border-0 outline-0 bg-transparent'
              type='text'
              placeholder='Add dates'
            />
          </form>
        </div>
        <div className=' bg-slate-50  rounded-full py-2 pl-10 pr-3  mx-auto text-xl  flex justify-center font-bold h-20 hover:bg-slate-200'>
          <form className='flex flex-col w-36'>
            <label htmlFor='' className='text-lg font-medium'>
              Guests
            </label>
            <input
              className='block border-0 outline-0 bg-transparent '
              type='text'
              placeholder='Add guests'
            />
          </form>
          <button
            className='bg-red-500 flex items-center justify-center rounded-full h-16 w-16'
            type='submit'>
            <Image
              className='invert'
              src='/img/search.svg'
              width='16'
              height='16'
              alt=''
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header2;
