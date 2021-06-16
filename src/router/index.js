import Vue from "vue";
import VueRouter from "vue-router";
import AdminLayout from "../layout/AdminLayout.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "root",
        component: AdminLayout,
        children: [
            {
              path: "home",
              name: "홈",
              meta: {
                icon: "home"
              },
              component: () => import("@/views/Home/Dashboard.vue")
            },
            {
              path: "member",
              name: "회원관리",
              meta: {
                icon: "idcard"
              },
              component: () => import("@/views/Member/MemberManage.vue")
            },
            {
                path: "notic",
                name: "공지관리",
                meta: {
                  icon: "notification"
                },
                component: () => import("@/views/Notic/NoticManage.vue")
            }
    
        ]    
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
  });
  
  export default router;