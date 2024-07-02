import { useState } from "react";
import useProduct from "../../hooks/useProduct";
import useCategory from "../../hooks/useCategory";

const FormAddProduct = ({ onCancel }) => {
    const { categories } = useCategory();
    const { createProduct } = useProduct();

    const [file, setFile] = useState(null);

    const [newProduct, setNewProduct] = useState({
        name: '',
        description: '',
        price: '',
        categoryId: null,
    });

    const handleCreateProduct = async () => {
        await createProduct(newProduct, file);
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
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
            zIndex: 9999
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
                <h1 style={{ textAlign: "center" }}>Thêm sản phẩm mới</h1>
                <form className="needs-validation" encType="multipart/form-data" onSubmit={handleCreateProduct}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Tên sản phẩm:</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            value={newProduct.name}
                            onChange={(e) => {
                                setNewProduct({ ...newProduct, name: e.target.value });
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Mô tả sản phẩm:</label>
                        <textarea
                            required
                            className="form-control"
                            value={newProduct.description}
                            onChange={(e) => {
                                setNewProduct({ ...newProduct, description: e.target.value });
                            }}
                        >
                        </textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Giá tiền:</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            value={newProduct.price}
                            onChange={(e) => {
                                setNewProduct({ ...newProduct, price: e.target.value });
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="category" className="form-label">Danh mục sản phẩm:</label>
                        <select className="form-control" onChange={(e) => setNewProduct({ ...newProduct, categoryId: e.target.value })}>
                            <option>Chọn danh mục</option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Ảnh sản phẩm</label>
                        <input type="file" required className="form-control" onChange={handleFileChange} />
                        {file && (
                            <div style={{ marginTop: '10px' }}>
                                <img src={URL.createObjectURL(file)} alt="Image Preview" style={{ maxWidth: '100%', height: 'auto' }} />
                            </div>
                        )}
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ marginRight: "10px" }}>Thêm mới</button>
                    <button type="button" className="btn btn-danger" onClick={onCancel}>Huỷ</button>
                </form>
            </div>
        </div>
    );
};

export default FormAddProduct;
