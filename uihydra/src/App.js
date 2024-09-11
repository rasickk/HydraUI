import React from 'react';
import VehicleScene from './VehicleScene';
import MapView from './MapView';

function App() {
  return (
    <div className="App" style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flexBasis: '30%', background: '#0f0' }}>
        <VehicleScene />
      </div>
      <div style={{ flexBasis: '70%', background: '#282c34' }}>
        <MapView />
      </div>
    </div>
  );
}

export default App;
