import {
    createRouter,
    createWebHistory
} from "vue-router";

const routes = [{
    path: "/",
    name: "Index",
    component: () =>
        import( /* webpackChunkName: "about" */ "../views/Index.vue")
}, {
    path: "/about",
    name: "About",
    component: () =>
        import( /* webpackChunkName: "about" */ "../views/About.vue")
}, {
    path: "/thanks",
    name: "Thanks",
    component: () =>
        import( /* webpackChunkName: "about" */ "../views/Thanks.vue")
}];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;