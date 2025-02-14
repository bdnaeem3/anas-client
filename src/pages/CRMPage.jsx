import React from 'react'
import { Helmet } from 'react-helmet-async'
import CRM from '@/sections/CRM/index'

export default function CRMPage() {
    return (
        <div>
            <Helmet>
                <title> CRM - Talkpilot </title>
            </Helmet>

            <CRM />
        </div>
    )
}