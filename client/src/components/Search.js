import React from "react";
import SearchIcon from '@mui/icons-material/Search';





function Search({search, newSearch}) {




    const handleSearch = (e) => {
        newSearch(e.target.value)
    }

    return (
        <div className="search-bar">
            <SearchIcon className="search-icon" fontSize="large"></SearchIcon>
            <input className="search" placeholder="Search" onChange={handleSearch} value={search} />
        </div>
    )
}

export default Search