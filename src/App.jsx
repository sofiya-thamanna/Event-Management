// import { Home } from 'lucide-react';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/home";
import Events from './pages/Events';
import Navbar from './components/Navbar';
import CreateEvent from './pages/CreateEvent';

const App = () => {
  return (
    <div>
      <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/events" element={<Events/>}></Route>
            <Route path="/createevent" element={<CreateEvent/>}></Route>
          </Routes>
        </div>
    </div>
  )
}

export default App