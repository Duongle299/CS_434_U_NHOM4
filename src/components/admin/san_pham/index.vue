<template>
   <div class="row">
      <div class="col-lg-12">
         <div class="card">
            <div class="card-header">
               <div class="row">
                  <div class="col-lg-5">
                     <b>
                        <h4>Danh sách Vật tư</h4>
                     </b>
                  </div>
                  <div class="col-lg-7 text-right">
                     <button class="btn btn-primary" data-toggle="modal" data-target="#themmoi">Thêm mới</button>
                  </div>
               </div>
            </div>
            <div class="card-body">
               <table class="table table-bordered table-striped table-hover">
                  <thead>
                     <tr>
                        <th><b>STT</b></th>
                        <th><b>Tên vật tư</b></th>
                        <th><b>Hình ảnh</b></th>
                        <th><b>Loại vật tư</b></th>
                        <th><b>Đơn vị tính</b></th>
                        <th><b>Trọng lượng</b></th>
                        <th><b>Số lượng tồn kho</b></th>
                        <th><b>Giá bán</b></th>
                        <th><b>Tình trạng</b></th>
                        <th><b>Action</b></th>
                     </tr>
                  </thead>
                  <tbody>
                     <template v-for="(value, index) in list_vattu" :key="index">
                        <tr class="text-center align-middle text-nowrap">
                           <td>{{ index + 1 }}</td>
                           <td>{{ value.ten_vattu }}</td>
                           <td><img :src="value.hinh_anh" style="width: 100px; height: 80px;" alt=""></td>
                           <td>{{ value.loai_vattu }}</td>
                           <td>{{ value.don_vi_tinh }}</td>
                           <td>{{ value.trong_luong }}</td>
                           <td>{{ value.so_luong_tonkho }}</td>
                           <td>{{ value.gia_ban }}</td>
                           <td><span v-if="value.tinh_trang == '1'" class="badge bg-success ">Còn hàng</span>
                              <span v-else class="badge bg-danger ">Hết hàng</span>
                           </td>
                           <td>
                              <button class="btn btn-warning" data-toggle="modal" data-target="#capnhat">Cập nhật</button>
                              <button class="btn btn-danger ml-2" data-toggle="modal" data-target="#xoa">Xóa</button>
                           </td>
                        </tr>
                     </template>
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   </div>
   <div class="modal fade" id="themmoi" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
         <div class="modal-content">
            <div class="modal-header">
               <h5 class="modal-title" id="exampleModalLabel">Thêm mới Vật tư</h5>
               <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
               </button>
            </div>
            <div class="modal-body">
               <div class="row">
                  <div class="col-lg-6">
                     <label class="form-label" for="">Mã vật tư</label>
                     <input class="form-control" type="text" name="" id="">
                     <label class="form-label" for="">Loại vật tư</label>
                     <input class="form-control" type="text" name="" id="">
                     <label class="form-label" for="">Trọng lượng</label>
                     <input class="form-control" type="text" name="" id="">
                  </div>
                  <div class="col-lg-6">
                     <label class="form-label" for="">Tên vật tư</label>
                     <input class="form-control" type="text" name="" id="">
                     <label class="form-label" for="">Đơn vị tính</label>
                     <input class="form-control" type="text" name="" id="">
                     <label class="form-label" for="">Số lượng tồn kho</label>
                     <input class="form-control" type="text" name="" id="">
                  </div>
                  <div class="col-lg-12">
                     <label class="form-label" for="">Hình ảnh</label>
                     <input class="form-control" type="text" name="" id="">
                  </div>
                  <div class="col-lg-6">
                     <label class="form-label" for="">Giá bán</label>
                     <input class="form-control" type="text" name="" id="">
                  </div>
                  <div class="col-lg-6">
                     <label class="form-label" for="">Tình trạng</label>
                     <select class="form-control" name="" id="">
                        <option value="1">Còn hàng</option>
                        <option value="0">Hết hàng</option>
                     </select>
                  </div>
               </div>
            </div>
            <div class="modal-footer">
               <button type="button" class="btn btn-primary" data-dismiss="modal">Thêm mới</button>
            </div>
         </div>
      </div>
   </div>
   <div class="modal fade" id="capnhat" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
         <div class="modal-content">
            <div class="modal-header">
               <h5 class="modal-title" id="exampleModalLabel">Cập nhật Vật tư</h5>
               <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
               </button>
            </div>
            <div class="modal-body">
               <div class="row">
                  <div class="col-lg-6">
                     <label class="form-label" for="">Mã vật tư</label>
                     <input class="form-control" type="text" name="" id="">
                     <label class="form-label" for="">Loại vật tư</label>
                     <input class="form-control" type="text" name="" id="">
                     <label class="form-label" for="">Trọng lượng</label>
                     <input class="form-control" type="text" name="" id="">
                  </div>
                  <div class="col-lg-6">
                     <label class="form-label" for="">Tên vật tư</label>
                     <input class="form-control" type="text" name="" id="">
                     <label class="form-label" for="">Đơn vị tính</label>
                     <input class="form-control" type="text" name="" id="">
                     <label class="form-label" for="">Số lượng tồn kho</label>
                     <input class="form-control" type="text" name="" id="">
                  </div>
                  <div class="col-lg-12">
                     <label class="form-label" for="">Hình ảnh</label>
                     <input class="form-control" type="text" name="" id="">
                  </div>
                  <div class="col-lg-6">
                     <label class="form-label" for="">Giá bán</label>
                     <input class="form-control" type="text" name="" id="">
                  </div>
                  <div class="col-lg-6">
                     <label class="form-label" for="">Tình trạng</label>
                     <select class="form-control" name="" id="">
                        <option value="1">Còn hàng</option>
                        <option value="0">Hết hàng</option>
                     </select>
                  </div>
               </div>
            </div>
            <div class="modal-footer">
               <button type="button" class="btn btn-primary" data-dismiss="modal">Xác nhận</button>
            </div>
         </div>
      </div>
   </div>
   <div class="modal fade" id="xoa" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
         <div class="modal-content">
            <div class="modal-header">
               <h5 class="modal-title" id="exampleModalLabel">Xóa Vật tư</h5>
               <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
               </button>
            </div>
            <div class="modal-body">
               <div class="alert alert-danger" role="alert">
                 <i class="fa-solid fa-triangle-exclamation mt-1 mr-2"></i>  Bạn có chắc chắn muốn xóa vật tư này không?
               </div>
            </div>
            <div class="modal-footer">
               <button type="button" class="btn btn-primary" data-dismiss="modal">Xác nhận</button>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
export default {
   data() {
      return {
         list_vattu: [
            {
               ten_vattu: "Xi Măng PCB 40",
               hinh_anh: "https://tse3.mm.bing.net/th/id/OIP.E0Kyyj5DWtIWD03HtVh9BgHaG-?pid=Api&P=0&h=220",
               loai_vattu: "Vật liệu xây dựng",
               don_vi_tinh: "Bao",
               trong_luong: "50kg",
               so_luong_tonkho: 12000,
               gia_ban: "78.000đ",
               tinh_trang: "1" // 1: con hang, 0: het hang
            },
            {
               ten_vattu: "Ống PVC 27",
               hinh_anh: "https://nhuadekko.com/wp-content/uploads/2020/10/ong-nhua-pvc-dekko-he-inch.jpg",
               loai_vattu: "Vật liệu Điện nước",
               don_vi_tinh: "Mét",
               trong_luong: "0.35kg/m",
               so_luong_tonkho: "120 mét",
               gia_ban: "15.000đ/m",
               tinh_trang: "0" // 1: con hang, 0: het hang
            },
         ]
      }
   },

}
</script>
<style></style>