import React from 'react'
import { categories } from '../App';

interface Props {
    onSelectCategory: (category: string) => void;
}
const ExpenseFilter = ({ onSelectCategory }: Props) => {


  return (
    <>
    <select className='form-select' onChange={(event) => onSelectCategory(event.target.value) } name="" id="">
        {categories.map(category => (
            <option key={category} value={category}>{category}</option>
        ))}
        {/* <option value="all">Categories</option> 
        <option value="Food">Groceries</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option> */}
    </select>
    </>
  )
}

export default ExpenseFilter