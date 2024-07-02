import { useEffect, useState } from "react";
import useCategory from "../../hooks/useCategory";
import useProduct from "../../hooks/useProduct";

const FormEditProduct = ({ onCancel, idToEdit }) => {
    const { categories } = useCategory()
    const { getProduct, updateProduct } = useProduct()
    const [productInfor, setProductInfor] = useState()
    const [selectedFile, setSelectedFile] = useState(null)

    useEffect(() => {
        const getProductInfor = async () => {
            const product = await getProduct(idToEdit)
            setProductInfor(product)
        }

        getProductInfor()
    }, [])

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setSelectedFile(file)
        }
    }

    const handleUpdateProduct = async () => {
        //remove category name
        const { name, description, price, categoryId } = productInfor
        await updateProduct(idToEdit, { name, price, categoryId, description }, selectedFile)
    }

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
                <h1 style={{ textAlign: "center" }}>Chỉnh sửa sản phẩm</h1>
                <form className="needs-validation" encType="multipart/form-data" onSubmit={handleUpdateProduct}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Tên sản phẩm:</label>
                        <input
                            type="text"
                            className="form-control"
                            required
                            value={productInfor?.name}
                            onChange={(e) => setProductInfor({ ...productInfor, name: e.target.value })}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Giá tiền:</label>
                        <input
                            type="text"
                            className="form-control"
                            required
                            value={productInfor?.price}
                            onChange={(e) => setProductInfor({ ...productInfor, price: e.target.value })}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="category" className="form-label">Danh mục sản phẩm:</label>
                        <select
                            className="form-control"
                            onChange={(e) => setProductInfor({ ...productInfor, categoryId: e.target.value })} >
                            <option>Chọn danh mục</option>
                            {
                                categories.map((category) => {
                                    return (
                                        <option
                                            key={category.id}
                                            value={category.id}
                                            selected={category.id === productInfor?.categoryId}
                                        >
                                            {category.name}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Mô tả sản phẩm:</label>
                        <textarea
                            className="form-control"
                            required
                            value={productInfor?.description}
                            onChange={(e) => setProductInfor({ ...productInfor, description: e.target.value })}
                        >
                        </textarea>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Ảnh sản phẩm</label>
                        <input
                            type="file"
                            className="form-control"
                            onChange={handleFileChange}
                        />
                    </div>
                    <div style={{ marginTop: '10px' }}>
                        <img
                            src={selectedFile ? URL.createObjectURL(selectedFile) : `http://localhost:8080${productInfor?.imageUrl}`}
                            alt="Image Preview"
                            style={{ maxWidth: '100%', height: 'auto' }}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        style={{ marginRight: "10px" }}
                    >
                        Lưu thay đổi
                    </button>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={onCancel}
                    >
                        Huỷ
                    </button>
                </form>
            </div>
        </div>
    )
}

export default FormEditProduct