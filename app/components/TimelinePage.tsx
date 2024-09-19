import Head from 'next/head';
import Timeline from '../components/Timeline';

// Sample timeline data
const timelineData = [
  { CompanyName: 'Uncommon.org', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo reprehenderit quam, ea quasi architecto repellendus accusantium. Illo velit,veniam Lorem, ipsum dolor sit amet consectetur adipisicing elit. uo reprehenderit quam, ea quasi architecto repellendus accusantium. Illo velit,veniam ' },
  { CompanyName: 'Uncommon.org', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo reprehenderit quam, ea quasi architecto repellendus accusantium. Illo velit,veniam Lorem, ipsum dolor sit amet consectetur adipisicing elit. uo reprehenderit quam, ea quasi architecto repellendus accusantium. Illo velit,veniam ' },
  { CompanyName: 'Uncommon.org', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo reprehenderit quam, ea quasi architecto repellendus accusantium. Illo velit,veniam Lorem, ipsum dolor sit amet consectetur adipisicing elit. uo reprehenderit quam, ea quasi architecto repellendus accusantium. Illo velit,veniam ' },
  
];

const TimelinePage: React.FC = () => {
  return (
    <div className="p-10">

      <main className="container mx-auto space-y-10">
        {/* Other sections of your page */}
        <section className="my-8 text-center">
        <h3 className='font-opensans-medium text-[#2C70AA] text-center text-[25px] mb-3'>Experience</h3>
        <h2 className='font-opensans-medium text-[30px] text-center'>MY WORK HISTORY</h2>
        </section>

        {/* Timeline section */}
        <section className="my-8">
          <Timeline items={timelineData} />
        </section>
      </main>
    </div>
  );
};

export default TimelinePage;
