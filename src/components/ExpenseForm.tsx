import React from 'react'
import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';  
import categories from '../Expense/categories';

interface Props{
    onSubmit: (data: ExpenseFormData) => void;  
}
const schema = z.object({
    description: z.string().min(3, {message: 'Description must be at least 3 characters long.'}),
    amount: z.number().min(1, {message: 'Amount must be at least 1.'}),
    category: z.enum(categories, {message: 'Category is required.'}),
    date: z.string().min(1, {message: 'Date is required.'})
})
const expensesList: Array<{
    id: number;
    description: string;
    amount: number;
    category: string;
    date: string;
}> = [];

type ExpenseFormData = z.infer<typeof schema>;

const ExpenseForm = ({onSubmit}: Props  ) => { const {register, handleSubmit, formState: { errors }} = useForm<ExpenseFormData>({resolver: zodResolver(schema)});
// const onSubmit = (data: FieldValues) => setExpensesList([...expensesList, {
//         id: expensesList.length + 1,
//         description: data.description,
//         amount: data.amount, 
//         category: data.category,
//         date: data.date
//     }]);
 
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
                <select name="category" id="category" className='form-select'>
                    <option value="">Select Category</option>
                    {categories.map(category => (
                        <option key={category} value={category} {...register('category')}>{category}</option>
                    ))}
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
   </>
  )
}

export default ExpenseForm