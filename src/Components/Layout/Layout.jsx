// import React from 'react'

import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ThemeToggle from "../ThemeToggle/ThemeToggle";


export default function Layout() {
    return (
        <>
            <Navbar />
            <ThemeToggle />
            <Outlet />
            <Footer />
        </>
    )
}
