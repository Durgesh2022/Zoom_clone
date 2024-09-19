import MeetingTypeList from '@/components/MeetingTypeList';

const Home = () => {
  const now = new Date();

  const time = new Date().toLocaleTimeString('en-IN', { 
  hour: '2-digit', 
  minute: '2-digit',
  timeZone: 'Asia/Kolkata'
});
  const date = (new Intl.DateTimeFormat('en-IN', { dateStyle: 'full' })).format(now);

  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <div className="h-[303px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
         
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
