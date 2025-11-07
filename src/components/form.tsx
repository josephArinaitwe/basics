import React, { FormEvent, useEffect, useRef, useState } from 'react'
import {FieldValue, FieldValues, useForm} from 'react-hook-form';

const Form = () => {
//     const {register} = useForm();
//     console.log(register('name'));


//      const [person, setPerson]= useState ({name: '', age: 0, role: ''})
//     useEffect(()=> {
          
//         console.log('Form component mounted');
//         console.log({person})
//     }, [person]);

//     const nameRef = useRef<HTMLInputElement>(null);
//     const ageRef = useRef<HTMLInputElement>(null);

    
//     const handleSubmit =(event: FormEvent) => {
//         event.preventDefault();
//         if (nameRef.current !== null){
//             console.log('Name:', nameRef.current.value)
//             person.name = nameRef.current.value;
//         }
//         if (ageRef.current !== null){
//             console.log('Age:', ageRef.current.value)
//             person.age = parseInt(ageRef.current.value);
//         }
//         console.log('Person:', person);
    
//     }
//   return (
//     <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//             <label htmlFor="name" className="form-label">Name</label>
//             <input ref={nameRef} id='name' type="text" className="form-control" />
//         </div>
//         <div className="mb-3">
//             <label htmlFor="age" className="form-label">Age</label>
//             <input ref={ageRef}id='age' type="number" className="form-control" />
//         </div>
//         <button type='submit' className='btn btn-primary'>Submit</button>

//         <div className="mb-3">
//             <label htmlFor="role" className="form-label">Role</label>
//             <input onChange={(event)=> setPerson({...person, role: event.target.value}) } value={person.role} id='role' type="text" className="form-control" />
//         </div>
//         <div className="mb-3">
//             <label htmlFor="age" className="form-label">Age</label>
//             <input ref={ageRef}id='age' type="number" className="form-control" />
//         </div>
//         <button type='submit' className='btn btn-primary'>Submit</button>
 

    // </form>
const {register, handleSubmit} = useForm();
const onSubmit = (data: FieldValues) => {console.log(data)}
  return (
   <form action="" onSubmit={handleSubmit(onSubmit)}>
    <div className="mb-3">
        <label htmlFor='name' className='' >Name</label>
        <input id='name' type="text" className='form-control' {...register('name')} />
        
        
    </div>
   </form>
  )
}

export default Form;