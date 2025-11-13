import React, {useEffect, useState} from 'react'

const ProductList = ({category}: {category: string}) => {
    const [products, setProducts] = useState<string[]>([]);

   

// interface Product {
//     id: number;
//     title: string;
//     price: number;
//     description: string;
//     category: string;
//     image: string;
//     rating: {
//         rate: number;
//         count: number;
//     }
// }

    // const [products, setProducts] = useState<Product[]>([]);

    // useEffect(() => {
    //     fetch('https://fakestoreapi.com/products')
    //     .then(res => res.json())
    //     .then(data => setProducts(data));
    // }, []);
    // console.log(products);
  return (
    <></>
    // <>
    // <table className='table table-bordered mt-4'>
    //     <thead>
    //         <tr>
    //             <th>Product Title</th>
    //             <th>Price</th>
    //             <th>Description</th>
    //             <th>Category</th>
    //             <th>Image</th>
    //         </tr>
    //     </thead>
    //     <tbody>

    // {products.map(product => (
    //     <tr key={product.id}>
    //         <td>{product.title}</td>
    //         <td>{product.price}</td>
    //         <td>{product.description}</td>
    //         <td>{product.category}</td>
    //         <td><img src={product.image} alt={product.title} style={{width: '50px'}} /></td>
    //     </tr>
    // ))}

    // </tbody>
    // </table>
    // </>
  )
}

export default ProductList