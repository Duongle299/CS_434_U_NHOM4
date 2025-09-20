<template>
  <div>
    <div class="row mt-5">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <h2 class="title">Phiếu nhập kho</h2>
            <div class="filter-box">
              <div class="row">
                <div class="col-lg-5">
                  <label>Mã phiếu:</label>
                  <input
                    class="form-control"
                    type="text"
                    v-model="filters.maPhieu"
                  />
                </div>
                <div class="col-lg-2">
                  <label>Tình trạng:</label>
                  <select class="form-control" v-model="filters.tinhTrang">
                    <option value="">-- Chọn --</option>
                    <option>Chờ duyệt</option>
                    <option>Đã duyệt</option>
                    <option>Từ chối</option>
                  </select>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-3">
                  <label>Nguồn xuất:</label>
                  <input class="form-control" type="text" v-model="filters.nguonXuat" />
                </div>
                <div class="col-lg-3">
                  <label>Từ ngày:</label>
                  <input class="form-control" type="date" v-model="filters.tuNgay" />
                </div>
                <div class="col-lg-3">
                  <label>Đến ngày:</label>
                  <input class="form-control" type="date" v-model="filters.denNgay" />
                </div>
                <div class="col-lg-3 mt-5">
                  <button class="btn btn-primary" @click="timKiem">
                    Tìm kiếm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
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
          <td :class="['status', getStatusClass(row.tinhTrang)]">
            {{ row.tinhTrang }}
          </td>
          <td>
            <button class="btn btn-primary" @click="editRow(row)">✏️</button>
            <button class="btn btn-danger" @click="deleteRow(row)">🗑️</button>
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
        denNgay: "",
      },
      data: [
        {
          maPhieu: "PNK001",
          nguonXuat: "Nhà cung cấp A",
          giaTri: "50.000.000",
          thoiGian: "01/09/2025 15:30",
          tinhTrang: "Chờ duyệt",
        },
        {
          maPhieu: "PNK002",
          nguonXuat: "Nhà cung cấp B",
          giaTri: "40.000.000",
          thoiGian: "03/09/2025 09:30",
          tinhTrang: "Đã duyệt",
        },
        {
          maPhieu: "PNK003",
          nguonXuat: "Nhà cung cấp C",
          giaTri: "50.000.000",
          thoiGian: "04/09/2025 08:30",
          tinhTrang: "Từ chối",
        },
      ],
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
    },
    getStatusClass(status) {
      if (status === "Chờ duyệt") return "pending";
      if (status === "Đã duyệt") return "approved";
      if (status === "Từ chối") return "rejected"; // ✅ sửa lỗi đỏ
      return "";
    },
  },
};
</script>

<style scoped>
.warehouse-page {
  padding: 20px;
  font-family: Arial, sans-serif;
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
  border: 1px solid #ddd; 
  padding: 8px;
  text-align: center;
}
.data-table th {
  background: #f8f8f8;
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
.status {
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: bold;
  color: #fff;
}
</style>
