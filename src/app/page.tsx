// Updated page.tsx
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white">
      {/* Main Event Section */}
      <main className="grid grid-cols-3 gap-4 p-8">
        <div className="border border-blue-400 p-4">
          <h2 className="text-lg font-bold">Event</h2>
          <div className="h-40 bg-gray-600 mt-4 rounded-lg"></div>
        </div>
        <div className="border border-blue-400 p-4 mt-4">
          <h2 className="text-lg font-bold">Speakers</h2>
          <div className="h-40 bg-gray-600 mt-4 rounded-lg"></div>
        </div>

        {/* Sidebar Section */}
        <aside className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-xl font-semibold">Schedule</h3>
          <ul className="space-y-4 mt-4">
            <li className="h-10 bg-gray-600 rounded-lg"></li>
            <li className="h-10 bg-gray-600 rounded-lg"></li>
            <li className="h-10 bg-gray-600 rounded-lg"></li>
            <li className="h-10 bg-gray-600 rounded-lg"></li>
            <li className="h-10 bg-gray-600 rounded-lg"></li>
          </ul>
          <button className="btn btn-primary mt-8 w-full">Register</button>
        </aside>
      </main>
    </div>
  );
};

export default Home;
