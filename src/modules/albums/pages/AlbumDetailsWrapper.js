import React from 'react'
import AlbumProvider from '../provider/AlbumProvider'
import AlbumDitails from './AlbumDitails'

export default function AlbumDetailsWrapper() {
    return <AlbumProvider><AlbumDitails /></AlbumProvider>
}
