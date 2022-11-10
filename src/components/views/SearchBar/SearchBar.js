import React, { useEffect, useState } from 'react'
import StockItem from '../Data/Stocks.json';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete'
import { useNavigate } from 'react-router-dom'


function SearchBar() {
    const keys = ['code', 'name']
    const [query, setQuery] = useState('');
    const [obj, setObj] = useState(null);
    const filteroption = (options, { inputValue }) => {
        return options.filter((item) => keys.some((key) => item[key].startsWith(inputValue)))
    }
    const navigate = useNavigate()

    useEffect(() => {
        if (obj != null) {
            navigate("/chart", { state: obj })
        }
    }, [obj])
    return (
        <Autocomplete
            id="search_bar"
            autoComplete
            includeInputInList
            popupIcon={""}
            value={obj}
            onInputChange={(event, inputValue) => setQuery(inputValue)}
            onChange={(event, newValue) => {
                setObj(newValue)
            }}
            options={StockItem}
            getOptionLabel={(option) => option.name + '  ' + option.code}
            filterOptions={filteroption}
            noOptionsText={'찾으려는 주식이 없습니다...'}
            sx={{ width: 1 }}
            renderInput={(params) => <TextField
                {...params}
                label="Search.." />}
        />
    )
}

export default SearchBar