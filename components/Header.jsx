import Image from 'next/image';
const Header = () => {
  return (
    <header>
      {/* left */}
      <div className=' grid gap-4 grid-cols-3 grid-rows-2  h-60  '>
        <div className=' h-20  bg-gray-400'>
          <Image
            className='invert cursor-pointer'
            src='/logo.svg'
            alt=''
            width='32'
            height='32'
          />
        </div>
        <div className='h-20  bg-gray-400'>
          <ul className=' flex justify-around'>
            <li>Places to stay</li>
            <li>Expriences</li>
            <li>Online Expriences</li>
          </ul>
        </div>
        <div className='h-20  bg-gray-400 '>
          <ul className=' flex justify-around'>
            <li>Become Host</li>
            <li>Languages</li>
            <li>Sign in</li>
          </ul>
        </div>
        <div className='h-20  bg-gray-400 col-span-3'>search</div>
      </div>
    </header>
  );
};

export default Header;
