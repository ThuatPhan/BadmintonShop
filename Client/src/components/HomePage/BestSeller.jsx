import useCart from "../../hooks/useCart"
import useProduct from "../../hooks/useProduct"

const BestSeller = () => {

    const { products } = useProduct()
    const { addToCart } = useCart()

    const handleAddToCart = async (productId) => {
        await addToCart(productId, 1)
    }


    return (
        <>
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="text-center mx-auto mb-5" style={{ maxWidth: "700px" }}>
                        <h1 className="display-4">Sản phẩm bán chạy</h1>
                        <p>Mục sản phẩm bán chạy là nơi trưng bày những mặt hàng có doanh số cao nhất, được nhiều khách hàng yêu thích và tin dùng. Đây là các sản phẩm nổi bật, thường xuyên được mua</p>
                    </div>
                    <div className="row g-4">
                        {
                            products.map((product) => {
                                return (
                                    <div className="col-lg-6 col-xl-4" key={product.id}>
                                        <div className="p-4 rounded bg-light">
                                            <div className="row align-items-center">
                                                <div className="col-6" onClick={() => window.location.href = `details/${product.id}`}>
                                                    <img src={`http://localhost:8080${product.imageUrl}`} style={{ cursor: "pointer" }} className="img-fluid rounded-circle w-100" alt="" />
                                                </div>
                                                <div className="col-6">
                                                    <a onClick={() => window.location.href = `details/${product.id}`} style={{ cursor: "pointer" }} className="h5">
                                                        {product.name}
                                                    </a>
                                                    <h4 className="mb-3">{product.price.toLocaleString()}đ</h4>
                                                    <a onClick={() => addToCart(product.id, 1)} className="btn border border-secondary rounded-pill px-3 text-primary">
                                                        <i className="fa fa-shopping-bag me-2 text-primary"></i>
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default BestSeller