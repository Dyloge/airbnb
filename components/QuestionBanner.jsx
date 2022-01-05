const QuestionBanner = () => {
  return (
    <div className='h-[45rem] bg-questionbanner bg-cover mb-10 flex flex-col justify-between'>
      <div className='font-semibold text-7xl w-96 text-slate-50 my-10 mx-10'>
        Questions about hosting?
      </div>
      <button className='bg-slate-50 w-48 px-5 py-4 rounded-lg text-xl font-semibold hover:bg-gray-200 my-10 mx-10'>
        Ask a Superhost
      </button>
    </div>
  );
};

export default QuestionBanner;
