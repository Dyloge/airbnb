const QuestionBanner = () => {
  return (
    <div className='h-80 bg-gray-400 mb-10 flex flex-col justify-between'>
      <div className='font-semibold text-6xl w-96'>
        Questions about hosting?
      </div>
      <button className='bg-slate-50 w-32'>Ask a Superhost</button>
    </div>
  );
};

export default QuestionBanner;
