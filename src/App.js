import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../src/Pages/Home/Home';
import Contact from '../src/Pages/Contact/Contact';
import Inscription from '../src/Pages/Inscription/Inscription';

function App() {
    return (
        <main>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Contact' element={<Contact />} />
                <Route path='/Inscription' element={<Inscription />} />
            </Routes>
        </main>
    );
}
export default App;
