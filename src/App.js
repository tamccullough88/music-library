import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchBar from './Components/SearchBar';
import Gallery from './Components/Gallery/Gallery';
import AlbumView from './Components/Views/AlbumViews';
import ArtistView from './Components/Views/ArtistViews';

function App() {

  const [search, setSearch] = useState('')
  const [message, setMessage] = useState('Search For Music')
  const [data, setData] = useState([])

  useEffect(() => {
    if (search) {
      const fetchData = async () => {
        const url = encodeURI(`https://itunes.apple.com/search?term=${search}`)
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        if (data.results) {
          setData(data.results)
        } else {
          setData([])
          setMessage('Not Found')
        }
      }
      fetchData()
    }
  }, [search])

  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearch(term)
  }

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={
            <>
              <SearchBar handleSearch={handleSearch} />
              <Gallery data={data} />
            </>
          } />
          <Route path='/album/:id' element={<AlbumView />} />
          <Route path='/artist/:id' element={<ArtistView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
