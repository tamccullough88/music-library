// These components will be making separate API calls from the app
// component to serve specific data about a given album
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import NavButtons from '../NavButtons'

function AlbumView() {
    const { id } = useParams()
    const [albumData, setAlbumData] = useState([])



    useEffect(() => {
        const fetchData = async () => {
            const url = `http://localhost:4000/song/${id}`
            const response = await fetch(url)
            const data = await response.json()

            const songs = data.results.filter(item => item.wrapperType === 'track')

            setAlbumData(songs)

            console.log(data)
        }
        fetchData()
    }, [id])

    const renderTracks = albumData.map(song => {
        return (
            <div key={song.trackId}>
                <p>{song.trackName}</p>
            </div>
        )
    })





    return (
        <div >
            <NavButtons />
            <p>Album Data Goes Here!</p>
            <p> ID: {id}</p>
            {renderTracks}
        </div>
    )
}

export default AlbumView