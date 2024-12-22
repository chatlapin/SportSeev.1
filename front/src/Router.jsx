import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Sidebar from './components/Sidebar'

import Home from './pages/Home'
import Profil from './pages/Profil'
import ComingSoon from './components/ComingSoon'

function Router() {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Header />
                <Sidebar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/profil/:userId" element={<Profil />} />
                    <Route exact path="/settings" element={<ComingSoon />} />
                    <Route exact path="/community" element={<ComingSoon />} />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    )
}

export default Router