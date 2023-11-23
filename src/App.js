import { useState, useEffect } from 'react';
import SearchBar from './Components/SearchBar'
import Gallery from './Components/Gallery/Gallery'

function App() {

  const [search, setSearch] = useState('')
  const [message, setMessage] = useState('Search For Music')
  const [data, setData] = useState([])
  return (
    <div className="App">
      <SearchBar />
      {message}
      <Gallery />
    </div>
  );
}

export default App;
