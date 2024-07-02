import { useEffect, useState } from "react";
import useCategory from "../../hooks/useCategory";
import useProduct from "../../hooks/useProduct";
import Spinner from "../../components/HomePage/Spinner"
import useCart from "../../hooks/useCart";

const Content = () => {
    const { categories } = useCategory();
    const { loading, products, getProductOfCategory } = useProduct();
    const { addToCart } = useCart()

    const [selectedCategory, setSelectedCategory] = useState(undefined)

    useEffect(() => {
        if (selectedCategory !== undefined) {
            getProductOfCategory(selectedCategory.id)
        }
    }, [selectedCategory])


    const handleAddToCart = async (productId) => {
        await addToCart(productId, 1)
    }

    return (
        <>
            {loading && <Spinner />}
            <div className="container-fluid fruite py-5">
                <div className="container py-5">
                    <div className="tab-className text-center">
                        <div className="row g-4">
                            <div className="col-lg-4 text-start">
                                <h1>{selectedCategory ? selectedCategory.name : "Tất cả sản phẩm"}</h1>
                            </div>
                            <div className="col-lg-8 text-end">
                                <ul className="nav nav-pills d-inline-flex text-center mb-5">
                                    {
                                        categories.map((category) => {
                                            return (
                                                <li className="nav-item" key={category.id}>
                                                    <a
                                                        className={`d-flex m-3 py-2 rounded-pill ${selectedCategory?.id === category.id ? "bg-primary" : "bg-light"}`}
                                                        data-bs-toggle="pill"
                                                        onClick={() => setSelectedCategory(category)}
                                                    >
                                                        <span className="text-dark" style={{ width: "130px" }}>{category.name}</span>
                                                    </a>
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="tab-content">
                            <div className="tab-pane fade show p-0 active">
                                <div className="row g-4">
                                    <div className="col-lg-12">
                                        <div className="row g-4">
                                            {
                                                products.map((product) => {
                                                    return (
                                                        <div className="col-md-6 col-lg-4 col-xl-3" key={product.id}>
                                                            <div className="rounded position-relative fruite-item border border-secondary" style={{ borderRadius: "15px" }}>
                                                                <div className="fruite-img" onClick={() => (window.location.href = `/details/${product.id}`)}>
                                                                    <img
                                                                        src={`http://localhost:8080${product.imageUrl}`}
                                                                        className="img-fluid w-100 rounded-top"
                                                                        alt="product image"
                                                                        style={{ cursor: "pointer" }}
                                                                    />
                                                                </div>
                                                                <div
                                                                    className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                                                    style={{ top: "10px", left: "10px" }}

                                                                >
                                                                    {product.categoryName}
                                                                </div>

                                                                <div className="p-4">
                                                                    <h4
                                                                        onClick={() => (window.location.href = `/details/${product.id}`)}
                                                                        style={{ cursor: "pointer" }}
                                                                    >
                                                                        {product.name}
                                                                    </h4>
                                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                                        <p className="text-dark fs-5 fw-bold mb-0">
                                                                            {product.price.toLocaleString()}đ
                                                                        </p>
                                                                        <a onClick={() => handleAddToCart(product.id)} className="btn border border-secondary rounded-pill px-3 text-primary">
                                                                            <i className="fa fa-shopping-bag me-2 text-primary"></i>
                                                                            Add to cart
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Content;
