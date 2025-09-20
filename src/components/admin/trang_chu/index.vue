<template>
    <div class="homepage">
        <!-- Navbar -->
        <nav class="navbar">
            <ul>
                <li>
                    <div class="dropdown">
                        <button class="dropbtn">Danh Mục Sản Phẩm</button>
                        <div class="dropdown-content">
                        <router-link 
                            v-for="(cat, index) in categories" 
                            :key="index" 
                            :to="'/danh-muc/' + cat.toLowerCase().replace(/ /g,'-')">
                            {{ cat }}
                        </router-link>
                        </div>
                    </div>
                </li>
                <li><router-link to="/">Trang Chủ</router-link></li>
                <li><router-link to="/san-pham">Sản Phẩm</router-link></li>
                <li><router-link to="/gioi-thieu">Giới Thiệu</router-link></li>
                <li><router-link to="/lien-he">Liên Hệ</router-link></li>
            </ul>
        </nav>

        <!-- Banner -->
        <section class="banner">
            <h1>Chào mừng đến với cửa hàng vật liệu xây dựng</h1>
            <p>Uy tín - Chất lượng - Giá tốt</p>
        </section>

        <!-- Danh mục sản phẩm -->
        <section class="product-section" v-for="(cat, index) in categories" :key="index">
            <h2>{{ cat }}</h2>
            <div class="product-list">
                <div class="product-card" v-for="(item, idx) in products" :key="idx">
                <div class="product-img">🖼️</div>
                <h3>{{ item.name }}</h3>
                <p class="price">{{ item.price }}₫</p>
                <router-link :to="'/san-pham/' + item.name.toLowerCase().replace(/ /g,'-')" class="detail-btn">
                    Xem chi tiết
                </router-link>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="footer">
            <p>© 2025 Cửa Hàng Vật Liệu Xây Dựng - All Rights Reserved</p>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "HomePage",
        data() {
            return {
                categories: [
                    "Xi măng",
                    "Sắt thép",
                    "Gạch",
                    "Sơn",
                    "Thiết bị điện",
                ],
                products: [
                    { name: "Xi măng Holcim", price: "80.000" },
                    { name: "Thép Việt Nhật", price: "250.000" },
                    { name: "Gạch đỏ", price: "1.200" },
                    { name: "Sơn Jotun", price: "560.000" },
                    { name: "Dây điện Cadivi", price: "320.000" },
                ],
            };
        },
    };
</script>

<style scoped>
    /* Reset */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .homepage {
        font-family: Arial, sans-serif;
    }

    /* Navbar */
    .navbar {
        background: #8d99ae;
    }
    .navbar ul {
        list-style: none;
        display: flex;
        gap: 20px;
        padding: 10px 20px;
    }
    .navbar a {
        text-decoration: none;
        color: white;
        font-weight: bold;
    }
    .navbar a:hover {
        color: #ffd166;
    }

    /* Dropdown */
    .dropdown {
        position: relative;
        display: inline-block;
    }
    .dropbtn {
        background: #8d99ae;
        border: none;
        color: white;
        font-weight: bold;
        cursor: pointer;
    }
    .dropdown-content {
        display: none;
        position: absolute;
        background: white;
        min-width: 200px;
        box-shadow: 0px 4px 6px rgba(0,0,0,0.2);
        z-index: 1;
    }
    .dropdown-content a {
        display: block;
        padding: 10px;
        color: #333;
        text-decoration: none;
    }
    .dropdown-content a:hover {
        background: #f1f1f1;
    }
    .dropdown:hover .dropdown-content {
        display: block;
    }

    /* Banner */
    .banner {
        background: linear-gradient(to right, #bc77f0, #118ab2);
        color: white;
        text-align: center;
        padding: 50px 20px;
    }
    .banner h1 {
        font-size: 28px;
        margin-bottom: 10px;
    }
    .banner p {
        font-size: 18px;
    }

    /* Products */
    .product-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center; /* Căn giữa các card */
        gap: 20px; /* Khoảng cách giữa các card */
        margin-top: 20px;
    }

    .product-card {
        background: #f5f9ff;
        border-radius: 12px;
        box-shadow: 0px 4px 8px rgba(0,0,0,0.1);
        padding: 20px;
        width: 200px; /* Giảm kích thước card */
        text-align: center; /* Căn giữa nội dung trong card */
        transition: transform 0.2s ease;
    }

    .product-card:hover {
        transform: translateY(-5px);
    }

    .product-card img {
        width: 160px;  /* Ảnh nhỏ gọn lại */
        height: 160px;
        margin-bottom: 10px;
    }

    .product-card h3 {
        font-size: 18px;
        margin: 10px 0;
    }

    .product-card p {
        font-size: 16px;
        font-weight: bold;
        color: #e63946;
    }

    .product-card button {
        margin-top: 10px;
        padding: 8px 15px;
        background: #0077b6;
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        transition: background 0.3s ease;
    }

    .product-card button:hover {
        background: #023e8a;
    }


    /* Footer */
    .footer {
        background: #2b2d42;
        color: white;
        text-align: center;
        padding: 15px;
        margin-top: 30px;
    }
</style>
