<template>
  <div>
    <PhieuNhapKho />
    <PhieuXuatKho />
  </div>
</template>

<script>
import PhieuNhapKho from './Phieunhapkho.vue';
import PhieuXuatKho from './Phieuxuatkho.vue';

export default {
  components: {
    PhieuNhapKho,
    PhieuXuatKho
  }
}
</script>
