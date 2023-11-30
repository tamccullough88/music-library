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
            {albumData.length > 0 ? <h2>{albumData[0].artistName}</h2> : <h2>Loading...</h2>}
            {albumData.length > 0 ? <h3>Album Title: {albumData[0].collectionName}</h3> : <h3></h3>}

            {renderTracks}
        </div>
    )
}

export default AlbumView