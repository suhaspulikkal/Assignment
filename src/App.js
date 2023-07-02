import List from "./List";
import {Search} from "./Search";
import  { useEffect, useState } from 'react'


function filterData(x){
  console.log(x.first_name)
  if(x.first_name.includes('R') ){
    return x
  }
}

function App() {
    const [records, setRecords] = useState([])

    useEffect(()=>{
      fetch('https://reqres.in/api/users?page=2')
      .then(response => response.json())
      .then(data => setRecords(data.data))
      .catch(err => console.log(err))
    }, []);

    // const inputText = document.getElementById("inputSearch");

  return (
    <div className="App">

      <Search />
      
    {/* {console.log(document.getElementById("inputSearch"))} */}

      <ul>
          {records.filter(filterData).map((x,index)=>{
            return (
              <List key={index} title={x.first_name} url={x.avatar} id={x.id} />
            )
          })}
      </ul>
      
      
    </div>
  );
}

export default App;
