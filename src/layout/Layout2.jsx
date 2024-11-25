import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'

function Layout2() {
    return (
        <>
            <Outlet />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout2