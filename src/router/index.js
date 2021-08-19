import Vue from "vue";
import VueRouter from "vue-router";
import Resume from "@/pages/creative";

Vue.use(VueRouter);

const routes = [
  {
    path: "/:language",
    name: "resume",
    component: Resume,
  },
  {
    path: "*",
    redirect: "/cn",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path === "/cn" || to.path === "/en") {
    next();
  } else {
    next({
      path: "/cn",
    });
  }
});

export default router;
