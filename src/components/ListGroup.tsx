import { useState } from "react";


interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}



function ListGroup({items, heading, onSelectItem}: Props) {


    const [selectedIndex, setSelectedIndex] = useState(-1);
    const getMesssage = () =>{
        return items.length === 0 ? 'No items found' : 'showing ' + items.length + ' items';
    }

  return (
    <> 
    <h1>{heading}</h1> 
    { items.length === 0 && 'No items found' }  
   
    <ul className="list-group">
      {items.map((item, index) => 
          <li key={item} 
          onClick={() => { setSelectedIndex(index); onSelectItem(item); }}> {item}</li>
      )}
    </ul>

    </>
  );
}
export default ListGroup;
