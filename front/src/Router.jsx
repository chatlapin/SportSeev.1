import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Profil from './pages/Profil'
function Router() {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Header />
                <Sidebar />
                <Routes>
                    <Route exact path="/profil/:userId" element={<Profil />} />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    )
}
export default Router