import Image from 'next/image';
const Header = () => {
  return (
    <header className='mobile:hidden'>
      <div className=' grid gap-4 grid-cols-4 grid-rows-2  h-20  bg-black'>
        {/* logo */}
        <div className=' h-12 w-12 mt-8 ml-16 '>
          <Image
            className='invert cursor-pointer '
            src='/logo.svg'
            alt=''
            width='32'
            height='32'
          />
        </div>
        {/* Menu */}
        <div className='col-span-2'>
          <ul className=' flex justify-around text-slate-50 text-xl font-bold mt-7 '>
            <li>
              <button
                className=" hover:text-gray-400 font-bold cursor-pointer relative  h-16 hover:after:absolute hover:after:content-[''] hover:after:border-b-2 hover:after:border-b-gray-400 hover:after:w-2 hover:after:bottom-0 hover:after:left-16
              focus:after:absolute focus:after:content-[''] focus:after:border-b-2 focus:after:w-6 focus:after:bottom-0 focus:after:left-12">
                Places to stay
              </button>
            </li>
            <li>
              <button
                className=" hover:text-gray-400 font-bold cursor-pointer relative  h-16 hover:after:absolute hover:after:content-[''] hover:after:border-b-2 hover:after:border-b-gray-400 hover:after:w-2 hover:after:bottom-0 hover:after:left-10
              focus:after:absolute focus:after:content-[''] focus:after:border-b-2 focus:after:w-6 focus:after:bottom-0 focus:after:left-10">
                Expriences
              </button>
            </li>
            <li>
              <button
                className=" hover:text-gray-400 font-bold h-16 cursor-pointer relative  hover:after:absolute hover:after:content-[''] hover:after:border-b-2 hover:after:border-b-gray-400 hover:after:w-2 hover:after:bottom-0 hover:after:left-16
              focus:after:absolute focus:after:content-[''] focus:after:border-b-2 focus:after:w-6 focus:after:bottom-0 focus:after:left-16">
                Online Expriences
              </button>
            </li>
          </ul>
        </div>
        {/* Host&Langs&SignIn */}
        <div className='mr-10'>
          <ul className='flex justify-center text-slate-50 mt-7 '>
            <li>
              <button className=' font-bold hover:bg-zinc-900 rounded-full pr-4 h-16 flex items-center justify-center mr-2 text-xl w-48'>
                Become a Host
              </button>
            </li>
            <li>
              <button className='hover:bg-zinc-900 rounded-full w-16 h-16 flex items-center justify-center mr-2'>
                <Image
                  className='invert cursor-pointer'
                  src='/img/language.svg'
                  width='16'
                  height='16'
                  alt=''
                />
              </button>
            </li>
            <li>
              <button className=' font-bold bg-stone-50 rounded-full flex justify-around items-center w-24 border-0 outline-0 h-14 '>
                <Image
                  src='/img/hamburgerMenu.svg'
                  width='16'
                  height='16'
                  alt=''
                />
                <Image
                  className='invert-[.45] sepia-[.18] saturate-[2.96] hue-rotate-[182deg] brightnes-[.93] contrast-[.89]'
                  src='/img/avatar1.svg'
                  width='32'
                  height='32'
                  alt=''
                />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
