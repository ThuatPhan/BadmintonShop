import yonexNanoflare002f from "../assets/img/nanoflare-002f.png"
import yonexAstrox88sPro from "../assets/img/astrox-88s-pro.png"

const Content = () => {
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

    const categories = [
        {
            id: 1,
            name: "Tất cả sản phẩm"
        },
        {
            id: 2,
            name: "Vợt"
        },
        {
            id: 2,
            name: "Lưới vợt"
        },
        {
            id: 2,
            name: "Phụ kiện"
        }
    ]

    return (<>
        <div className="container-fluid fruite py-5">
            <div className="container py-5">
                <div className="tab-className text-center">
                    <div className="row g-4">
                        <div className="col-lg-4 text-start">
                            <h1>Sản phẩm</h1>
                        </div>
                        <div className="col-lg-8 text-end">
                            <ul className="nav nav-pills d-inline-flex text-center mb-5">
                                {
                                    categories.map((category) => {
                                        return (
                                            <>
                                                <li className="nav-item" key={category.id}>
                                                    <a className="d-flex m-2 py-2 bg-light rounded-pill active" data-bs-toggle="pill" href="#tab-1">
                                                        <span className="text-dark" style={{ width: "130px" }}>{category.name}</span>
                                                    </a>
                                                </li>
                                            </>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="tab-content">
                        <div id="tab-1" className="tab-pane fade show p-0 active">
                            <div className="row g-4">
                                <div className="col-lg-12">
                                    <div className="row g-4">
                                        {
                                            products.map((product) => {
                                                return (
                                                    <div className="col-md-6 col-lg-4 col-xl-3" key={product.id}>
                                                        <div className="rounded position-relative fruite-item">
                                                            <div className="fruite-img">
                                                                <img src={product.image} className="img-fluid w-100 rounded-top" alt="" />
                                                            </div>
                                                            <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{ top: "10px", left: "10px" }}>Premium</div>
                                                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                                <h4>{product.name}</h4>
                                                                <p>{product.description}</p>
                                                                <div className="d-flex justify-content-between flex-lg-wrap">
                                                                    <p className="text-dark fs-5 fw-bold mb-0">{product.price.toLocaleString()}đ</p>
                                                                    <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Content 