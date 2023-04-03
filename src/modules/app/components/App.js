import React from 'react'
import { Outlet } from 'react-router-dom'
export default function App() {
    return (
        <div>
            Application header
            <Outlet />
            Application footer
        </div>
    )
}
