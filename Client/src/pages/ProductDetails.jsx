import OwlCarousel from 'react-owl-carousel'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import yonexNanoflare002f from "../assets/img/nanoflare-002f.png"
import yonexAstrox88sPro from "../assets/img/astrox-88s-pro.png"

const ProductDetails = () => {

    const products = [
        {
            id: 1,
            name: "Yonex Nanoflare 002F",
            description: "Vợt cầu lông Yonex NanoFlare 002F chính hãng là một sản phẩm của ông lớn Yonex tung ra thị trường thuộc phân khúc giá rẻ dành cho người mới chơi.",
            price: 13000000,
            image: yonexNanoflare002f
        },
        {
            id: 2,
            name: "Yonex Astrox 88S Pro",
            description: "Với thân vợt được làm từ HM Graphite, Namd, khung vợt từ HM Graphite ,VOLUME CUT RESIN , Tungsten và sức căng tối đa lên đến 29lbs.",
            price: 7230000,
            image: yonexAstrox88sPro
        },
        {
            id: 3,
            name: "Yonex Nanoflare 002F",
            description: "Vợt cầu lông Yonex NanoFlare 002F chính hãng là một sản phẩm của ông lớn Yonex tung ra thị trường thuộc phân khúc giá rẻ dành cho người mới chơi.",
            price: 1192000,
            image: yonexNanoflare002f
        },
        {
            id: 4,
            name: "Yonex Astrox 88S Pro",
            description: "Với thân vợt được làm từ HM Graphite, Namd, khung vợt từ HM Graphite ,VOLUME CUT RESIN , Tungsten và sức căng tối đa lên đến 29lbs.",
            price: 7201000,
            image: yonexAstrox88sPro
        },
        {
            id: 5,
            name: "Yonex Astrox 88S Pro",
            description: "Với thân vợt được làm từ HM Graphite, Namd, khung vợt từ HM Graphite ,VOLUME CUT RESIN , Tungsten và sức căng tối đa lên đến 29lbs.",
            price: 7200000,
            image: yonexAstrox88sPro
        },
        {
            id: 6,
            name: "Yonex Nanoflare 002F",
            description: "Vợt cầu lông Yonex NanoFlare 002F chính hãng là một sản phẩm của ông lớn Yonex tung ra thị trường thuộc phân khúc giá rẻ dành cho người mới chơi.",
            price: 1190000,
            image: yonexNanoflare002f
        },
        {
            id: 7,
            name: "Yonex Nanoflare 002F",
            description: "Vợt cầu lông Yonex NanoFlare 002F chính hãng là một sản phẩm của ông lớn Yonex tung ra thị trường thuộc phân khúc giá rẻ dành cho người mới chơi.",
            price: 1190000,
            image: yonexNanoflare002f
        },
        {
            id: 8,
            name: "Yonex Astrox 88S Pro",
            description: "Với thân vợt được làm từ HM Graphite, Namd, khung vợt từ HM Graphite ,VOLUME CUT RESIN , Tungsten và sức căng tối đa lên đến 29lbs.",
            price: 7200000,
            image: yonexAstrox88sPro
        }
    ]

    return (
        <>
            <Navbar />
            <div className="container-fluid py-5 mt-5" >
                <div className="container py-5">
                    <div className="row g-4 mb-5">
                        <div className="col-lg-8 col-xl-9">
                            <div className="row g-4">
                                <div className="col-lg-6">
                                    <div className="border rounded">
                                        <a href="#">
                                            <img src={products[0].image} className="img-fluid rounded" alt="Image" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <h4 className="fw-bold mb-3">{products[0].name}</h4>
                                    <p className="mb-3">Danh mục: Vợt cầu lông</p>
                                    <h5 className="fw-bold mb-3">{products[0].price} </h5>
                                    <p className="mb-4">
                                        {products[0].description}
                                    </p>
                                    <div className="input-group quantity mb-5" style={{ width: '100px' }}>
                                        <div className="input-group-btn">
                                            <button className="btn btn-sm btn-minus rounded-circle bg-light border">
                                                <i className="fa fa-minus"></i>
                                            </button>
                                        </div>
                                        <input type="text" className="form-control form-control-sm text-center border-0" value="1" />
                                        <div className="input-group-btn">
                                            <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                                                <i className="fa fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <a href="#" className="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary">
                                        <i className="fa fa-shopping-bag me-2 text-primary"></i> Thêm vào giỏ hàng
                                    </a>
                                </div>
                                <h1 className="fw-bold mb-0">Sản phẩm cùng danh mục</h1>
                                <div className="vesitable">
                                    <OwlCarousel className="owl-theme" dots={false} loop margin={10} nav>
                                        {products.map((product) => (
                                            <div className="item" key={product.id}>
                                                <div className="border border-primary rounded position-relative vesitable-item">
                                                    <div className="vesitable-img">
                                                        <img src={product.image} className="img-fluid w-100 rounded-top" alt="" />
                                                    </div>
                                                    <div className="text-white bg-primary px-3 py-1 rounded position-absolute"
                                                        style={{ top: '10px', right: '10px' }}>Premium</div>
                                                    <div className="p-4 pb-0 rounded-bottom">
                                                        <h4>{product.name}</h4>
                                                        {/* <p>{product.description}</p> */}
                                                        <div className="d-flex justify-content-between flex-lg-wrap">
                                                            <p className="text-dark fs-5 fw-bold">{product.price}</p>
                                                            <a href="#"
                                                                className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary">
                                                                <i className="fa fa-shopping-bag me-2 text-primary"></i> Thêm vào giỏ
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </OwlCarousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProductDetails