<template>
  <div>
    <h2 class="title">Phiếu Xuất Kho</h2>

    <!-- Bộ lọc -->
    <div class="filter-box">
      <input v-model="filters.maLenh" placeholder="Mã lệnh" />
      <input v-model="filters.nguonNhan" placeholder="Nguồn nhận" />
      <select v-model="filters.tinhTrang">
        <option value="">Tình trạng</option>
        <option value="Chờ duyệt">Chờ duyệt</option>
        <option value="Đã duyệt">Đã duyệt</option>
        <option value="Từ chối">Từ chối</option>
      </select>
      <input type="date" v-model="filters.tuNgay" />
      <input type="date" v-model="filters.denNgay" />
      <button @click="timKiem">Tìm kiếm 🔍</button>
    </div>

    <!-- Nút tạo phiếu -->
    <div class="create-btn">
      <button @click="taoPhieu">+ Tạo lệnh xuất kho</button>
    </div>

    <!-- Bảng dữ liệu -->
    <table class="data-table">
      <thead>
        <tr>
          <th>STT</th>
          <th>Mã lệnh</th>
          <th>Nguồn nhận</th>
          <th>Giá trị</th>
          <th>Thời gian</th>
          <th>Tình trạng</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in data" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ row.maLenh }}</td>
          <td>{{ row.nguonNhan }}</td>
          <td>{{ row.giaTri }}</td>
          <td>{{ row.thoiGian }}</td>
          <td>
            <span :class="['status', getStatusClass(row.tinhTrang)]">
              {{ row.tinhTrang }}
            </span>
          </td>
          <td>
            <button class="edit-btn" @click="editRow(row)">✏️</button>
            <button class="delete-btn" @click="deleteRow(row)">🗑️</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Phieuxuatkho",
  data() {
    return {
      filters: {
        maLenh: "",
        nguonNhan: "",
        tinhTrang: "",
        tuNgay: "",
        denNgay: ""
      },
      data: [
        { maLenh: "PX001", nguonNhan: "Đại lý A", giaTri: "50.000.000", thoiGian: "13/11/2022 15:30", tinhTrang: "Chờ duyệt" },
        { maLenh: "PX002", nguonNhan: "Đại lý B", giaTri: "40.000.000", thoiGian: "13/11/2022 11:09", tinhTrang: "Đã duyệt" },
        { maLenh: "PX003", nguonNhan: "Đại lý C", giaTri: "30.000.000", thoiGian: "12/11/2022 14:30", tinhTrang: "Chờ duyệt" },
        { maLenh: "PX004", nguonNhan: "Đại lý A", giaTri: "20.000.000", thoiGian: "12/11/2022 12:30", tinhTrang: "Từ chối" }
      ]
    }
  },
  methods: {
    timKiem() { alert("Thực hiện tìm kiếm...") },
    taoPhieu() { alert("Tạo phiếu xuất kho mới!") },
    editRow(row) { alert("Sửa phiếu: " + row.maLenh) },
    deleteRow(row) { alert("Xóa phiếu: " + row.maLenh) },
    getStatusClass(status) {
      if (status === "Chờ duyệt") return "pending";
      if (status === "Đã duyệt") return "approved";
      if (status === "Từ chối") return "rejected";
      return "";
    }
  }
}
</script>

<style scoped>
.title {
  margin: 10px 0;
  font-size: 20px;
  font-weight: bold;
}

.filter-box {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

.filter-box input,
.filter-box select {
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.create-btn {
  margin-bottom: 10px;
}

.create-btn button {
  background: #0066ff;
  color: #fff;
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table th,
.data-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

.status {
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: bold;
  color: white;
}
.status.pending {
  background-color: orange;
}
.status.approved {
  background-color: green;
}
.status.rejected {
  background-color: red;
}

.edit-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  margin-right: 5px;
}

.delete-btn {
  background: transparent;
  border: none;
  cursor: pointer;
}
</style>
