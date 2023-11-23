import { useState } from 'react';

function GalleryItems() {
    const [view, setView] = useState(false)

    return (
        <div onClick={(e) => setView(!view)} style={{ display: 'inline-block' }}>
            <p>Gallery Items</p>
        </div>
    )
}

export default GalleryItems