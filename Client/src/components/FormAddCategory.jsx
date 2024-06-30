import { useState } from "react";
import useCategory from "../hooks/useCategory";
const FormAddCategory = ({ onCancel }) => {

    const { createCategory } = useCategory()

    const [categoryName, setCategoryName] = useState("");

    const handleCreateCategory = async () => {
        await createCategory({ name: categoryName })
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
                <h1 style={{ textAlign: "center" }}>Thêm danh mục mới</h1>
                <form className="needs-validation" onSubmit={handleCreateCategory}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Tên danh mục</label>
                        <input
                            type="text"
                            className="form-control"
                            required
                            onChange={(e) => { setCategoryName(e.target.value) }}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={!categoryName}
                        style={{ marginRight: "10px" }}
                    >
                        Thêm mới
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

export default FormAddCategory