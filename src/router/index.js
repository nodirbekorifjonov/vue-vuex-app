import {
  ArticleDetailView,
  CreateArticleView,
  HomeView,
  LoginView,
  RegisterView,
} from "@/views";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/article/:slug",
      name: "article-detail",
      component: ArticleDetailView,
    },
    {
      path: "/create-article",
      name: "create-article",
      component: CreateArticleView,
    },
  ],
});

export default router;
