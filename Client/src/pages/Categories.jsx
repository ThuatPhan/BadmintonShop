import React, { useState } from 'react';
import FormAddCategory from "../components/FormAddCategory"
import FormEditCategory from '../components/FormEditCategory';
import useCategory from '../hooks/useCategory';
import Spinner from '../components/Spinner';

const CategoriesPage = () => {

    const { loading, categories, deleteCategory } = useCategory()

    const [showFormAdd, setShowFormAdd] = useState(false);
    const [showFormEdit, setShowFormEdit] = useState(false);
    const [selectedId, setSelectedId] = useState();


    const handleShowEditForm = (categoryId) => {
        setSelectedId(categoryId)
        setShowFormEdit(true)
    }

    const handleDeleteCategory = async (category) => {
        const confirm = window.confirm(`Bạn chắc chắn muốn xoá danh mục ${category.name} ?`)
        if (confirm) {
            await deleteCategory(category.id)
        }
    }

    return (
        <>
            {
                loading && <Spinner />
            }
            <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                <div style={{ width: '90%' }}>
                    <h1>Danh mục sản phẩm</h1>
                    <div>
                        <button onClick={() => setShowFormAdd(true)} className="btn btn-primary mb-3">
                            Thêm danh mục
                        </button>
                    </div>
                    <table className="table table-bordered" style={{ width: '100%' }}>
                        <thead className="table-dark">
                            <tr>
                                <th>Tên danh mục</th>
                                <th>Tác vụ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((category) => (
                                <tr key={category.id}>
                                    <td>{category.name}</td>
                                    <td style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                        <button
                                            className="btn btn-success btn-sm"
                                            onClick={() => handleShowEditForm(category.id)}>
                                            Sửa
                                        </button>
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => handleDeleteCategory(category)}
                                        >
                                            Xoá
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {
                    showFormAdd && (
                        <FormAddCategory onCancel={() => setShowFormAdd(false)} />
                    )
                }
                {
                    showFormEdit && (
                        <FormEditCategory onCancel={() => setShowFormEdit(false)} idToEdit={selectedId} />
                    )
                }

            </div>
        </>
    );
};

export default CategoriesPage;
