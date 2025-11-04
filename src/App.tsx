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
  //     <ListG3roup 
  //       items={items} 
  //       heading="Cities"
  //       onSelectItem={handleSelectItem} />
        
  //   </div>
  // )
//   const [showAlert, setShowAlert] = useState(false);
//   const [drink, setDrink] = useState({
//     name: 'coffee',
//     price: 5
//   })

//   const [person, setPerson] = useState(
//     {firstname: 'John', lastname: 'Doe'}
//   )
  
//   const handleClick = () => {
//     setShowAlert(true);
//   }

//   const handleCloseAlert = () => {
//     setShowAlert(false);
//   }

//   const handleUpdateDrink = () => {
//     setDrink({...drink, price: 10, name:'Mocha'});
//   }

// return( 
// <div >

//   <ListGroup items={['New York', 'San Francisco', 'Tokyo', 'London', 'Mumbai']} heading="Cities" onSelectItem={(item) => console.log(item)} />
    
//     {/* <Button onClick={() => console.log('Button clicked!')} color="success">Click Me</Button > */}
//     { showAlert && 
//       <Alert onClose={handleCloseAlert}>
//         This is an <span className='alert-link'> alert </span> message!
//       </Alert>
//     }
//     <Button onClick={handleClick} color="warning">Click Me</Button >

//     <Message />
//      <Message />
//       <Message />
//        <Message />
//       <div>{drink.name} : ${drink.price}</div>
//        <button onClick={handleUpdateDrink}>Update Drink</button>
//        <form action=""></form>
//        <form action="inpu" className="border border-black"></form>

//   </div>
//   );
const [customer, setCustomer] = useState({
  name: 'john',
  address: {
    city: 'New York',
    street: '5th Avenue',
    zipcode: '10001'
  }
});
const [tags, setTags] = useState<string[]>(['tag1', 'tag2', 'tag3']);

const handleTags = () => {
  console.log(tags);
  setTags([...tags, 'tag4', 'tag5', 'tag6']);

  setTags(tags.filter(tag => tag !== 'tag1'))
}


 const handleUpdate = () => {
   {console.log(customer)}
    setCustomer({
      ...customer, 
      name: 'Jane',
      address: {
        ...customer.address,
        city: 'London'
      }
    })
  }
return (
  <div>
   <button onClick={handleUpdate}>
    Update Customer
   </button>

  <button onClick={handleTags}>
    Update Tags
  </button>

  
  </div>

);



}

export default App