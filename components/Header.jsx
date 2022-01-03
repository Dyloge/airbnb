import Image from 'next/image';
const Header = () => {
  return (
    <header>
      <div className=' grid gap-4 grid-cols-3 grid-rows-2  h-40 mb-10 '>
        <div className=' h-12 w-12 mt-8 ml-16 bg-gray-400'>
          <Image
            className='invert cursor-pointer '
            src='/logo.svg'
            alt=''
            width='32'
            height='32'
          />
        </div>
        <div>
          <ul className='bg-gray-400 flex justify-around text-slate-50 text-xl font-bold mt-10'>
            <li>Places to stay</li>
            <li>Expriences</li>
            <li>Online Expriences</li>
          </ul>
        </div>
        <div>
          <ul className=' bg-gray-400 flex justify-around text-slate-50 mt-10 text-xl'>
            <li>
              <button className=' font-bold '> Become Host</button>
            </li>
            <li>
              <button className=' font-bold '> Languages</button>
            </li>
            <li>
              <button className=' font-bold '>Sign in</button>
            </li>
          </ul>
        </div>
        <div className=' text-slate-50 text-xl   col-span-3 flex justify-center font-bold  bg-gray-400  '>
          <input type='text' placeholder='Where are you going?' />
          <button className='bg-gray-900' type='submit'>
            <i> search</i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
