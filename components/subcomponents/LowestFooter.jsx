import Image from 'next/image';

const LowestFooter = () => {
  return (
    <div>
      <div className='flex  justify-center my-10'>
        <div className='w-40 underline flex justify-center text-xl font-semibold cursor-pointer'>
          <Image src='/img/language.svg' width='18' height='18' alt='' />
          <div>English(US)</div>
        </div>
        <div className='text-xl cursor-pointer'>
          zł <span className='underline font-semibold'>PLN</span>
        </div>
        <div className=' w-56 flex justify-evenly'>
          <Image src='/img/facebook.svg' width='18' height='18' alt='' />
          <Image src='/img/instagram.svg' width='18' height='18' alt='' />
          <Image src='/img/twitter.svg' width='18' height='18' alt='' />
        </div>
      </div>
      <div className='text-gray-700 text-xl flex justify-center'>
        &copy; 2022 Airbnb, Inc.
      </div>
      <div className='flex  justify-center text-gray-700 cursor-pointer'>
        <div className="text-xl  hover:underline after:content-['.'] after:mx-2">
          Privacy
        </div>
        <div className="text-xl hover:underline after:content-['.'] after:mx-2">
          Terms
        </div>
        <div className='text-xl hover:underline'>Sitemap</div>
      </div>
    </div>
  );
};

export default LowestFooter;
