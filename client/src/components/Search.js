import React from "react";
import SearchIcon from '@mui/icons-material/Search';





function Search({search, newSearch}) {




    const handleSearch = (e) => {
        newSearch(e.target.value)
    }

    return (
        <div>
            <input className="search" placeholder="search" onChange={handleSearch} value={search} />
        </div>
    )
}

export default Search