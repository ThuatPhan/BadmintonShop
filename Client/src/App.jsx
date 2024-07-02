import { Routes, Route } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "./context/AuthContext"
import { Toaster } from "react-hot-toast"
import AdminPage from "./pages/AdminPage"
import HomePage from "./pages/HomePage"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import Shop from "./pages/Shop"
import ProductDetails from "./pages/ProductDetails"
import RegisterPage from "./pages/Register"
import LoginPage from "./pages/Login"
import ProductOfCategory from "./pages/ProductOfCategory"
import OrderSuccess from "./pages/OrderSuccess"
import AccessDenied from "./components/Others/AccessDenied"
import PageNotFound from "./components/Others/PageNotFound"

function App() {

  const { user } = useContext(AuthContext)
  const isAdmin = user?.role === "ADMIN"

  const orderInfor = JSON.parse(localStorage.getItem("orderInfor"))

  return (
    <>
      <Routes>
        <Route path="/admin" element={user && isAdmin ? <AdminPage /> : <AccessDenied />} />

        <Route path="/register" element={user ? <HomePage /> : <RegisterPage />} />
        <Route path="/login" element={user ? <HomePage /> : <LoginPage />} />
        <Route path="/cart" element={user ? <Cart /> : <LoginPage />} />
        <Route path="/checkout" element={user ? <Checkout /> : <HomePage />} />
        <Route path="/order-success" element={orderInfor ? <OrderSuccess /> : <HomePage />} />


        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/details/:id" element={<ProductDetails />} />
        <Route path="/product-of-category/:id" element={<ProductOfCategory />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App
