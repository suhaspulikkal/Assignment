import List from "./List";
// import {Search} from "./Search";
import  { useEffect, useState } from 'react';

function App() {
    const [records, setRecords] = useState([])
    const [query, setQuery] = useState("")

    useEffect(()=>{
      fetch('https://reqres.in/api/users?page=2')
      .then(response => response.json())
      .then(data => setRecords(data.data))
      .catch(err => console.log(err))
    }, []);

    console.log(query)
  return (
    <div>
      <input className="searchBar" type="search" placeholder="Search..." onChange={e=>setQuery(e.target.value)}/>

      <ul>
        {records.filter(x=>x.first_name.toLowerCase().includes(query)).map(x=>{
          return <List key={x.id} url={x.avatar} first_name={x.first_name} id={x.id} />
        })}
      </ul> 
    

    </div>
  )
}

export default App;
