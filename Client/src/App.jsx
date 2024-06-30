import { Routes, Route } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "./context/AuthContext"
import HomePage from "./pages/HomePage"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import Shop from "./pages/Shop"
import ProductDetails from "./pages/ProductDetails"
import RegisterPage from "./pages/Register"
import LoginPage from "./pages/Login"
import ProductPage from "./pages/Products"
import CaterogyPage from "./pages/Categories"

function App() {
  const { user } = useContext(AuthContext)

  return (
    <Routes>
      <Route path="/register" element={user ? <HomePage /> : <RegisterPage />} />
      <Route path="/login" element={user ? <HomePage /> : <LoginPage />} />
      <Route path="/admin/product" element={<ProductPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/details" element={<ProductDetails />} />
      <Route path="/cart" element={user ? <HomePage /> : <Cart />} />
      <Route path="/checkout" element={user ? <HomePage /> : <Checkout />} />
      <Route path="/admin/category" element={<CaterogyPage />} />
    </Routes>
  )
}

export default App
