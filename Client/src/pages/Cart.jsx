import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import yonexNanoflare002f from "../assets/img/nanoflare-002f.png"
import yonexAstrox88sPro from "../assets/img/astrox-88s-pro.png"
import { useEffect, useState } from "react"

const Cart = () => {

    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Yonex Nanoflare 02F",
            price: 100,
            quantity: 1,
            image: yonexNanoflare002f
        },
        {
            id: 2,
            name: "Yonex Astrox 88S Pro",
            price: 200,
            quantity: 1,
            image: yonexAstrox88sPro
        },
        {
            id: 3,
            name: "Yonex Nanoflare 02F",
            price: 300,
            quantity: 1,
            image: yonexNanoflare002f
        }
    ])

    const handleDecrease = (productId) => {
        setProducts(products.map((product) => {
            return product.id === productId && product.quantity > 1 ? { ...product, quantity: product.quantity - 1 } : product
        }))
    }

    const handleIncrease = (productId) => {
        setProducts(products.map((product) => {
            return product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
        }))
    }

    const handleDelete = (productId) => {
        setProducts(products.filter((product) => product.id != productId))
    }

    const [total, setTotal] = useState(
        products.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.price * currentValue.quantity
        }, 0)
    )

    const [shipFee, setShipFee] = useState(0)

    useEffect(() => {

        const newTotal = products.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.price * currentValue.quantity
        }, 0)

        setTotal(newTotal)
        setShipFee(newTotal >= 900 ? 0 : 200)

    }, [products])

    return (
        <>
            <Navbar />
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Sản phẩm</th>
                                    <th scope="col">Tên</th>
                                    <th scope="col">Giá</th>
                                    <th scope="col">Số lượng</th>
                                    <th scope="col">Tổng cộng</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map((item) => {
                                        return (
                                            <tr key={item.id}>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <img src={item.image} className="img-fluid me-5 rounded-circle" style={{ width: '80px', height: '80px' }} alt="" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="mb-0 mt-4">{item.name}</p>
                                                </td>
                                                <td>
                                                    <p className="mb-0 mt-4">{item.price}</p>
                                                </td>
                                                <td>
                                                    <div className="input-group quantity mt-4" style={{ width: '100px' }}>
                                                        <div className="input-group-btn">
                                                            <button className="btn btn-sm btn-minus rounded-circle bg-light border" onClick={() => handleDecrease(item.id)}>
                                                                <i className="fa fa-minus"></i>
                                                            </button>
                                                        </div>
                                                        <input type="text" className="form-control form-control-sm text-center border-0" value={item.quantity} />
                                                        <div className="input-group-btn">
                                                            <button className="btn btn-sm btn-plus rounded-circle bg-light border" onClick={() => handleIncrease(item.id)}>
                                                                <i className="fa fa-plus"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="mb-0 mt-4">{item.price * item.quantity}</p>
                                                </td>
                                                <td>
                                                    <button className="btn btn-md rounded-circle bg-light border mt-4" onClick={() => handleDelete(item.id)}>
                                                        <i className="fa fa-times text-danger"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="row g-4 justify-content-end">
                        <div className="col-8"></div>
                        <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
                            <div className="bg-light rounded">
                                <div className="p-4">
                                    <h1 className="display-6 mb-4">
                                        Thông tin thanh toán
                                    </h1>
                                    <div className="d-flex justify-content-between mb-4">
                                        <h5 className="mb-0 me-4">Tạm tính:</h5>
                                        <p className="mb-0">
                                            {total}
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <h5 className="mb-0 me-4">Vận chuyển</h5>
                                        <div>
                                            <p className="mb-0">Phí vận chuyển: {shipFee}đ</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                                    <h5 className="mb-0 ps-4 me-4">Tổng cộng</h5>
                                    <p className="mb-0 pe-4">
                                        {total + shipFee}
                                    </p>
                                </div>
                                <button className="btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4" type="button"
                                    onClick={() => window.location.href = "/checkout"}>
                                    Thanh toán
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Cart