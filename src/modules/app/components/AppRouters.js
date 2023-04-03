import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import App from '../../app/components/App'
import UserListPage from '../../users/pages/UserListPage'
import UserPage from '../../users/pages/UserPage'
import UserDetailsWrapper from '../../users/pages/UserDetailsWrapper'
import AlbumsPage from '../../albums/pages/AlbumsPage'
import AlbumListPage from '../../albums/pages/AlbumListPage'
import AlbumDetailsWrapper from '../../albums/pages/AlbumDetailsWrapper'
import PhotosPage from '../../photos/PhotosPage'

export default function AppRouters() {
    return (
        <Routes>
            <Route path='/' element={<App />}>
                <Route index element={<Navigate to='/users' />} />
                <Route path='users' element={<UserPage />}>
                    <Route index element={<UserListPage />} />
                    <Route path=':id' element={<UserDetailsWrapper />}>
                        <Route index element={<Navigate to='albums' />} />
                        <Route path='albums' element={<AlbumsPage />} >
                            <Route index element={<AlbumListPage />} />
                            <Route path=':albumId' element={<AlbumDetailsWrapper />}>
                                <Route index element={<PhotosPage />} />
                            </Route>
                        </Route>
                    </Route>
                </Route>
            </Route>
        </Routes>
    )
}
