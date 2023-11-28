import { useState } from 'react';


function SearchBar({ handleSearch }) {
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <form onSubmit={(e) => handleSearch(e, searchTerm)}>
            <input onChange={(e) => handleSearch(e, e.target.value)} onChangeCapture={(e) => setSearchTerm(e.target.value)} placeholder="Search" />
            <input type='submit' value="Search" />
        </form>
    )
}

export default SearchBar