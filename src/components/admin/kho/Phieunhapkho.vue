<template >
    <div>
         <h2 class="title">Phiếu nhập kho</h2>
    <div class="filter-box">
      <div class="filter-row">
        <label>Mã phiếu:</label>
        <input type="text" v-model="filters.maPhieu" />
        <label>Tình trạng:</label>
        <select v-model="filters.tinhTrang">
          <option value="">-- Chọn --</option>
          <option>Chờ duyệt</option>
          <option>Đã duyệt</option>
          <option>Từ chối</option>
        </select>
      </div>
      <div class="filter-row">
        <label>Nguồn xuất:</label>
        <input type="text" v-model="filters.nguonXuat" />
        <label>Từ ngày:</label>
        <input type="date" v-model="filters.tuNgay" />
        <label>Đến ngày:</label>
        <input type="date" v-model="filters.denNgay" />
        <button @click="timKiem">Tìm kiếm</button>
      </div>
    </div>
    <div class="create-btn">
      <button @click="taoPhieu">+ Tạo phiếu nhập kho</button>
    </div>
    <table class="data-table">
      <thead>
        <tr>
          <th>STT</th>
          <th>Mã phiếu</th>
          <th>Nguồn xuất</th>
          <th>Giá trị</th>
          <th>Thời gian</th>
          <th>Tình trạng</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in data" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ row.maPhieu }}</td>
          <td>{{ row.nguonXuat }}</td>
          <td>{{ row.giaTri }}</td>
          <td>{{ row.thoiGian }}</td>
          <td>{{ row.tinhTrang }}</td>
          <td>
            <button @click="editRow(row)">✏️</button>
            <button @click="deleteRow(row)">🗑️</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      filters: {
        maPhieu: "",
        tinhTrang: "",
        nguonXuat: "",
        tuNgay: "",
        denNgay: ""
      },
      data: [
        {
          maPhieu: "XXXX",
          nguonXuat: "Nhà cung cấp A",
          giaTri: "50.000.000",
          thoiGian: "01/09/2025 15:30",
          tinhTrang: "Chờ duyệt"
        },
        {
          maPhieu: "XXXX",
          nguonXuat: "Nhà cung cấp B",
          giaTri: "40.000.000",
          thoiGian: "03/09/2025 09:30",
          tinhTrang: "Đã duyệt"
        },
        {
          maPhieu: "XXXX",
          nguonXuat: "Nhà cung cấp C",
          giaTri: "50.000.000",
          thoiGian: "04/09/2025 08:30",
          tinhTrang: "Từ chối"
        }
      ]
    };
  },
  methods: {
    timKiem() {
      alert("Thực hiện tìm kiếm...");
    },
    taoPhieu() {
      alert("Tạo phiếu nhập kho mới!");
    },
    editRow(row) {
      alert("Sửa phiếu: " + row.maPhieu);
    },
    deleteRow(row) {
      alert("Xóa phiếu: " + row.maPhieu);
    }
  }
};
</script>
<style scoped>
.warehouse-page {
  padding: 20px;
  font-family: Arial, sans-serif;
}
.title {
  font-size: 20px;
  margin-bottom: 15px;
}
.filter-box {
  background: #eee;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 15px;
}
.filter-row {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.filter-row label {
  margin-right: 5px;
  min-width: 80px;
}
.filter-row input,
.filter-row select {
  margin-right: 15px;
  padding: 5px;
}
.create-btn {
  margin-bottom: 15px;
  text-align: right;
}
.create-btn button {
  background: #007bff;
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.data-table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
}
.data-table th,
.data-table td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: center;
}
.data-table th {
  background: #f8f8f8;
}
</style>