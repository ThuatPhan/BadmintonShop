import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import yonexNanoflare002f from "../assets/img/nanoflare-002f.png"
import yonexAstrox88sPro from "../assets/img/astrox-88s-pro.png"



const Shop = () => {

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
        }
    ]


    return (
        <>
            <Navbar />
            <div style={{ padding: '15px', marginTop: "9%" }}>
                <div className="row g-4 justify-content-center">
                    {
                        products.map((product) => {
                            return (
                                <div className="col-md-6 col-lg-6 col-xl-4">
                                    <div className="rounded position-relative fruite-item">
                                        <div className="fruite-img">
                                            <img src={product.image} className="img-fluid w-100 rounded-top" alt="" />
                                        </div>
                                        <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{ top: '10px', left: '10px' }}>Fruits</div>
                                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                            <h4>{product.name}</h4>
                                            <p>{product.description}</p>
                                            <div className="d-flex justify-content-between flex-lg-wrap">
                                                <p className="text-dark fs-5 fw-bold mb-0">{product.price}</p>
                                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Thêm vào giỏ</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className="col-12">
                        <div className="pagination d-flex justify-content-center mt-5">
                            <a href="#" className="rounded">&laquo;</a>
                            <a href="#" className="active rounded">1</a>
                            <a href="#" className="rounded">2</a>
                            <a href="#" className="rounded">3</a>
                            <a href="#" className="rounded">4</a>
                            <a href="#" className="rounded">5</a>
                            <a href="#" className="rounded">6</a>
                            <a href="#" className="rounded">&raquo;</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Shop
