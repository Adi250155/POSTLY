import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import "./App.css"

import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'

import Header from './componenets/Header/Header.jsx'
import Footer from './componenets/Footer/Footer.jsx'

function App() {
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        authService.getCurrentUser()
            .then((userData) => {
                if (userData) {
                    dispatch(login({ userData }))
                } else {
                    dispatch(logout())
                }
            })
            .finally(() => setLoading(false))
    }, [dispatch])

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
<div className="min-h-screen flex flex-col bg-[#F1E2E2]">
            <Header />

            <main>
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}

export default App