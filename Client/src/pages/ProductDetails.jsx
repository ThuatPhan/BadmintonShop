import OwlCarousel from 'react-owl-carousel';
import Navbar from "../components/HomePage/Navbar";
import Footer from "../components/HomePage/Footer";
import useProduct from "../hooks/useProduct";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Spinner from "../components/HomePage/Spinner";
import useCart from "../hooks/useCart"

const ProductDetails = () => {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1)
    const { addToCart } = useCart()

    const {
        loading,
        getProduct,
        getProductOfCategory,
        products
    } = useProduct();

    const [product, setProduct] = useState(null)

    useEffect(() => {
        const getInfor = async () => {
            const product = await getProduct(id)
            await getProductOfCategory(product.categoryId)
            setProduct(product)
        }

        getInfor()
    }, []);

    const handleAddToCart = async (productId) => {
        await addToCart(productId, quantity)
    }


    return (
        <>
            {loading && <Spinner />}
            <Navbar />
            <div className="container-fluid py-5 mt-5">
                <div className="container py-5">
                    <div className="row g-4">
                        <div className="col-lg-4">
                            <div className="border rounded">
                                <a href="#">
                                    <img
                                        src={`http://localhost:8080${product?.imageUrl}`}
                                        className="img-fluid rounded"
                                        alt="Image"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h2 className="fw-bold mb-4">
                                {product?.name}
                            </h2>
                            <p className="mb-3">
                                {`Danh mục: ${product?.categoryName}`}
                            </p>
                            <h5 className="fw-bold mb-3">
                                {product?.price.toLocaleString()}đ
                            </h5>
                            <p className="mb-4">
                                {product?.description}
                            </p>
                            <div className="input-group quantity" style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                width: "60%"
                            }}
                            >
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    width: "30%",
                                    alignItems: "center"
                                }}
                                >
                                    <div className="input-group-btn">
                                        <button
                                            className="btn btn-sm btn-minus rounded-circle bg-light border"
                                            onClick={() => {
                                                if (quantity > 1) {
                                                    setQuantity((quantity) => quantity - 1)
                                                }
                                            }}
                                        >
                                            <i className="fa fa-minus"></i>
                                        </button>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control form-control-sm text-center border-0"
                                        readOnly
                                        value={quantity}
                                        style={{ backgroundColor: "transparent" }}
                                    />
                                    <div className="input-group-btn">
                                        <button
                                            className="btn btn-sm btn-plus rounded-circle bg-light border"
                                            onClick={() => setQuantity((quantity) => quantity + 1)}
                                        >
                                            <i className="fa fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                                <a className="btn border border-secondary rounded-pill px-4 py-2 text-primary" onClick={() => handleAddToCart(product.id)}>
                                    <i className="fa fa-shopping-bag me-2 text-primary"></i>
                                    Thêm vào giỏ hàng
                                </a>
                            </div>
                        </div>
                        <h2 className="fw-bold mb-0">
                            Sản phẩm cùng danh mục
                        </h2>
                        <div className="vesitable">
                            {
                                products.length > 0 && (
                                    <OwlCarousel
                                        className="owl-theme"
                                        key={products.length}
                                        nav
                                        loop
                                        autoplay
                                        autoplayTimeout={2000}
                                        dots={false}
                                        margin={3}
                                        items={4}
                                    >
                                        {
                                            products.map((product) => (
                                                <div
                                                    className="item"
                                                    key={product.id}
                                                    onClick={() => window.location.href = `/details/${product.id}`}
                                                    style={{ width: '269px', height: 'auto' }} // Style inline ở đây
                                                >
                                                    <div className="border rounded position-relative vesitable-item">
                                                        <div className="vesitable-img">
                                                            <img
                                                                src={`http://localhost:8080${product.imageUrl}`}
                                                                className="img-fluid w-100 rounded-top"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div
                                                            className="text-white bg-primary px-3 py-1 rounded position-absolute"
                                                            style={{ top: '10px', right: '10px' }}
                                                        >
                                                            {product.categoryName}
                                                        </div>
                                                        <div className="p-4 pb-0 rounded-bottom">
                                                            <h4>{product.name}</h4>
                                                            <div className="d-flex justify-content-between flex-lg-wrap">
                                                                <p className="text-dark fs-5 fw-bold">
                                                                    {product.price.toLocaleString()}đ
                                                                </p>
                                                                <a
                                                                    href="#"
                                                                    className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"
                                                                >
                                                                    <i className="fa fa-shopping-bag me-2 text-primary"></i>
                                                                    Thêm vào giỏ
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </OwlCarousel>

                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductDetails;
