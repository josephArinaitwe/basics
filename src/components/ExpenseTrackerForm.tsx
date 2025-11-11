import React, { useState } from 'react'
import {FieldValues, useForm} from 'react-hook-form';
import { parse, set, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';


interface Expense {
    id: number;
    description: string;
    amount: number;
    category: string;
    date: string;
}

interface Props {
    expenses: Expense[];
    onDelete: (index: number) => void;
}
const schema = z.object({
    description: z.string().min(3, {message: 'Description must be at least 3 characters long.'}),
    amount: z.number().min(1, {message: 'Amount must be at least 1.'}),
    category: z.string().min(1, {message: 'Category is required.'}),
    date: z.string().min(1, {message: 'Date is required.'})
})

type FormData = z.infer<typeof schema>;

const ExpenseTrackerForm = ({expenses, onDelete}: Props) => {
    // const [ListItem, setListItem] = useState <Array<{
    //     description: string;
    //     amount: number;
    //     category: string;
    //     date: string;
    // }>> ([]);
   

    const [expensesList, setExpensesList] = useState <Array<{expenses: Expense;}>> ([]);
    
    const onSubmit = (data: FieldValues) => setExpensesList([...expensesList, {
        id: expensesList.length + 1,
        description: data.description,
        amount: data.amount,
        category: data.category,
        date: data.date
    }]);
    
    console.log(expensesList)

    if (expenses.length === 0  ) {
        return <div>No expenses</div>;
    }
  return (
    <>
        <table className="table table-bordered mt-4">
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th> </th>
                </tr>
            </thead>
            <tbody>
               
                    {expenses.map((item, index) => (
                        <tr key={index}>
                            <td>{item.description}</td>
                            <td>{item.amount}</td>
                            <td>{item.category}</td>
                            <td>{item.date}</td>
                            <td><button className="btn btn-danger btn-sm" onClick={() => onDelete(item.id)} >Delete</button></td>
                        </tr>

                    ))} 
            </tbody>
            <tfoot>
                <td>Total</td>
                <td>${expenses.reduce((total, item) => total + item.amount, 0)}</td>
                <td></td>
                <td></td>
            </tfoot>
        </table>

    </>
  )

}

export default ExpenseTrackerForm;