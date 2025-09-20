import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    {
        path : '/trang-chu',
        component: ()=>import('../components/admin/trang_chu/index.vue')
        
    },
    {
        path : '/admin/san_pham',
        component: ()=>import('../components/admin/san_pham/index.vue')
        
    },
    {
        path : '/admin/gio_hang',
        component: ()=>import('../components/admin/gio_hang/index.vue')
        
    },
    {
        path : '/admin/kho',
        component: ()=>import('../components/admin/kho/index.vue')

    },
    {
        path : '/admin/thanh_toan',
        component: ()=>import('../components/admin/thanh_toan/index.vue')

    },
    {
        path : '/admin/phieu_nhap',  
        component: () => import('../components/admin/kho/Phieunhapkho.vue')
    },
    {
        path : '/admin/phieu_xuat',  
        component: () => import('../components/admin/kho/Phieuxuatkho.vue')
    },
   
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router