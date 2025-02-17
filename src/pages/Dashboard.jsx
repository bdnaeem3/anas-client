import React from 'react'
import { Helmet } from 'react-helmet-async'
import Dashboard from '@/sections/dashboard'

const DashboardPage = () => {
    return (
        <>
            <Helmet>
                <title> Dashboard | Talkpilot </title>
            </Helmet>

            <Dashboard />
        </>
    )
}

export default DashboardPage