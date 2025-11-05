import React from 'react'

interface Props {
    cartItems: string[];
    onClear: () => void;
}
const CartItem = ({ cartItems, onClear }: Props) => {
  return (
    <>
         <div>Cart Items:</div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        <ul>
        {cartItems.map((item) => 
        <li key={item}>{item}</li>)
        }
        </ul>

        <button className='btn btn-primary btn-sm' onClick={onClear}>Clear Cart</button>
    </>
   
  )
}

export default CartItem;