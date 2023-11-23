import { useState } from 'react';


function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <form>
            <input placeHolder="Search" />
            <input type='submit' value="Search" />
        </form>
    )
}

export default SearchBar