const SubFooter = ({ title, items, key }) => {
  return (
    <div className='ml-10'>
      <div className=' font-semibold text-xl my-4'>{title}</div>
      <div className=' md:grid md:grid-rows-2 md:grid-cols-3  md:gap-5 mb-10 text-xl cursor-pointer sm:flex sm:flex-col'>
        {items.map((item) => (
          <div className=' w-max hover:underline' key={key}>
            {item}
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default SubFooter;
