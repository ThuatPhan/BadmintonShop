import React, { useState } from "react";
import Navbar from "../components/HomePage/Navbar";
import Footer from "../components/HomePage/Footer";
import useProduct from "../hooks/useProduct";
import Spinner from "../components/HomePage/Spinner";
import useCart from "../hooks/useCart"

const Shop = () => {
    const { addToCart } = useCart()
    const { loading, products } = useProduct(); // Lấy dữ liệu sản phẩm và trạng thái tải từ hook useProduct
    const [currentPage, setCurrentPage] = useState(1); // Khởi tạo state để theo dõi trang hiện tại

    // Tính toán các chỉ số cho sản phẩm được hiển thị trên trang hiện tại
    const productsPerPage = 8; // Số sản phẩm mỗi trang

    const indexOfLastProduct = currentPage * productsPerPage; // Chỉ số sản phẩm cuối cùng trên trang hiện tại
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage; // Chỉ số sản phẩm đầu tiên trên trang hiện tại
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct); // Lấy ra các sản phẩm trên trang hiện tại

    // Tính tổng số trang dựa trên tổng số sản phẩm
    const totalPages = Math.ceil(products.length / productsPerPage);


    // Hàm để thay đổi trang hiện tại khi người dùng bấm vào số trang
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleAddToCart = async (productId) => {
        await addToCart(productId, 1)
    }

    return (
        <>
            {loading && <Spinner />}
            <Navbar />
            <div className="tab-content" style={{ marginTop: "10%", marginLeft: "1%" }}>
                <h1>Tất cả sản phẩm</h1>
                <div className="tab-pane fade show p-0 active">
                    <div className="row g-4">
                        <div className="col-lg-12">
                            <div className="row g-4">
                                {currentProducts.map((product) => (
                                    <div
                                        className="col-md-6 col-lg-4 col-xl-3"
                                        key={product.id}
                                    >
                                        <div className="rounded position-relative fruite-item border border-secondary" style={{ borderRadius: "15px" }}>
                                            <div className="fruite-img">
                                                <img
                                                    src={`http://localhost:8080${product.imageUrl}`}
                                                    alt="product image"
                                                    className="img-fluid w-100 rounded-top"
                                                    style={{ cursor: "pointer" }}
                                                    onClick={() => (window.location.href = `/details/${product.id}`)}
                                                />
                                            </div>
                                            <div
                                                className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                                style={{ top: "10px", left: "10px", cursor: "pointer" }}
                                                onClick={() => (window.location.href = `/details/${product.id}`)}
                                            >
                                                {product.categoryName}
                                            </div>
                                            <div className="p-4">
                                                <h4>{product.name}</h4>
                                                <div className="d-flex justify-content-between flex-lg-wrap">
                                                    <p className="text-dark fs-5 fw-bold mb-0">
                                                        {product.price.toLocaleString()}đ
                                                    </p>
                                                    <a
                                                        className="btn border border-secondary rounded-pill px-3 text-primary"
                                                        onClick={() => handleAddToCart(product.id)}
                                                    >
                                                        <i className="fa fa-shopping-bag me-2 text-primary"></i>
                                                        Thêm vào giỏ hàng
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="pagination d-flex justify-content-center mt-5">
                        {[...Array(totalPages)].map((_, index) => (
                            <a
                                key={index}
                                href="#"
                                className={`rounded ${currentPage === index + 1 ? "active" : ""}`}
                                onClick={() => handlePageChange(index + 1)}
                            >
                                {index + 1}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Shop;
