import {MouseEvent} from 'react';
function ListGroup() {
    let items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Mumbai'
    ]

    const handleClick = (event: MouseEvent) => {
        console.log(event);
    }

    const getMesssage = () =>{
        return items.length === 0 ? 'No items found' : 'showing ' + items.length + ' items';
    }

  return (
    <> 
    <h1>List Group</h1> 
    { items.length === 0 && 'No items found' }  
   
    <ul className="list-group">
      {items.map(item => 
          <li key={item} 
          className="list-group-item" 
          onClick={handleClick}> {item}</li>
      )}
    </ul>

    </>
  );
}
export default ListGroup;
