import Navbar from "../components/HomePage/Navbar";
import Footer from "../components/HomePage/Footer";
import useProduct from "../hooks/useProduct";
import Spinner from "../components/HomePage/Spinner";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useCart from "../hooks/useCart"

const ProductOfCategory = () => {
    const { id } = useParams(); // Lấy id của danh mục từ URL
    const { loading, getProductOfCategory, productsOfCategory } = useProduct();
    const { addToCart } = useCart()
    const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
    const productsPerPage = 8; // Số sản phẩm mỗi trang

    useEffect(() => {
        getProductOfCategory(id); // Gọi API lấy sản phẩm theo danh mục
    }, [id]);

    // Tính toán chỉ số bắt đầu và kết thúc cho trang hiện tại
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = productsOfCategory.slice(indexOfFirstProduct, indexOfLastProduct);

    // Xử lý thay đổi trang
    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    const handleAddToCart = async (productId) => {
        await addToCart(productId, 1)
    }

    return (
        <>
            {loading && <Spinner />}
            <Navbar />
            <div className="tab-content" style={{ marginTop: "10%", marginLeft: "1%" }}>
                <h1>{productsOfCategory[0]?.categoryName}</h1>
                <div className="tab-pane fade show p-0 active">
                    <div className="row g-4">
                        <div className="col-lg-12">
                            <div className="row g-4">
                                {
                                    currentProducts.map((product) => (
                                        <div
                                            className="col-md-6 col-lg-4 col-xl-3"
                                            key={product.id}
                                        >
                                            <div className="rounded position-relative fruite-item border border-secondary" style={{ borderRadius: "15px" }}>
                                                <div className="fruite-img">
                                                    <img
                                                        src={`http://localhost:8080${product.imageUrl}`}
                                                        className="img-fluid w-100 rounded-top"
                                                        style={{ cursor: "pointer" }}
                                                        onClick={() => (window.location.href = `/details/${product.id}`)}
                                                        alt="product image"
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
                                                        <a className="btn border border-secondary rounded-pill px-3 text-primary">
                                                            <i className="fa fa-shopping-bag me-2 text-primary"></i>
                                                            Add to cart
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="pagination d-flex justify-content-center mt-5">
                        {
                            [...Array(Math.ceil(productsOfCategory.length / productsPerPage)).keys()].map(number => (
                                <a key={number + 1} onClick={() => paginate(number + 1)} className={`rounded ${currentPage === number + 1 ? 'active' : ''}`}>
                                    {number + 1}
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductOfCategory;
