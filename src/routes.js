import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"

export default function Routs() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" caseSensitive={false} exact element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}