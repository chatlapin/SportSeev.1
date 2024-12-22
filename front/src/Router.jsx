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
                    <Route exact path="/" element={<Home />} />
                    {/* It tells the router to match the URL `/annonce/:annonceId` and render the `<Annonce />` component. */}
                    <Route exact path="/user/:userId" element={<Profil />} />
                    {/* It tells the router to match the URL `/a-propos` and render the `<APropos />` component. */}
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    )
}
export default Router