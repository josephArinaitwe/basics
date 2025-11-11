import Message from "./message"
import Alert from "./components/alert";
import Button from "./components/button";
import ListGroup from "./components/ListGroup";
import { useState } from "react";
import produce from "immer";
import Navbar from "./components/navbar";
import CartItem from "./components/cartItem";
import Form from "./components/form";
import ExpenseTrackerForm from "./components/ExpenseTrackerForm";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";
export const categories = ['Categories', 'Food', 'Utilities', 'Groceries', 'Entertainment'];

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
//
// const [cartItems, setCarItems] = useState([
//   'product1', 'product2', 'product3'
// ]);
// return(
// <>
// <Navbar cartItemsCount={cartItems.length} />
// <CartItem cartItems={cartItems} onClear={() =>setCarItems([])}/>
// </>
// )
// const [game, setGame] = useState ({
//   id: 1,
//   player: {
//     name: 'John',
//     score: 0
//   }
// })
// const handleClick = () => {
//   setGame({...game, player: {...game.player, name: 'David'}})
// }


// return (
//   <>
//   {game.player.name} : {game.player.score}
//   <button onClick={handleClick}>Change Name</button>

//   </>
// )
// const [pizza, setPizza] = useState({
//   name: 'Pepperoni',
//   toppings: ['Mushrooms']
// })

// const [cart, setCart] = useState({
//   discount: .1,
//   items: [
//     {id: 1, title: 'Product 1', quantity: 1},
//     {id: 2, title: 'Product 2', quantity: 2},
//     {id: 3, title: 'Product 3', quantity: 1}
//   ]
// })

// const handleClick = () => {
//   setPizza({...pizza, toppings: [...pizza.toppings, 'onions']})
// }

// const handleChangeQty = () =>{
//   setCart({...cart, items: cart.items.map(item => item.id === 2 ? {...item, quantity: 5} : item)})
// }
// return (
//   <>
//   {pizza.name} : {pizza.toppings.join(', ')}
//   <button onClick={handleClick}>Add Topping</button>

//   <ul>
//     {cart.items.map(item => 
//       <li key={item.id}>
//         {item.title} : {item.quantity}
//       </li>
//     )}
//     <button onClick={handleChangeQty}>Change Quantity</button>
//   </ul>


//   </>
// )
 const [selectedCategory, setSelectedCategory] = useState('')
  const [expenses, setExpenses] = useState([
    {id: 1, description: 'Coffee', amount: 3, category: 'Food', date: '2024-06-01'},
    {id: 2, description: 'Groceries', amount: 50, category: 'Food', date: '2024-06-02'},
    {id: 3, description: 'Milk', amount: 15, category: 'Groceries', date: '2024-06-03'},
    {id: 4, description: 'Chatgpt', amount: 20, category: 'Utilities', date: '2024-06-04'},
    {id: 5, description: 'Electricity Bill', amount: 75, category: 'Utilities', date: '2024-06-05'},
    {id: 6, description: 'Movie', amount: 30, category: 'Entertainment', date: '2024-06-06'}
  ])

const visibleExpenses = selectedCategory?
                          expenses.filter(e => e.category === selectedCategory) 
                          : expenses;

return (
  <>
  <div className="mb-3">
      <ExpenseForm />
  </div>
  <div className="mb-3">
     <ExpenseFilter onSelectCategory={(category) => {
      setSelectedCategory(category);
  }} /> 
  </div>
    
    <ExpenseTrackerForm expenses={visibleExpenses} onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))} />
   
  </>

  
)
}
export default App;