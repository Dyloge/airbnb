const InspirationCard = () => {
  return (
    <div className='bg-gray-400 mb-10'>
      <div>Inspiration for your next trip</div>
      <div className='flex h-80 justify-around items-center'>
        <div className='h-40  w-40 '>
          <div className='bg-gray-700'>Image</div>
          <div className='bg-gray-500'>Title</div>
          <div className='bg-gray-600'>distance</div>
        </div>
        <div className='h-40  w-40 '>
          <div className='bg-gray-700'>Image</div>
          <div className='bg-gray-500'>Title</div>
          <div className='bg-gray-600'>distance</div>
        </div>
        <div className='h-40  w-40 '>
          <div className='bg-gray-700'>Image</div>
          <div className='bg-gray-500'>Title</div>
          <div className='bg-gray-600'>distance</div>
        </div>
      </div>
    </div>
  );
};

export default InspirationCard;
