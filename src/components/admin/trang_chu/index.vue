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
                :to="'/danh-muc/' + cat.toLowerCase().replace(/ /g,'-')"
              >
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
    <section class="banner" :style="{ backgroundImage: `url(${bannerImage})` }">
      <h1>Chào mừng đến với cửa hàng vật liệu xây dựng</h1>
      <p>Uy tín - Chất lượng - Giá tốt</p>
    </section>

    <!-- Danh mục sản phẩm -->
    <section
      class="product-section"
      v-for="(cat, index) in categories"
      :key="index"
    >
      <h2>{{ cat }}</h2>
      <div class="product-list">
        <div
          class="product-card"
          v-for="(item, idx) in productsByCategory[cat]"
          :key="idx"
        >
          <div class="product-img">
            <img :src="item.image" :alt="item.name" />
          </div>
          <h3>{{ item.name }}</h3>
          <p class="price">{{ item.price }}₫</p>
          <button class="detail-btn" @click="showDetail(item)">Xem chi tiết</button>
        </div>
      </div>
    </section>

    <!-- Modal Popup chi tiết sản phẩm -->
    <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <button class="close-btn" @click="closeModal">X</button>
        <img :src="selectedProduct.image" :alt="selectedProduct.name" />
        <h3>{{ selectedProduct.name }}</h3>
        <p><b>Giá:</b> {{ selectedProduct.price }}₫</p>
        <p><b>Danh mục:</b> {{ selectedProduct.category }}</p>
        <p v-if="selectedProduct.description"><b>Mô tả:</b> {{ selectedProduct.description }}</p>
      </div>
    </div>

    <!-- Footer -->
    <footer class="footer">
      <p>© 2025 Cửa Hàng Vật Liệu Xây Dựng - All Rights Reserved</p>
    </footer>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HomePage",
  data() {
    return {
      categories: [],
      productsByCategory: {},
      bannerImage:
        "https://via.placeholder.com/1200x300?text=Banner+Chua+Co+Anh",
      selectedProduct: null,
      showModal: false,
    };
  },
  methods: {
    showDetail(product) {
      this.selectedProduct = product;
      this.showModal = true;
    },
    closeModal() {
      this.selectedProduct = null;
      this.showModal = false;
    },
  },
  async mounted() {
    try {
      const response = await axios.get("http://localhost:8000/api/homepage-data");
      this.categories = response.data.categories;
      this.productsByCategory = response.data.productsByCategory;
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu API:", error);
    }
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap");

/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.homepage {
  font-family: "Poppins", sans-serif;
  background-color: #f4f7fa;
  color: #2f3e4d;
  padding-bottom: 50px;
}

/* Navbar */
.navbar {
  background: #3a5068;
  border-radius: 10px;
  margin: 20px 40px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.1);
}
.navbar ul {
  list-style: none;
  display: flex;
  gap: 25px;
  padding: 15px 30px;
  align-items: center;
}
.navbar a,
.dropbtn {
  color: #f7f8f8;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: color 0.25s ease;
}
.navbar a:hover,
.dropdown:hover .dropbtn {
  color: #ffd166;
}
.dropdown {
  position: relative;
  display: inline-block;
}
.dropbtn {
  background: #3a5068;
  border: none;
  padding: 8px 14px;
  border-radius: 6px;
}
.dropdown-content {
  display: none;
  position: absolute;
  background: white;
  min-width: 200px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  z-index: 100;
}
.dropdown-content a {
  display: block;
  padding: 10px 15px;
  color: #3a5068;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  border-radius: 6px;
  transition: background-color 0.3s ease;
}
.dropdown-content a:hover {
  background: #e8f1f7;
}
.dropdown:hover .dropdown-content {
  display: block;
}

/* Banner */
.banner {
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 65px 20px;
  margin: 30px 40px;
  border-radius: 14px;
  box-shadow: 0 8px 20px rgb(0 0 0 / 0.15);
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    url("https://via.placeholder.com/1200x300?text=Banner+Chua+Co+Anh");
}
.banner h1 {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 12px;
  letter-spacing: 1px;
}
.banner p {
  font-size: 20px;
  font-weight: 500;
}

/* Products */
.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 22px;
  margin-top: 25px;
}
.product-card {
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.07);
  padding: 22px 18px;
  width: 215px;
  text-align: center;
  transition: transform 0.3s ease;
  cursor: pointer;
}
.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.12);
}
.product-card img {
  width: 160px;
  height: 160px;
  margin-bottom: 15px;
  object-fit: contain;
  border-radius: 10px;
}
.product-card h3 {
  font-size: 20px;
  margin: 14px 0 10px;
  font-weight: 700;
  color: #2f3e4d;
}
.product-card p.price {
  font-size: 17px;
  font-weight: 700;
  color: #d62828;
  margin-bottom: 16px;
}
.detail-btn {
  display: inline-block;
  padding: 9px 22px;
  font-weight: 600;
  font-size: 1rem;
  color: white;
  background-color: #0077b6;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.detail-btn:hover {
  background-color: #023e8a;
}

/* Modal style */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.55);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
.modal-content {
  background: #fff;
  padding: 35px 30px 40px;
  border-radius: 15px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.25);
  max-width: 600px;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
}
.close-btn {
  position: absolute;
  top: 12px;
  right: 15px;
  background: #e74c3c;
  border: none;
  color: white;
  font-size: 18px;
  padding: 7px 14px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
}
.close-btn:hover {
  background: #c0392b;
}
.modal-content img {
  width: 100%;
  max-height: 300px;
  object-fit: contain;
  border-radius: 10px;
  margin-bottom: 20px;
}
.modal-content h3 {
  font-size: 26px;
  margin-bottom: 18px;
  color: #2f3e4d;
}
.modal-content p {
  font-size: 18px;
  color: #34495e;
  margin-bottom: 14px;
}

/* Footer */
.footer {
  background: #2b2d42;
  color: white;
  text-align: center;
  padding: 18px 30px;
  margin-top: 40px;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.8px;
  user-select: none;
}
</style>
