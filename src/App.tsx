import React from 'react';
import { AppRouter } from './components/AppRouter';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;