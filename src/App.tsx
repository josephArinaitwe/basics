import Message from "./message"
import Alert from "./components/alert";
import Button from "./components/button";
import ListGroup from "./components/ListGroup";
import { useState } from "react";
import produce from "immer";
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

const [bugs, setBugs] = useState([
  {id: 1, title:'bug 1', fixed: false},
  {id: 2, title:'bug 2', fixed: true},
  {id: 3, title:'bug 3', fixed: false}
])

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

  const handlebug = () => {
    console.log(bugs);
    
    setBugs(bugs.map(bug => bug.id === 1 ? {...bug, fixed: true} : bug))

    setBugs(produce(draft => {
      const bug = draft.find(bug => bug.id ===1);
    }))
  }

return (
  <div className="">
   <button onClick={handleUpdate}>
    Update Customer
   </button>

  <button onClick={handleTags}>
    Update Tags
  </button>

  <button onClick={handlebug}>
    Update Bugs
  </button>

  </div>

);
}
export default App;