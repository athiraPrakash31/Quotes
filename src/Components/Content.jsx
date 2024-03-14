import React from 'react'
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import { useState } from 'react';

function Content() {
   const base_url ='https://dummyjson.com/quotes';
   const[quotes,setQuotes]=useState([]);
   const [index, setIndex] =useState(3);
   console.log(index);


        const fetchData = async()=>{
            const response = await fetch(base_url)
            .then(res=>res.json())
            .then(data=>setQuotes(data.quotes))
            console.log(response);
        }
        useEffect(()=>{
            fetchData()
        },[])
        console.log(quotes);
        function fetchQuotes(){
            setIndex(index+1);
        }
  return (
    <div>
        {
            quotes.filter((quote)=>quote.id ===index).map((quote)=>(
<div className="row text-center mt-5 p-5 " key={quote.id}>
            <h3> Quotes of the day refresh you. </h3>
            <div className="col-4"></div>
            <div className="col-4">
            <Button  color="primary" variant="contained" onClick={fetchQuotes} >Click for Quotes</Button>
            <h4 className='mt-5' id='q1'>{quote.quote}</h4>
            <p>By:{quote.author}</p>
            </div>
            <div className="col-4"></div>
        </div>
            ))
        }


        
    </div>
  )
}

export default Content