import React from 'react'
import { BrowserRouter, Route, Routes as Rt } from "react-router-dom";
import Footer from './components/Footer/Index';
import Header from './components/Header/Index';
import Home from './pages/Home/Index';
import Menu from './pages/Menu/Index';
export default function Routes() {
    return (
        <BrowserRouter>
            <Header />
            <Rt>
                <Route path="/" element={<Home />} />
                <Route path="/Menu" element={<Menu />} />

            </Rt>
            <Footer />
        </BrowserRouter>
    )
}
