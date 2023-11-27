import { useContext } from 'react'
import { DataContext } from '../contexts/DataContext'
import GalleryItems from './GalleryItems'

function Gallery() {
    const data = useContext(DataContext)
    const display = data.map(item => {
        return (
            <GalleryItems key={item.trackId} item={item} />
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery