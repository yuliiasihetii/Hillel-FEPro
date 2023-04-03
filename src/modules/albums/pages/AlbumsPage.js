import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function AlbumsPage() {
    return (
        <>
            <h4><Link to=''>Albums list</Link></h4>
            <Outlet />
        </>
    )
}
