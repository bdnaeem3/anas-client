import React from 'react'
import { Helmet } from 'react-helmet-async'
import Kanban from '@/sections/kanban'

const KanbanPage = () => {
    return (
        <>
            <Helmet>
                <title> Kanban | Talkpilot </title>
            </Helmet>

            <Kanban />
        </>
    )
}

export default KanbanPage