import React, { useState } from 'react';
import FormAddProduct from "../components/FormAddProduct"
import FormEditProduct from '../components/FormEditProduct';
import useProduct from '../hooks/useProduct';


const ProductsPage = () => {
    const { products } = useProduct()
    const [showFormAdd, setShowFormAdd] = useState(false);
    const [showFormEdit, setShowFormEdit] = useState(false);
    const [idToEdit, setIdToDelete] = useState();

    const handleShowEditForm = (id) => {
        setIdToDelete(id)
        setShowFormEdit(true)
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div style={{ width: '90%' }}>
                <h1>Products List</h1>
                <div>
                    <button onClick={() => setShowFormAdd(true)} className="btn btn-primary mb-3">
                        Add New Product
                    </button>
                </div>
                <table className="table table-bordered" style={{ width: '100%' }}>
                    <thead className="table-dark">
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Image</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.price.toLocaleString()} VND</td>
                                <td>
                                    <img
                                        src={`http://localhost:8080${product.imageUrl}`}
                                        alt={product.name}
                                        style={{ width: '50px', height: 'auto' }}
                                    />
                                </td>
                                <td style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                    <button className="btn btn-success btn-sm" onClick={() => handleShowEditForm(product.id)}>Edit</button>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => handleDelete(product.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {
                showFormAdd && (
                    <FormAddProduct onCancel={() => setShowFormAdd(false)} />
                )
            }
            {
                showFormEdit && (
                    <FormEditProduct onCancel={() => setShowFormEdit(false)} idToEdit={idToEdit} />
                )
            }

        </div>
    );
};

export default ProductsPage;
