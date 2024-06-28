import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


import yonexNanoflare002f from "../assets/img/nanoflare-002f.png"
import yonexAstrox88sPro from "../assets/img/astrox-88s-pro.png"
import { useState } from "react"

const Chackout = () => {

    const products = [
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
            quantity: 2,
            image: yonexAstrox88sPro
        },
        {
            id: 3,
            name: "Yonex Nanoflare 02F",
            price: 300,
            quantity: 1,
            image: yonexNanoflare002f
        }
    ]

    const [total, setTotal] = useState(
        products.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.price * currentValue.quantity;
        }, 0)
    )

    const [shipFee, setShipFee] = useState(total >= 900 ? 0 : 200)

    return (
        <>
            <Navbar />
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <h1 className="mb-4">Chi tiết đơn hàng</h1>
                    <form action="#">
                        <div className="row g-5">
                            <div className="col-md-12 col-lg-6 col-xl-5">
                                <div className="row">
                                    <div className="col-md-12 col-lg-6">
                                        <div className="form-item w-100">
                                            <label className="form-label my-3">Họ<sup>*</sup></label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-6">
                                        <div className="form-item w-100">
                                            <label className="form-label my-3">Tên<sup>*</sup></label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-item">
                                    <label className="form-label my-3">Địa chỉ <sup>*</sup></label>
                                    <input type="text" className="form-control" placeholder="Số nhà, Tên đường" />
                                </div>
                                <div className="form-item">
                                    <label className="form-label my-3">Tỉnh/Thành phố<sup>*</sup></label>
                                    <input type="text" className="form-control" />
                                </div>
                                <hr />
                                <div className="form-item">
                                    <textarea name="text" className="form-control" spellCheck="false" cols="30" rows="7" placeholder="Ghi chú (Tuỳ chon)"></textarea>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-6 col-xl-7">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Sản phẩm</th>
                                                <th scope="col">Tên</th>
                                                <th scope="col">Giá</th>
                                                <th scope="col">Số lượng</th>
                                                <th scope="col">Tổng cộng</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                products.map((item) => {
                                                    return (
                                                        <tr key={item.id}>
                                                            <th scope="row">
                                                                <div className="d-flex align-items-center mt-2">
                                                                    <img src={item.image} className="img-fluid rounded-circle" style={{ width: '90px', height: '90px' }} alt="" />
                                                                </div>
                                                            </th>
                                                            <td className="py-5">{item.name}</td>
                                                            <td className="py-5">{item.price}</td>
                                                            <td className="py-5">{item.quantity}</td>
                                                            <td className="py-5">{item.price * item.quantity}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                            <tr>
                                                <th scope="row">
                                                </th>
                                                <td className="py-5"></td>
                                                <td className="py-5"></td>
                                                <td className="py-5">
                                                    <p className="mb-0 text-dark py-3">Tổng cộng</p>
                                                </td>
                                                <td className="py-5">
                                                    <div className="py-3 border-bottom border-top">
                                                        <p className="mb-0 text-dark">
                                                            {total}
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                </th>
                                                <td className="py-5">
                                                    <p className="mb-0 text-dark py-4">Shipping: {shipFee}đ</p>
                                                </td>
                                                <td colSpan="3" className="py-5">
                                                    <div className="form-check text-start"></div>
                                                    <div className="form-check text-start">
                                                        <input type="checkbox" className="form-check-input bg-primary border-0" id="Shipping-1" name="Shipping-1" value="Shipping" checked={total >= 900} />
                                                        <label className="form-check-label" htmlFor="Shipping-1">Miễn phí vận chuyển</label>
                                                    </div>
                                                    <div className="form-check text-start"></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                </th>
                                                <td className="py-5">
                                                    <p className="mb-0 text-dark text-uppercase py-3">Tổng cộng</p>
                                                </td>
                                                <td className="py-5"></td>
                                                <td className="py-5"></td>
                                                <td className="py-5">
                                                    <div className="py-3 border-bottom border-top">
                                                        <p className="mb-0 text-dark">
                                                            {total + shipFee}
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="row g-4 text-center align-items-center justify-content-center pt-4">
                                    <button type="button" className="btn border-secondary py-3 px-4 text-uppercase w-100 text-primary">Place Order</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Chackout;