import GalleryItems from './GalleryItems'

function Gallery({ data }) {
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