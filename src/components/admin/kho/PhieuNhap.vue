<template>
  <div>
    <h2>Danh sách phiếu nhập kho</h2>
    <table border="1" cellpadding="5">
      <thead>
        <tr>
          <th>Mã phiếu</th>
          <th>Nhà cung cấp</th>
          <th>Giá trị</th>
          <th>Thời gian</th>
          <th>Trạng thái</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="phieu in phieuNhapList" :key="phieu.id">
          <td>{{ phieu.ma_phieu }}</td>
          <td>{{ phieu.nguon_xuat }}</td>
          <td>{{ phieu.gia_tri.toLocaleString() }} đ</td>
          <td>{{ phieu.thoi_gian }}</td>
          <td>{{ phieu.tinh_trang }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      phieuNhapList: []
    };
  },
  mounted() {
    this.getPhieuNhap();
  },
  methods: {
    async getPhieuNhap() {
      try {
        const res = await axios.get("http://localhost:8000/api/phieu-nhap"); // API backend Laravel
        this.phieuNhapList = res.data;
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    }
  }
};
</script>
