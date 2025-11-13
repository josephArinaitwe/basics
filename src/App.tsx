import Message from "./message"
import Alert from "./components/alert";
import Button from "./components/button";
import ListGroup from "./components/ListGroup";
import { useState, useEffect } from "react";
import produce from "immer";
import Navbar from "./components/navbar";
import CartItem from "./components/cartItem";
import Form from "./components/form";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";
import ProductList from "./components/ProductList";
import  { CanceledError } from "./services/api-clients"; 
import { set } from "zod";
import { is, original } from "immer/dist/internal";
import userService, { User } from "./services/user-service";
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
//  const [selectedCategory, setSelectedCategory] = useState('')
//   const [expenses, setExpenses] = useState([
//     {id: 1, description: 'Coffee', amount: 3, category: 'Food', date: '2024-06-01'},
//     {id: 2, description: 'Groceries', amount: 50, category: 'Food', date: '2024-06-02'},
//     {id: 3, description: 'Milk', amount: 15, category: 'Groceries', date: '2024-06-03'},
//     {id: 4, description: 'Chatgpt', amount: 20, category: 'Utilities', date: '2024-06-04'},
//     {id: 5, description: 'Electricity Bill', amount: 75, category: 'Utilities', date: '2024-06-05'},
//     {id: 6, description: 'Movie', amount: 30, category: 'Entertainment', date: '2024-06-06'}
//   ])

// const visibleExpenses = selectedCategory?
//                           expenses.filter(e => e.category === selectedCategory) 
//                           : expenses;

// return (
//   <>
//   <div className="mb-3">
//       <ExpenseForm  onSubmit={expense => setExpenses([...expenses, {...expense, id: expenses.length + 1}]) } />
//   </div>
//   <div className="mb-3">
//      <ExpenseFilter onSelectCategory={(category) => {
//       setSelectedCategory(category);
//   }} /> 
//   </div>
  
    
//    <ProductList />
//   </>

  
// )
// }
const [users, setUsers ] = useState<User[]>([]);
const [error, setError] = useState('')
const [loading, setLoading] = useState(false);

// useEffect(() => {

//   const fetchUsers = async () =>{
//     try {
//       const response = await axios
//       .get<User[]>('https://jsonplaceholder.typicode.com/usersr')
//       setUsers(response.data);
//     } catch (err){
//       setError((err as AxiosError).message);
//     }
//   }
//   fetchUsers();
// },[])
useEffect(() => {
  const controller = new AbortController();  
  setLoading(true);
   const {request, cancel} = userService.getAllUsers();
  request.then(response => {
    setUsers(response.data);
    setLoading(false);
  })
  // .catch((err: AxiosError) => setError(err.message));
  .catch((err) => {
    if (err instanceof CanceledError) return;
    setError(err.message);
    setLoading(false);
  })

  return () => cancel();
},[])  
const deleteUser = (user: User) =>{
  setUsers(users.filter(u => u.id !== user.id));
  const  originalUsers = [...users];

  userService.deleteUser(user.id)
  .then((response) => {console.log(response.data)})
  .catch(err => {
    setError(err.message);
    setUsers(originalUsers);
  })
 
}
const addUser = () => {
  const originalUsers = [...users];
  const newUser = {id: users.length + 1, name: 'New User', username: 'newuser', email: 'newuser@example.com'};
  setUsers([newUser, ...users]); 

  //  apiClients.post('/users', newUser)
  //  .then(response => setUsers([response.data, ...users]))
  userService.postUser(newUser)
   .then(response => setUsers([response.data, ...users]))
   .catch(err => {
    setError(err.message);
    setUsers(originalUsers);
   })
 
}
const updateUser = (user: User) => {
  const originalUsers = [...users];
  const updatedUser = {...user, name: user.name + '!'};
  setUsers(users.map(u => u.id === user.id ? updatedUser : u));

  // apiClients.put('/users/' + user.id, updatedUser)
  userService.postUpdate(updatedUser)
  .then(response => {console.log(response.data)})
  .catch(err => {
    setError(err.message);
    setUsers(originalUsers);
  })
}

return(
<>
{error && <p className="text-danger">{error}</p>}
{loading && <div className="spinner-border"></div>}
<button className="btn btn-primary mb-3" onClick={addUser}>Add User</button>
<ul className="list-group ">
  {users.map(user => (
    <li key={user.id} className="list-group-item d-flex justify-content-between">
      {user.name} ({user.email}) {"   "}
      <div className="gap-3">
        <button className="btn btn-outline-secondary mx-1" onClick={() => {updateUser(user)}}>Update</button>
        <button className="btn btn-outline-danger" onClick={()=> {deleteUser(user)}}>Delete</button>
      </div>
      
    </li>
  ))}
</ul>
</>
)}

export default App;