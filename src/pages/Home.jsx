import React from 'react';
import Sidebar from '../components/Sidebar';
import KPITiles from '../components/KPITiles';

const Home = () => {
  const tiles = [
    { title: 'Total Shops', value: 50 },
    { title: 'Total Categories', value: 20 },
    { title: 'Active Users', value: 120 },
    { title: 'Pending Requests', value: 10 },
  ];

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flexGrow: 1, padding: '20px' }}>
        <KPITiles tiles={tiles} />
      </div>
    </div>
  );
};

export default Home;
