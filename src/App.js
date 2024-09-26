// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { HomePage } from './HomePage';
import Diario from './secciones/Diario';
import Informacion from './secciones/Informacion';
import { LoginButton } from './secciones/Login';
import './App.css';
import Profile from './secciones/Profile';
import Logout, { LogoutButton } from './modulos/Logout';


function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
        {isAuthenticated ? (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/diario" element={<Diario />} />
            <Route path="/Informacion" element={<Informacion/>}/>
            <Route path="/MenuBar" element={<Informacion/>}/>
            <Route path="/Profile" element={<Profile/>}/>
          </Routes>
        ) : (
          <LoginButton />
        )}
      </header>
    </div>
  );
}

export default App;
