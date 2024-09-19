import React from 'react';

// Define the type for a single timeline item
interface TimelineItem {
  CompanyName: string;
  description: string;
}

// Define the props type for the Timeline component
interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Container for the timeline with relative positioning */}
      <div className="relative">
        {/* Vertical line in the center of the timeline */}
        <div className="sticky top-20 after:content-[''] after:absolute after:w-[6px] after:bg-[#95B7D4] after:top-0 after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2">
          {items.map((item, index) => (
            <div
              key={index}
              className={`mb-8 flex w-full md:w-1/2 ${
                index % 2 === 0
                  ? 'md:flex-row-reverse md:ml-auto md:pl-8'
                  : 'md:mr-auto md:pr-8'
              } items-center relative`}
            >
              {/* Timeline content */}
              <div className="bg-[#E0E0E0] p-6 rounded-lg shadow-lg relative text-black z-10 w-full md:w-auto">
                <h2 className="text-xl font-opensans-medium mb-[20px]">{item.CompanyName}</h2>
                <p className='font-opensans-light'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
