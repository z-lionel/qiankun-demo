import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Demo from './pages/Demo';
import Home from './pages/Home';


const BasicRoute = () => (
    <BrowserRouter basename="/react17">
        <Routes>
            <Route path="*" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />}/>
            <Route path="/demo" element={<Demo />}/>
        </Routes>
    </BrowserRouter>
);


export default BasicRoute;