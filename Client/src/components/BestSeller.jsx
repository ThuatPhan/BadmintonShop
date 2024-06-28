import yonexNanoflare002f from "../assets/img/nanoflare-002f.png"
import yonexAstrox88sPro from "../assets/img/astrox-88s-pro.png"

const BestSeller = () => {

    const products = [
        {
            name: "Yonex Nanoflare 02F",
            description: "Vợt cầu lông Yonex NanoFlare 002F chính hãng là một sản phẩm của ông lớn Yonex tung ra thị trường thuộc phân khúc giá rẻ dành cho người mới chơi.",
            price: 1190000,
            image: yonexNanoflare002f
        },
        {
            name: "Yonex Astrox 88S Pro",
            description: "Với thân vợt được làm từ HM Graphite, Namd, khung vợt từ HM Graphite ,VOLUME CUT RESIN , Tungsten và sức căng tối đa lên đến 29lbs.",
            price: 7200000,
            image: yonexAstrox88sPro
        },
        {
            name: "Yonex Nanoflare 02F",
            description: "Vợt cầu lông Yonex NanoFlare 002F chính hãng là một sản phẩm của ông lớn Yonex tung ra thị trường thuộc phân khúc giá rẻ dành cho người mới chơi.",
            price: 1190000,
            image: yonexNanoflare002f
        },
        {
            name: "Yonex Astrox 88S Pro",
            description: "Với thân vợt được làm từ HM Graphite, Namd, khung vợt từ HM Graphite ,VOLUME CUT RESIN , Tungsten và sức căng tối đa lên đến 29lbs.",
            price: 7200000,
            image: yonexAstrox88sPro
        }
    ]

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
                                    <>
                                        <div className="col-lg-6 col-xl-4">
                                            <div className="p-4 rounded bg-light">
                                                <div className="row align-items-center">
                                                    <div className="col-6">
                                                        <img src={product.image} className="img-fluid rounded-circle w-100" alt="" />
                                                    </div>
                                                    <div className="col-6">
                                                        <a href="#" className="h5">{product.name}</a>
                                                        <h4 className="mb-3">{product.price.toLocaleString()}đ</h4>
                                                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary">
                                                            <i className="fa fa-shopping-bag me-2 text-primary"></i>
                                                            Add to cart
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
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