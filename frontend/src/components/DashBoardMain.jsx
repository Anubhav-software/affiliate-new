    import React from 'react'
    import { Sidebar } from './manual/Sidebar/Sidebar'
    import { Dashboard } from './manual/Dashboard/DashBoard'

    const DashBoardMain = () => {
    return (
        <div className="grid gap-4 p-4 grid-cols-[220px,_1fr]">
        <Sidebar />
        <Dashboard />
        </div>
    )
    }

    export default DashBoardMain