import React, { useState } from 'react'
import StockItem from '../Data/Stocks.json';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete'


function SearchBar() {
    const [query, setQuery] = useState("");
    // const search = (data) => {
    //     return data.filter((item) => keys.some((key) => item[key].startsWith(query)));
    // };
    return (
        <Autocomplete
            id="search_bar"
            inputValue={query}
            onInputChange={(event, inputValue) => setQuery(inputValue)}
            options={StockItem}
            getOptionLabel={(option) => option.name + '  ' + option.code}
            filterOptions={(options, { inputValue }) => options.filter(item => item.name.startsWith(inputValue) || item.code.startsWith(inputValue))}
            noOptionsText={'찾으려는 주식이 없습니다...'}
            sx={{ minWidth: 300 }}
            renderInput={(params) => <TextField {...params} label="Search" />}
        />
    )
}

export default SearchBar  