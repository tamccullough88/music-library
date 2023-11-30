// These components will be making separate API calls from the app
// component to serve specific data about our artist
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'



function ArtistView() {
    const { id } = useParams()
    const [artistData, setArtistData] = useState([])

    useEffect(() => {
        const API_URL = `http://localhost:4000/album/${id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const data = await response.json()
            setArtistData(data.results)
            console.log(data)
        }
        fetchData()
    }, [id])

    const justAlbums = artistData.filter(entry => entry.collectionType === 'Album')
    const renderAlbums = justAlbums.map((album, i) => {
        return (
            <div key={i}>

                <Link to={`/album/${album.collectionId}`}>
                    {album.collectionName}
                </Link>

            </div>
        )
    })

    const style = {
        'text-align': 'center'
    }

    return (
        <div style={style}>
            <p>Artist Data Goes Here!</p>
            <p> ID: {id}</p>
            {renderAlbums}
        </div>
    )
}

export default ArtistView