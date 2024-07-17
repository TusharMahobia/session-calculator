import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
export default function Router() {
    return (<div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App />} />
                </Routes>
            </BrowserRouter>
    </div>)
}
