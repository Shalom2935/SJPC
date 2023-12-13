import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../src/Pages/Home/Home';
import Contact from '../src/Pages/Contact/Contact';
import Inscription from '../src/Pages/Inscription/Inscription';
let express = require('express');
let exp = express();

exp.post("/name", function (req, res) {
    const { first, last } = req.body;
    res.json({
        name: `${first} ${last}`
    });
});

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
