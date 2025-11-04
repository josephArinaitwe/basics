import Message from "./message"
import Alert from "./components/alert";
import Button from "./components/button";
import ListGroup from "./components/ListGroup";
import { useState } from "react";
function App(){
  // const items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Mumbai'];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  // return (
  //   <div>
  //     <ListGroup 
  //       items={items} 
  //       heading="Cities"
  //       onSelectItem={handleSelectItem} />
        
  //   </div>
  // )
  const [showAlert, setShowAlert] = useState(false);
  const [drink, setDrink] = useState({
    name: 'coffee',
    price: 5
  })

  const [person, setPerson] = useState(
    {firstname: 'John', lastname: 'Doe'}
  )
  
  const handleClick = () => {
    setShowAlert(true);
  }

  const handleCloseAlert = () => {
    setShowAlert(false);
  }

  const handleUpdateDrink = () => {
    setDrink({name: 'Latte', price: 6});
  }

return( 
<div >

  <ListGroup items={['New York', 'San Francisco', 'Tokyo', 'London', 'Mumbai']} heading="Cities" onSelectItem={(item) => console.log(item)} />
    
    {/* <Button onClick={() => console.log('Button clicked!')} color="success">Click Me</Button > */}
    { showAlert && 
      <Alert onClose={handleCloseAlert}>
        This is an <span className='alert-link'> alert </span> message!
      </Alert>
    }
    <Button onClick={handleClick} color="warning">Click Me</Button >

    <Message />
     <Message />
      <Message />
       <Message />
      <div>{drink.name} : ${drink.price}</div>
       <button onClick={handleUpdateDrink}>Update Drink</button>
       <form action=""></form>
       <form action="inpu" className="border border-black"></form>

  </div>
  );


 
}

export default App;