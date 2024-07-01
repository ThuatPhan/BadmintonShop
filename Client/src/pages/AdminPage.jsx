import "../assets/css/adminPage.css";
import React, { useState } from "react";
import CategoryPage from "./Categories";
import ProductsPage from "./Products";

const AdminPage = () => {
    const [activeTab, setActiveTab] = useState("products"); // Sử dụng state để theo dõi tab đang được chọn

    const handleTabClick = (tabName) => {
        setActiveTab(tabName); // Hàm xử lý khi click vào tab
    };

    return (
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
    );
};

export default AdminPage;
