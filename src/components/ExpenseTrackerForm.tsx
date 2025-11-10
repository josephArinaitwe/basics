import React, { useState } from 'react'
import {FieldValues, useForm} from 'react-hook-form';
import { set, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
    description: z.string().min(3, {message: 'Description must be at least 3 characters long.'}),
    amount: z.number().min(1, {message: 'Amount must be at least 1.'}),
    category: z.string().min(1, {message: 'Category is required.'}),
    date: z.string().min(1, {message: 'Date is required.'})
})

type FormData = z.infer<typeof schema>;

const ExpenseTrackerForm = () => {
    const [ListItem, setListItem] = useState({
        description: '',
        amount: 0,
        category: '',
        date: ''
    })
    const {register, handleSubmit, formState: { errors }} = useForm<FormData>({resolver: zodResolver(schema)});
    const onSubmit = (data: FieldValues) => {setListItem({
        description: data.description,
        amount: data.amount,
        category: data.category,
        date: data.date
    }), console.log(ListItem)}
  return (
    <>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input {...register('description')} id="description" type="text" className="form-control" />
                {errors.description && <p className="text-danger">{errors.description.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="amount" className="form-label">Amount</label>
                <input {...register('amount', {valueAsNumber: true})} id="amount" type="number" className="form-control" />
                {errors.amount && <p className="text-danger">{errors.amount.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="category" className="form-label">Category</label>
                <select {...register('category')} id="category" className="form-select">
                    <option value="">Select a category</option>
                    <option value="groceries">Groceries</option>
                    <option value="utilities">Utilities</option>
                    <option value="entertainment">Entertainment</option>
                   
                </select>
                {errors.category && <p className="text-danger">{errors.category.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="date" className="form-label">Date</label>
                <input {...register('date')} id="date" type="date" className="form-control" />
                {errors.date && <p className="text-danger">{errors.date.message}</p>}
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>

        <table className="table mt-4">
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
                <tr>
                    <td>{ListItem.description}</td>
                    <td>{ListItem.amount}</td>
                    <td>{ListItem.category}</td>
                    <td>{ListItem.date}</td>
                    <td><button className="btn btn-danger btn-sm">Delete</button></td>
                </tr>
            </tbody>
        </table>

    </>
  )
}

export default ExpenseTrackerForm