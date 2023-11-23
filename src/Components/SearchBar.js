import { useState } from 'react';


function SearchBar({ handleSearch }) {
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <form  >
            <input onChange={(e) => handleSearch(e, e.target.value)} placeholder="Search" />
            <input type='submit' value="Search" />
        </form>
    )
}

export default SearchBar