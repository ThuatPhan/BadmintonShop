import React, { useState } from 'react';
import FormAddProduct from "../components/FormAddProduct"
// Import images
import yonexNanoflare002f from "../assets/img/nanoflare-002f.png";
import yonexAstrox88sPro from "../assets/img/astrox-88s-pro.png";
import FormEditProduct from '../components/FormEditProduct';

const initialProducts = [
    {
        id: 1,
        name: "Yonex Nanoflare 002F",
        description: "Vợt cầu lông Yonex NanoFlare 002F chính hãng là một sản phẩm của ông lớn Yonex tung ra thị trường thuộc phân khúc giá rẻ dành cho người mới chơi.",
        price: 13000000,
        image: yonexNanoflare002f
    },
    {
        id: 2,
        name: "Yonex Astrox 88S Pro",
        description: "Với thân vợt được làm từ HM Graphite, Namd, khung vợt từ HM Graphite ,VOLUME CUT RESIN , Tungsten và sức căng tối đa lên đến 29lbs.",
        price: 7230000,
        image: yonexAstrox88sPro
    },
    {
        id: 3,
        name: "Yonex Nanoflare 002F",
        description: "Vợt cầu lông Yonex NanoFlare 002F chính hãng là một sản phẩm của ông lớn Yonex tung ra thị trường thuộc phân khúc giá rẻ dành cho người mới chơi.",
        price: 1192000,
        image: yonexNanoflare002f
    }
];

const ProductTable = () => {
    const [products, setProducts] = useState(initialProducts);
    const [showFormAdd, setShowFormAdd] = useState(false);
    const [showFormEdit, setShowFormEdit] = useState(false);
    const [idToEdit, setIdToDelete] = useState();



    const handleShowEditForm = (id) => {
        setIdToDelete(id)
        setShowFormEdit(true)
    }

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            setProducts(products.filter(product => product.id !== id));
        }
    };

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
                                        src={product.image}
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

export default ProductTable;
