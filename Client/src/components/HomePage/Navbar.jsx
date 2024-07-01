import useCategory from "../../hooks/useCategory"
import Search from "./Search"

const Navbar = () => {

    const { categories } = useCategory()
    return (
        <>
            <div className="container-fluid fixed-top">
                <div className="container px-0">
                    <nav className="navbar navbar-light bg-white navbar-expand-xl">
                        <a href="/" className="navbar-brand"><h1 className="text-primary display-6">B4dminton.com</h1></a>
                        <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="fa fa-bars text-primary"></span>
                        </button>
                        <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
                            <div className="navbar-nav mx-auto">
                                <a href="/" className="nav-item nav-link active">Trang chủ</a>
                                <a href="/shop" className="nav-item nav-link">Shop</a>
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Danh mục sản phẩm</a>
                                    <div className="dropdown-menu mr-4  bg-secondary rounded-0">
                                        {
                                            categories.map((category) => (
                                                <a key={category.id} href={`/product-of-category/${category.id}`} className="dropdown-item">{category.name}</a>
                                            ))
                                        }
                                    </div>
                                </div>
                                <a href="#" className="nav-item nav-link">Liên hệ</a>
                            </div>
                            <div className="d-flex m-3 me-0">
                                <button className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4" data-bs-toggle="modal" data-bs-target="#searchModal">
                                    <i className="fas fa-search text-primary"></i>
                                </button>

                                <a href="#" className="position-relative me-4 my-auto" onClick={() => window.location.href = "/cart"}>
                                    <i className="fa fa-shopping-bag fa-2x"></i>
                                </a>
                                <a href="/login" className="my-auto">
                                    <i className="fas fa-user fa-2x"></i>
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <Search />
        </>
    )
}

export default Navbar