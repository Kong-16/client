import React, { useState } from 'react'
import StockItem from '../Data/Stocks.json';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete'


function SearchBar() {
    const keys = ['code', 'name']
    const [query, setQuery] = useState('');
    const filteroption = (options, { inputValue }) => {
        return options.filter((item) => keys.some((key) => item[key].startsWith(inputValue)))
    }

    return (
        <Autocomplete
            id="search_bar"
            autoComplete
            includeInputInList
            onChange={(event, selectedValue) => setQuery(selectedValue)}
            inputValue={query}
            onInputChange={(event, inputValue) => setQuery(inputValue)}
            options={StockItem}
            getOptionLabel={(option) => option.name + '  ' + option.code}
            filterOptions={filteroption}
            noOptionsText={'찾으려는 주식이 없습니다...'}
            sx={{ minWidth: 300 }}
            renderInput={(params) => <TextField
                {...params}
                label="Search" />}
        />
    )
}

export default SearchBar  