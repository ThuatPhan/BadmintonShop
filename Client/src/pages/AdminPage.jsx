import "../assets/css/adminPage.css";
import React, { useEffect, useState } from "react";
import CategoryPage from "./Categories";
import ProductsPage from "./Products";
import Navbar from "../components/HomePage/Navbar";
import Footer from "../components/HomePage/Footer";

const AdminPage = () => {
    const [activeTab, setActiveTab] = useState(localStorage.getItem("activeTab") || "products");

    useEffect(() => {
        localStorage.setItem("activeTab", activeTab);
    }, [activeTab]);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <>
            <Navbar />
            <div className="admin-container">
                <div className="tab-group">
                    <button
                        className={activeTab === "products" ? "active" : ""}
                        onClick={() => handleTabClick("products")}
                    >
                        Sản Phẩm
                    </button>
                    <button
                        className={activeTab === "categories" ? "active" : ""}
                        onClick={() => handleTabClick("categories")}
                    >
                        Danh mục
                    </button>
                </div>
                <div className="tab-content">
                    {activeTab === "products" && <ProductsPage />}
                    {activeTab === "categories" && <CategoryPage />}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AdminPage;
