import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue")
  },
  {
    path: "/movies",
    name: "Movies",
    component: () =>
      import(/* webpackChunkName: "movies" */ "../views/Movies.vue")
  },
  {
    path: "/movies/:id",
    name: "Movie",
    props: route => ({ imdbID: route.params.id }),
    component: () =>
      import(/* webpackChunkName: "movie" */ "../views/Movie.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
