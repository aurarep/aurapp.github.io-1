// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { HomePage } from './HomePage';
import Diario from './Diario'; // Asegúrate de que esta ruta es correcta
import { LoginButton } from './Login';
import './App.css';

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
        {isAuthenticated ? (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/diario" element={<Diario />} />
          </Routes>
        ) : (
          <LoginButton />
        )}
      </header>
    </div>
  );
}

export default App;
