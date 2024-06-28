import { useState } from "react";
const FormAddProduct = ({ onCancel }) => {

    const [newProduct, setNewProduct] = useState({
        name: '',
        price: '',
        quantity: '',
        category: '',
        description: '',
        images: null
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setNewProduct({ ...newProduct, images: file });
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
        }}>
            <div style={{
                backgroundColor: '#fff',
                padding: '20px',
                borderRadius: '5px',
                width: '50%',
                maxHeight: '90%',
                overflowY: 'auto',
                position: 'relative',
                scrollbarWidth: 'none', // Firefox
                msOverflowStyle: 'none'  // Internet Explorer 10+
            }}>
                <button
                    style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        background: 'none',
                        border: 'none',
                        fontSize: '20px',
                        cursor: 'pointer'
                    }}
                    onClick={onCancel}
                >
                    &times;
                </button>
                <h1 style={{textAlign:"center"}}>Thêm sản phẩm mới</h1>
                <form className="needs-validation" noValidate encType="multipart/form-data">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Tên sản phẩm:</label>
                        <input type="text" name="name" className="form-control" id="name" value={newProduct.name} onChange={handleInputChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Giá tiền:</label>
                        <input type="text" name="price" className="form-control" id="price" value={newProduct.price} onChange={handleInputChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="quantity" className="form-label">Số lượng:</label>
                        <input type="number" name="quantity" className="form-control" id="quantity" value={newProduct.quantity} onChange={handleInputChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="category" className="form-label">Danh mục sản phẩm:</label>
                        <select name="category" className="form-control" id="category" value={newProduct.category} onChange={handleInputChange}>
                            <option value="">Select Category</option>
                            <option value="1">Category 1</option>
                            <option value="2">Category 2</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Mô tả sản phẩm:</label>
                        <textarea name="description" className="form-control" id="description" value={newProduct.description} onChange={handleInputChange} required></textarea>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Ảnh sản phẩm</label>
                        <input type="file" multiple name="images" className="form-control" onChange={handleFileChange} />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ marginRight: "10px" }}>Add Product</button>
                    <button type="button" className="btn btn-danger" onClick={onCancel}>Cancel</button>
                </form>
            </div>
        </div>
    )
}

export default FormAddProduct