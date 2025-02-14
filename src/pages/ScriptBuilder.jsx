import Flow from '@/sections/script_builder/flow'
import React from 'react'
import { Helmet } from 'react-helmet-async'

const ScriptBuilder = () => {
    return (
        <>
            <Helmet>
                <title> Script Builder | Talkpilot </title>
            </Helmet>

            <Flow />
        </>
    )
}

export default ScriptBuilder