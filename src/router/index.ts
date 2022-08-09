import GameDetailsVue from "@/views/GameDetails.vue";
import { createRouter, createWebHistory, useRoute } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  { path: "/", redirect: "/Home" },
  {
    path: "/Home",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/:genre",
    name: "genre.show",
    component: () => import("@/views/ShowGenre.vue"),
    props: (route: { params: { genre: any } }) => ({
      ...route.params,
      genre: route.params.genre,
    }),
  },
  {
    path: "/:genre/:id/:title",
    name: "game.details",
    component: () => import("@/views/GameDetails.vue"),
    props: (route: {
      params: {
        genre: string;
        id: string;
      };
    }) => ({
      ...route.params,
      id: parseInt(route.params.id as string),
      genre: route.params.genre,
    }),
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (About.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import('../views/AboutView.vue')
  // }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
