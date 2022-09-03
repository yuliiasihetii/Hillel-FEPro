import React from "react"
import { Link, Outlet } from "react-router-dom"

function App() {
    return (<>
        <h1><Link className="link" to="/albumlist">Album List</Link></h1>
        <Outlet />
    </>)
}

export default App