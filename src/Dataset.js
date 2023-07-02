import  { useEffect, useState } from 'react'

function viewData(props){
  return (
      <ul key={props.id}>
        <li>{props.id}</li>
        <li>{props.avatar}</li>
        <li>{props.email}</li>
        <li>{props.first_name}</li>
        <li>{props.last_name}</li>
      </ul>
  )
};

function Dataset() {
  const [records, setRecords] = useState([])

  useEffect(()=>{
    fetch('https://reqres.in/api/users?page=2')
    .then(response => response.json())
    .then(data => setRecords(data.data))
    .catch(err => console.log(err))
  }, []);


  return (
    <div>
      {records.map(viewData)}
    </div>
  )
  //   <div>
  //   {console.log(records.data)}
  //     <ul>
  //       {records.map((x)=>
  //         <li>{x.data}</li>
  //         )}
  //     </ul>
  //   </div>
  // )
}




export default Dataset;
