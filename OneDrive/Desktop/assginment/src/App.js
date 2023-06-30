import React, { useState, useEffect } from 'react';
import './App.css';
function App() {
  const [data,setdata]=useState([]);
  const [search,setsearch]=useState('');
  useEffect(()=>{
    fetchdata();
  },[])

  const fetchdata= async()=>{
    try{
      const response=await fetch('https://reqres.in/api/users?page=2');
      const result=await response.json();
        setdata(result.data)
       }
      catch{
        console.log('error');
      }
  }
  const handleonchange=(event)=>{
      setsearch(event.target.value);
  }
  
  const filterindividual=data.filter((individual)=>{
    return individual.first_name.toLowerCase().includes(search.toLowerCase())
  })

  
  return(
    <div className='container'>
    <div className="search">
          <input type="text" placeholder='Search by first name'  value={search} onChange={handleonchange}/>     
    </div>
    <div className="Listview">
    {
    filterindividual.map((individual) => (
      <div className="individual" key={individual.id}>
        <div className="image">
          <img src={individual.avatar} alt="" />
          </div>
          <div className="name">
            {individual.first_name}
          </div>
          <div className="id">
            {individual.id}
          </div>
        </div>
  ))
      
    } 
    </div>
    </div>
   
  )
}

export default App;
