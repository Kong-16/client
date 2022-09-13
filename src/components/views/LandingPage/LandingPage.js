import React, { useState } from 'react';
import './LandingPage.css'
import { StockItem } from '../../../Stocks'
import { List } from './List';
import { useNavigate } from 'react-router-dom';


function LandingPage() {
  const [query, setQuery] = useState("");
  const keys = ["name", "code"]; // 필요?
  const navigate = useNavigate()
  const search = (data) => {
    return data.filter((item) => keys.some((key) => item[key].startsWith(query)));
  };
  const onSearch = (data) => {
    console.log("success");
    navigate("/chart")
    //ChartPage 로 이동, 결과없을 때 예외 처리 
  }
  return (
    <div>
      <div className='search'>
        <input type='text' placeholder=' Search...' className='search-box'
          onChange={e => setQuery(e.target.value)}
        />
        <button className='search-button'
          onClick={e => onSearch(query)}>Search</button>
      </div>
      <List data={search(StockItem)} />
    </div>
  )
}

export default LandingPage