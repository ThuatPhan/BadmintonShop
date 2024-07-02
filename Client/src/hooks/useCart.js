import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useCart = () => {
    const [loading, setLoading] = useState(false)
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        const getCartItems = async () => {
            try {

                setLoading(true)

                const token = localStorage.getItem("token")

                const response = await fetch("/Api/api/cart", {
                    method: "GET",
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })

                const data = await response.json()


                if (response.ok) {
                    setCartItems(data)
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false)
            }
        }

        getCartItems()
    }, [])




    const addToCart = async (productId, quantity) => {
        try {
            setLoading(true)

            const token = localStorage.getItem("token")

            const response = await fetch("/Api/api/cart",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({ productId, quantity })
                }
            )

            const data = await response.json()

            if (response.ok) {
                setCartItems((prev) => [...prev, data])
                toast.success("Đã thêm vào giỏ hàng")
            }

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    const increaseQuantity = async (cartItemId) => {
        try {

            const token = localStorage.getItem("token")

            const response = await fetch(`/Api/api/cart/increase/${cartItemId}`,
                {
                    method: "PUT",
                    headers: { 'Authorization': `Bearer ${token}` }
                }
            )

            const data = await response.json()

            if (response.ok) {
                const updatedCartItems = cartItems.map((item) => {
                    if (item.cartItemId === data.cartItemId) {
                        return { ...item, quantity: data.quantity, total: data.total }
                    }

                    return item
                })

                setCartItems(updatedCartItems)
            }

        } catch (error) {
            console.log(error);
        }
    }

    const decreaseQuantity = async (cartItemId) => {
        try {

            const token = localStorage.getItem("token")

            const response = await fetch(`/Api/api/cart/decrease/${cartItemId}`,
                {
                    method: "PUT",
                    headers: { 'Authorization': `Bearer ${token}` }
                }
            )

            const data = await response.json()

            if (response.ok) {
                const updatedCartItems = cartItems.map((item) => {
                    if (item.cartItemId === data.cartItemId) {
                        return { ...item, quantity: data.quantity, total: data.total }
                    }

                    return item
                })

                setCartItems(updatedCartItems)
            }

        } catch (error) {
            console.log(error);
        }

    }

    const deleteItem = async (cartItemId) => {
        try {

            const token = localStorage.getItem("token")

            const response = await fetch(`/Api/api/cart/${cartItemId}`,
                {
                    method: "DELETE",
                    headers: { 'Authorization': `Bearer ${token}` }
                }
            )

            if (response.ok) {
                const updatedCartItems = cartItems.filter((item) => item.cartItemId !== cartItemId)
                setCartItems(updatedCartItems)
            }

        } catch (error) {
            console.log(error);
        }

    }

    const checkOut = async (orderInfor) => {
        try {

            const token = localStorage.getItem("token")

            const response = await fetch("/Api/api/order",
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify(orderInfor)
                }
            )

            const data = await response.json()

            if (response.ok) {
                localStorage.setItem("orderInfor", JSON.stringify(data))
                window.open("/order-success", "_self")
            } else {
                console.log(data)
            }
        } catch (error) {
            console.log(error);
        }
    }

    return {
        loading,
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        deleteItem,
        checkOut,
    }
}

export default useCart;