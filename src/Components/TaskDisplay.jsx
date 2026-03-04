import { useState } from 'react';
import bg from '../assets/vector1.png';

const TaskDisplay = () => {
    const [inProgress, setInProgress] = useState(0);
    const [resolved, setResolved] = useState(0);

    return (
        <div className="grid md:grid-cols-2 gap-4 m-10">
  
  {/* In Progress Card */}
<div className="relative rounded-lg overflow-hidden text-white p-14">
    <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-indigo-500"></div>

    {/* Optional pattern overlay */}
    <div className="absolute inset-0 opacity-80" style={{
    backgroundImage: `
      url(${bg})
    `,
  }}></div>

    <div className="relative z-10 text-center">
      <h3 className="text-lg font-medium">In-Progress</h3>
      <p className="text-5xl font-bold mt-2">{inProgress}</p>
    </div>
  </div>

  {/* Resolved Card */}
  <div className="relative rounded-lg overflow-hidden text-white p-14">
    <div className="absolute inset-0 bg-linear-to-r from-green-500 to-emerald-600"></div>

    {/* Optional pattern overlay */}
    <div className="absolute inset-0 opacity-80" style={{
    backgroundImage: `
      url(${bg})
    `,
  }}></div>

    <div className="relative z-10 text-center">
      <h3 className="text-lg font-medium">Resolved</h3>
      <p className="text-5xl font-bold mt-2">{resolved}</p>
    </div>
  </div>

</div>

    );
};

export default TaskDisplay;