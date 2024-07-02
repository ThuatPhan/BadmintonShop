import Navbar from "../components/HomePage/Navbar"
import Footer from "../components/HomePage/Footer"
import useCart from "../hooks/useCart"
import { useEffect, useState } from "react"


const Cart = () => {
    const {
        cartItems,
        increaseQuantity,
        decreaseQuantity,
        deleteItem,
    } = useCart()
    const [total, setTotal] = useState(0)

    useEffect(() => {

        const totalAmount = cartItems.reduce((sum, cartItem) => sum + cartItem.total, 0)
        setTotal(totalAmount)

    }, [cartItems])


    const handleIncrease = async (cartItemId) => {
        await increaseQuantity(cartItemId)
    }

    const handleDecrease = async (cartItem) => {
        if (cartItem.quantity === 1) {
            deleteItem(cartItem.cartItemId)
        } else {
            await decreaseQuantity(cartItem.cartItemId)
        }
    }

    const handleDelete = async (cartItemId) => {
        await deleteItem(cartItemId)
    }

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
                                    cartItems.map((item) => {
                                        return (
                                            <tr key={item.cartItemId}>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <img src={`http://localhost:8080${item.imageUrl}`} className="img-fluid me-5" style={{ width: '80px', height: '80px' }} alt="" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="mb-0 mt-4">{item.productName}</p>
                                                </td>
                                                <td>
                                                    <p className="mb-0 mt-4">{item.price.toLocaleString()}đ</p>
                                                </td>
                                                <td>
                                                    <div className="input-group quantity mt-4" style={{ width: '100px' }}>
                                                        <div className="input-group-btn">
                                                            <button className="btn btn-sm btn-minus rounded-circle bg-light border" onClick={() => handleDecrease(item)} >
                                                                <i className="fa fa-minus"></i>
                                                            </button>
                                                        </div>
                                                        <input
                                                            type="text"
                                                            className="form-control form-control-sm text-center border-0"
                                                            value={item.quantity}
                                                            readOnly
                                                        />
                                                        <div className="input-group-btn">
                                                            <button className="btn btn-sm btn-plus rounded-circle bg-light border" onClick={() => handleIncrease(item.cartItemId)} >
                                                                <i className="fa fa-plus"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="mb-0 mt-4">{item.total.toLocaleString()}đ</p>
                                                </td>
                                                <td>
                                                    <button className="btn btn-md rounded-circle bg-light border mt-4" onClick={() => handleDelete(item.cartItemId)}>
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
                                </div>
                                <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                                    <h5 className="mb-0 ps-4 me-4">Tổng cộng</h5>
                                    <p className="mb-0 pe-4">
                                        {total.toLocaleString()}đ
                                    </p>
                                </div>
                                <button
                                    className="btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4"
                                    type="button"
                                    disabled={cartItems.length === 0}
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