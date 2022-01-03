import Image from 'next/image';
const Header = () => {
  return (
    <header>
    
      {/* left */}
      <div className=' grid gap-4 grid-cols-3 grid-rows-2  h-60 bg-black ' >
        <div className='bg-[#d7591e]'>
          <Image
          className='invert cursor-pointer'
          src='/logo.svg'
          alt=''
          width='32'
          height='32'
        />
        </div>
        <div className='bg-[#f6fa00]'>
          <ul className=' flex justify-around'>
            <li>Places to stay</li>
            <li>Expriences</li>
            <li>Online Expriences</li>
          </ul>
        </div>
        <div className='bg-[#1ed727] '>
          <ul className=' flex justify-around'>
            <li>
              Become Host
            </li>
            <li>
              Languages
            </li>
            <li>
              Sign in
            </li>
        </ul>
        </div>
        <div className='bg-[#d71ece] col-span-3'>search</div>

        

 
      </div>

    </header>
  );
};

export default Header;
