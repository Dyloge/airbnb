import Image from 'next/image';
import { useState, useRef } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Header2 = () => {
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infant, setInfant] = useState(0);
  const [pets, setPets] = useState(0);
  const childrenIncrease = () => {
    setChildren(children + 1);
  };
  const childrenDecrease = () => {
    if (children === 0) {
      setChildren(0);
    } else {
      setChildren(children - 1);
    }
  };
  const adultsIncrease = () => {
    setAdults(adults + 1);
  };
  const adultsDecrease = () => {
    if (adults === 0) {
      setAdults(0);
    } else {
      setAdults(adults - 1);
    }
  };
  const infantIncrease = () => {
    setInfant(infant + 1);
  };
  const infantDecrease = () => {
    if (infant === 0) {
      setInfant(0);
    } else {
      setInfant(infant - 1);
    }
  };
  const petsIncrease = () => {
    setPets(pets + 1);
  };
  const petsDecrease = () => {
    if (pets === 0) {
      setPets(0);
    } else {
      setPets(pets - 1);
    }
  };
  const [isOpen, setIsOpen] = useState(false);
  const handleModal = () => {
    setIsOpen(!isOpen);
  };
  let modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setIsOpen(false);
    }
  };
  return (
    <div
      className='bg-black flex justify-center  py-10 mobile:hidden'
      ref={modalRef}
      onClick={closeModal}>
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
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </form>
        </div>
        <div className=' bg-slate-50  rounded-full py-2 pl-10 pr-3  mx-auto text-xl  flex flex-col  items-start   font-bold h-20 hover:bg-slate-200'>
          <label htmlFor='' className='text-lg font-medium'>
            Check in
          </label>
          <DatePicker
            className='bg-transparent text-gray-400 focus:outline-none'
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div className=' bg-slate-50  rounded-full py-2 pl-10 pr-3  mx-auto text-xl  flex  flex-col  items-start font-bold h-20 hover:bg-slate-200'>
          <label htmlFor='' className='text-lg font-medium'>
            Check out
          </label>
          <DatePicker
            className='bg-transparent text-gray-400 focus:outline-none'
            selected={endDate}
            onChange={(date) => setEndDate(date)}
          />
        </div>
        <div className=' bg-slate-50  rounded-full py-2 pl-10 pr-3  mx-auto text-xl flex justify-center font-bold h-20 hover:bg-slate-200'>
          <div className='flex flex-col items-start w-80'>
            <label htmlFor='' className='text-lg font-medium'>
              Guests
            </label>
            <input
              className='block border-0 outline-0 bg-transparent w-80 '
              type='text'
              onClick={handleModal}
              placeholder={`${adults} Adults, ${children} Children, ${infant} Infants, ${pets} Pets`}
            />

            {isOpen && (
              <div className='flex flex-col items-center border-2 rounded-lg bg-white absolute top-1/3 right-10 py-4 w-[28rem] '>
                <div className='flex items-center'>
                  <div className='flex justify-between items-center'>
                    <div className='mx-6 flex flex-col w-64'>
                      <div className='text-md font-normal'>Adults</div>
                      <div className='text-sm font-normal text-gray-400'>
                        Ages 13 or above
                      </div>
                    </div>
                    <button
                      className='rounded-lg w-8 h-8 border-2 text-2xl flex justify-center items-center  hover:bg-[#1D5D90] hover:text-white'
                      onClick={adultsDecrease}>
                      <div className='text-2xl'>-</div>
                    </button>
                    <div className='mx-4 text-sm'>{adults}</div>
                    <button
                      className='rounded-lg w-8 h-8 border-2 text-2xl flex justify-center items-center hover:bg-[#1D5D90] hover:text-white'
                      onClick={adultsIncrease}>
                      <div className='text-2xl'>+</div>
                    </button>
                  </div>
                </div>
                <div className='flex items-center'>
                  <div className='mx-6 flex flex-col w-64'>
                    <div className='text-md font-normal'>Children</div>
                    <div className='text-sm font-normal text-gray-400'>
                      Ages 2-12
                    </div>
                  </div>
                  <button
                    className='rounded-lg w-8 h-8 border-2 text-2xl flex justify-center items-center hover:bg-[#1D5D90] hover:text-white'
                    onClick={childrenDecrease}>
                    <div className='text-2xl'>-</div>
                  </button>
                  <div className='mx-4 text-sm'>{children}</div>
                  <button
                    className='rounded-lg w-8 h-8 border-2 text-2xl flex justify-center items-center hover:bg-[#1D5D90] hover:text-white'
                    onClick={childrenIncrease}>
                    <div className='text-2xl'>+</div>
                  </button>
                </div>
                <div className='flex items-center'>
                  <div className='mx-6 flex flex-col w-64'>
                    <div className='text-md font-normal'>Infant</div>
                    <div className='text-sm font-normal text-gray-400'>
                      Under 2
                    </div>
                  </div>
                  <button
                    className='rounded-lg w-8 h-8 border-2 text-2xl flex justify-center items-center hover:bg-[#1D5D90] hover:text-white'
                    onClick={infantDecrease}>
                    <div className='text-2xl'>-</div>
                  </button>
                  <div className='mx-4 text-sm'>{infant}</div>
                  <button
                    className='rounded-lg w-8 h-8 border-2 text-2xl flex justify-center items-center hover:bg-[#1D5D90] hover:text-white'
                    onClick={infantIncrease}>
                    <div className='text-2xl'>+</div>
                  </button>
                </div>
                <div className='flex items-center px-2'>
                  <div className='mx-6 flex flex-col  w-64'>
                    <div className='text-md font-normal'>Pets</div>
                    <div className='text-sm font-normal text-gray-900 underline'>
                      Bringing an assistance animal?
                    </div>
                  </div>
                  <button
                    className='rounded-lg w-8 h-8 border-2 text-2xl flex justify-center items-center hover:bg-[#1D5D90] hover:text-white'
                    onClick={petsDecrease}>
                    <div className='text-2xl'>-</div>
                  </button>
                  <div className='mx-4 text-sm'>{pets}</div>
                  <button
                    className='rounded-lg w-8 h-8 border-2 flex justify-center items-center hover:bg-[#1D5D90] hover:text-white'
                    onClick={petsIncrease}>
                    <div className='text-2xl'>+</div>
                  </button>
                </div>
                <div className='px-12 text-gray-400 text-sm pt-10'>
                  If you&apos;re lucky enough to have more than 2 pets with you,
                  be sure to let your host know.
                </div>
              </div>
            )}
          </div>

          {searchInput ? (
            <button
              className='bg-red-500 flex items-center justify-center rounded-full h-16 '
              type='submit'>
              <div className='flex justify-around items-center w-32 px-4'>
                <Image
                  className='invert'
                  src='/img/search.svg'
                  width='16'
                  height='16'
                  alt=''
                />
                <div className='text-white font-semibold text-xl'>Search</div>
              </div>
            </button>
          ) : (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Header2;
