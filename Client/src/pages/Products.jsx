import React, { useState } from 'react';
import FormAddProduct from "../components/Product/FormAddProduct"
import FormEditProduct from '../components/Product/FormEditProduct';
import useProduct from '../hooks/useProduct';


const ProductsPage = () => {
    const { products, deleteProduct } = useProduct()
    const [showFormAdd, setShowFormAdd] = useState(false);
    const [showFormEdit, setShowFormEdit] = useState(false);
    const [idToEdit, setIdToEdit] = useState();

    const handleShowEditForm = (id) => {
        setIdToEdit(id)
        setShowFormEdit(true)
    }

    const handleDeleteProduct = async (product) => {
        const confirm = window.confirm(`Bạn chắc chắn muốn xoá sản phẩm ${product.name} ?`)
        if (confirm) {
            await deleteProduct(product.id)
        }
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div style={{ width: '90%' }}>
                <h1>Danh sách sản phẩm</h1>
                <div>
                    <button onClick={() => setShowFormAdd(true)} className="btn btn-primary mb-3">
                        Thêm sản phẩm
                    </button>
                </div>
                <table className="table table-bordered" style={{ width: '100%' }}>
                    <thead className="table-dark">
                        <tr>
                            <th>Tên sản phẩm</th>
                            <th>Giá</th>
                            <th>Ảnh</th>
                            <th>Tác vụ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => (
                                <tr key={product.id}>
                                    <td>{product.name}</td>
                                    <td>{product.price.toLocaleString()} VND</td>
                                    <td>
                                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                            <img
                                                src={`http://localhost:8080${product.imageUrl}`}
                                                alt={product.name}
                                                style={{ width: '100px', height: 'auto' }}
                                            />
                                        </div>
                                    </td>
                                    <td style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                        <button
                                            className="btn btn-success btn-sm"
                                            onClick={() => handleShowEditForm(product.id)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => handleDeleteProduct(product)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
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
