import Navbar from "../components/HomePage/Navbar"
import Footer from "../components/HomePage/Footer"
import { useEffect } from "react"
import toast from "react-hot-toast"

const OrderSuccess = () => {
    const orderInfor = JSON.parse(localStorage.getItem("orderInfor"))

    useEffect(() => {
        toast.success("Đặt hàng thành công")
        if (orderInfor) {
            localStorage.removeItem("orderInfor")
        }
    }, [])

    return (
        <>
            <Navbar />
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <h1 className="mb-4">Thông tin đơn hàng</h1>
                    <div className="row g-5">
                        <div className="col-md-12 col-lg-6 col-xl-4">
                            <div className="row">
                                <div className="col-md-12 col-lg-6">
                                    <div className="form-item w-100">
                                        <label className="form-label my-3">Họ<sup>*</sup></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={orderInfor?.lastName}
                                            readOnly
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-6">
                                    <div className="form-item w-100">
                                        <label className="form-label my-3">Tên<sup>*</sup></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={orderInfor?.firstName}
                                            readOnly
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-item">
                                <label className="form-label my-3">Địa chỉ <sup>*</sup></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Số nhà, Tên đường"
                                    value={orderInfor?.address}
                                    readOnly
                                />
                            </div>
                            <div className="form-item">
                                <label className="form-label my-3">Tỉnh/Thành phố<sup>*</sup></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={orderInfor?.city}
                                    readOnly
                                />
                            </div>
                            <hr />
                            <div className="form-item">
                                <textarea
                                    name="text"
                                    className="form-control"
                                    spellCheck="false"
                                    cols="30"
                                    rows="7"
                                    value={orderInfor?.note}
                                >
                                </textarea>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 col-xl-8">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Sản phẩm</th>
                                            <th scope="col">Tên</th>
                                            <th scope="col">Số lượng</th>
                                            <th scope="col">Giá</th>
                                            <th scope="col">Tạm tính</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {

                                            orderInfor && orderInfor.orderDetails.map((item) => {
                                                return (
                                                    <tr key={item.cartItemId}>
                                                        <th scope="row">
                                                            <div className="d-flex align-items-center mt-2">
                                                                <img src={`http://localhost:8080${item.imageUrl}`} className="img-fluid rounded" style={{ width: '90px', height: '90px' }} alt="product image" />
                                                            </div>
                                                        </th>
                                                        <td className="py-5">{item.productName}</td>
                                                        <td className="py-5">{item.quantity}</td>
                                                        <td className="py-5">{item.price.toLocaleString()}đ</td>
                                                        <td className="py-5">{item.total.toLocaleString()}đ</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                        <tr>
                                            <th scope="row">
                                            </th>
                                            <td className="py-5">
                                                <p className="mb-0 text-dark text-uppercase py-3">Tổng cộng</p>
                                            </td>
                                            <td className="py-5"></td>
                                            <td className="py-5"></td>
                                            <td className="py-5">
                                                <div className="border-bottom border-top">
                                                    <p className="text-dark">{orderInfor?.total.toLocaleString()}đ</p>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="row g-4 text-center align-items-center justify-content-center pt-4">
                                <button onClick={() => window.location.href = "/"} type="submit" className="btn border-secondary py-3 px-4 text-uppercase w-100 text-primary"
                                >
                                    Quay về trang chủ
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

export default OrderSuccess;