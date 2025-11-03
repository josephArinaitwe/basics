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
  
  const handleClick = () => {
    setShowAlert(true);
  }

  const handleCloseAlert = () => {
    setShowAlert(false);
  }
  
return( <div >
    
    {/* <Button onClick={() => console.log('Button clicked!')} color="success">Click Me</Button > */}
    { showAlert && 
      <Alert onClose={handleCloseAlert}>
        This is an <span className='alert-link'> alert </span> message!
      </Alert>
    }
    <Button onClick={handleClick} color="warning">Click Me</Button >
  </div>
  );
 
}

export default App;