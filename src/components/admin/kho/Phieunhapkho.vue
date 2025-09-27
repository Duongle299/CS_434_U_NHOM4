<template>
  <div>
    <!-- Filter box -->
    <div class="row mt-5">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <h2 class="title">Phiếu nhập kho</h2>
            <div class="filter-box">
              <div class="row">
                <div class="col-lg-5">
                  <label>Mã phiếu:</label>
                  <input class="form-control" type="text" v-model="filters.maPhieu" />
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
              <div class="row mt-3">
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
                <div class="col-lg-3 mt-4">
                  <button class="btn btn-primary" @click="timKiem">Tìm kiếm</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Button tạo phiếu -->
    <div class="text-right mt-3">
      <button class="btn btn-primary" data-toggle="modal" data-target="#themmoi">+ Tạo phiếu nhập kho</button>
    </div>

    <!-- Table hiển thị dữ liệu -->
    <table class="data-table mt-3">
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
          <td :class="['status', getStatusClass(row.tinhTrang)]">{{ row.tinhTrang }}</td>
          <td>
            <button class="btn btn-primary" @click="editRow(row)">✏️</button>
            <button class="btn btn-danger" @click="deleteRow(row)">🗑️</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal tạo phiếu -->
    <div class="modal fade" id="themmoi" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Thêm mới Vật tư</h5>
            <button type="button" class="close" data-dismiss="modal">
              <span>&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-lg-6">
                <label>Mã phiếu</label>
                <input class="form-control" type="text" v-model="newPhieu.maPhieu">

                <label>Nguồn xuất</label>
                <input class="form-control" type="text" v-model="newPhieu.nguonXuat">
              </div>

              <div class="col-lg-6">
                <label>Từ ngày</label>
                <input class="form-control" type="date" v-model="newPhieu.tuNgay">

                <label>Đến ngày</label>
                <input class="form-control" type="date" v-model="newPhieu.denNgay">
              </div>

              <div class="col-lg-12 mt-3">
                <label>Tình trạng</label>
                <select class="form-control" v-model="newPhieu.tinhTrang">
                  <option value="2">Đang chờ</option>
                  <option value="1">Đã duyệt</option>
                  <option value="0">Từ chối</option>
                </select>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" v-on:click="taoPhieu">Thêm mới</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      filters: { maPhieu: "", tinhTrang: "", nguonXuat: "", tuNgay: "", denNgay: "" },
      data: [],
      newPhieu: { maPhieu: "", nguonXuat: "", tuNgay: "", denNgay: "", tinhTrang: "2" }
    };
  },
  mounted() {
    this.laydata();
  },
  methods: {
    laydata() {
      axios.get('http://127.0.0.1:8000/admin/lay-data-phieunhapkho')
        .then(res => this.data = res.data.data);
    },

    timKiem() {
      alert("Thực hiện tìm kiếm...");
    },

    taoPhieu() {
      axios.post('http://127.0.0.1:8000/admin/them-phieu-nhap', this.newPhieu)
        .then(res => {
          alert("Thêm phiếu thành công!");
          this.laydata(); // reload table
          this.newPhieu = { maPhieu: "", nguonXuat: "", tuNgay: "", denNgay: "", tinhTrang: "2" }; // reset form
          $('#themmoi').modal('hide'); // đóng modal
        })
        .catch(err => {
          alert("Lỗi: " + (err.response?.data?.message || err.message));
        });
    },

    editRow(row) { alert("Sửa phiếu: " + row.maPhieu); },
    deleteRow(row) { alert("Xóa phiếu: " + row.maPhieu); },

    getStatusClass(status) {
      if (status === "Chờ duyệt") return "pending";
      if (status === "Đã duyệt") return "approved";
      if (status === "Từ chối") return "rejected";
      return "";
    }
  }
};
</script>

<style scoped>
.data-table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  margin-top: 20px;
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
.status {
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: bold;
  color: #fff;
}
.status.pending { background-color: orange; }
.status.approved { background-color: green; }
.status.rejected { background-color: red; }
.btn-primary { cursor: pointer; }
</style>
