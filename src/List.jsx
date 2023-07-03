
function List(props){
  return (
    <li className="card">
    <img alt="pic" src={props.url} />
    <p>{props.first_name}</p>
    <span className="listId">{props.id}</span>
    </li>
  )
}

export default List;