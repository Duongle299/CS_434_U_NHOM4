<template>
  <div class="cart-container">
    <div class="cart-left">
      <h2>Đơn hàng của bạn</h2>

      <div v-for="(item, index) in cartItems" :key="index" class="cart-item">
        <img :src="item.image" alt="Ảnh sản phẩm" class="product-image" />

        <div class="item-info">
          <span class="product-name">{{ item.name }}</span>

          <input 
            type="number" 
            v-model.number="item.quantity" 
            min="1" 
            class="quantity-input"
          />

          <span class="product-price">{{ formatPrice(item.price) }}</span>

          <div class="quantity-buttons">
            <button @click="increaseQuantity(index)">+</button>
            <button @click="decreaseQuantity(index)">-</button>
          </div>

          <button class="remove-button" @click="removeItem(item.id)">Xóa</button>
        </div>
      </div>

      <div class="cart-total">
        <span>Tổng: </span>
        <span class="total-price">{{ formatPrice(totalPrice) }}</span>
      </div>

      <button class="order-button" @click="placeOrder">ĐẶT HÀNG</button>
    </div>

    <div class="cart-right">
      <h2>Thông tin sản phẩm</h2>

      <div v-if="selectedProduct" class="product-detail">
        <img :src="selectedProduct.image" alt="Ảnh sản phẩm" />
        <p><b>Tên sản phẩm:</b> {{ selectedProduct.name }}</p>
        <p><b>Nhà sản xuất:</b> {{ selectedProduct.manufacturer }}</p>
        <p><b>Kích thước:</b> {{ selectedProduct.size }}</p>
        <p><b>Giới thiệu:</b> {{ selectedProduct.description }}</p>
      </div>
      <p v-else>Chọn một sản phẩm để xem chi tiết</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      // Thay thế dữ liệu mẫu bằng một mảng rỗng để lưu trữ dữ liệu từ API
      cartItems: [], 
      selectedProduct: null
    };
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }
  },
  methods: {
    formatPrice(value) {
      return value.toLocaleString("vi-VN") + " VNĐ";
    },
    increaseQuantity(index) {
      this.cartItems[index].quantity++;
    },
    decreaseQuantity(index) {
      if (this.cartItems[index].quantity > 1) {
        this.cartItems[index].quantity--;
      }
    },
    placeOrder() {
      alert("Bạn đã đặt hàng thành công!");
    },
    // Phương thức để lấy dữ liệu giỏ hàng từ backend API
    fetchCartItems() {
      axios.get('http://localhost:3000/api/cart')
        .then(response => {
          this.cartItems = response.data;
        })
        .catch(error => {
          console.error("Lỗi khi tải giỏ hàng:", error);
        });
    },
    // Phương thức để xóa sản phẩm khỏi giỏ hàng
    removeItem(productId) {
      axios.delete(`http://localhost:3000/api/cart/${productId}`)
        .then(() => {
          this.fetchCartItems(); // Tải lại giỏ hàng sau khi xóa thành công
        })
        .catch(error => {
          console.error("Lỗi khi xóa sản phẩm:", error);
        });
    }
  },
  // Sử dụng 'mounted' hook để gọi API ngay khi component được tạo
  mounted() {
    this.fetchCartItems();
  }
};
</script>

<style>
.cart-container {
  display: flex;
  justify-content: space-between;
  padding: 30px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #fafafa;
  color: #333;
}

.cart-left, .cart-right {
  width: 48%;
  border: 1px solid #e0e0e0;
  padding: 25px 30px;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgb(0 0 0 / 0.05);
}

h2 {
  font-weight: 600;
  font-size: 1.8rem;
  color: #222;
  margin-bottom: 25px;
  border-bottom: 2px solid #4CAF50;
  padding-bottom: 8px;
}

.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.product-image {
  width: 75px;
  height: 75px;
  margin-right: 20px;
  border-radius: 6px;
  object-fit: cover;
  box-shadow: 0 2px 6px rgb(0 0 0 / 0.1);
}

.item-info {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
}

.product-name {
  font-size: 1.15rem;
  font-weight: 500;
  flex-basis: 40%;
  color: #444;
}

.quantity-input {
  width: 60px;
  padding: 6px 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  text-align: center;
  transition: border-color 0.3s;
}

.quantity-input:focus {
  border-color: #4CAF50;
  outline: none;
}

.product-price {
  font-size: 1.1rem;
  font-weight: 600;
  flex-basis: 20%;
  color: #2e7d32;
}

.quantity-buttons button {
  background-color: #4caf50;
  color: white;
  border: none;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  font-size: 1.2rem;
  line-height: 0;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.quantity-buttons button:hover {
  background-color: #388e3c;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.remove-button {
  background-color: #e53935;
  color: white;
  border: none;
  padding: 8px 14px;
  font-size: 13px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left: 12px;
  align-self: flex-start;
}

.remove-button:hover {
  background-color: #b71c1c;
  box-shadow: 0 0 10px rgba(183, 28, 28, 0.6);
}

.cart-total {
  font-weight: 700;
  font-size: 1.3rem;
  margin-top: 25px;
  text-align: right;
  color: #1b5e20;
}

.order-button {
  display: block;
  width: 100%;
  margin-top: 30px;
  padding: 12px 0;
  background: #4caf50;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 5px 15px #4caf50aa;
  transition: background-color 0.3s ease;
}

.order-button:hover {
  background-color: #388e3c;
  box-shadow: 0 8px 20px #388e3cbb;
}

.cart-right img {
  width: 100%;
  max-height: 250px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgb(0 0 0 / 0.1);
}

.product-detail p {
  font-size: 1rem;
  line-height: 1.5;
  color: #555;
  margin-bottom: 12px;
}

.product-detail b {
  color: #222;
}

</style>