// These components will be making separate API calls from the app
// component to serve specific data about our artist
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import NavButtons from '../NavButtons'


function ArtistView() {
    const { id } = useParams()
    const [artistData, setArtistData] = useState([])

    useEffect(() => {
        const API_URL = `http://localhost:4000/album/${id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const data = await response.json()
            const albums = data.results.filter(entry => entry.collectionType === 'Album')
            setArtistData(albums)
            console.log(data)
        }
        fetchData()
    }, [id])


    const renderAlbums = artistData.map((album, i) => {
        return (
            <div key={i}>

                <Link to={`/album/${album.collectionId}`}>
                    {album.collectionName}
                </Link>

            </div>
        )
    })



    const style = {
        'textAlign': 'center'
    }

    return (
        <div style={style}>
            <NavButtons />
            {artistData.length > 0 ? <h2>{artistData[0].artistName}</h2> : <h2>Loading...</h2>}
            {renderAlbums}
        </div>
    )
}

export default ArtistView