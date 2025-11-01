import { useState } from "react";

function ListGroup() {
    let items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Mumbai'
    ]

    const [selectedIndex, setSelectedIndex] = useState(-1);
    const getMesssage = () =>{
        return items.length === 0 ? 'No items found' : 'showing ' + items.length + ' items';
    }

  return (
    <> 
    <h1>List Group</h1> 
    { items.length === 0 && 'No items found' }  
   
    <ul className="list-group">
      {items.map((item, index) => 
          <li key={item} 
          className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
          onClick={() => setSelectedIndex(index)}> {item}</li>
      )}
    </ul>

    </>
  );
}
export default ListGroup;
