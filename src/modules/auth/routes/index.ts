// src/modules/auth/routes.ts

import type { RouteRecordRaw } from 'vue-router'

export const authRoutes: RouteRecordRaw = {
  path: '/auth',
  name: 'auth',
  component: () => import('@/modules/auth/layouts/AuthLayout.vue'), // Layout general para las páginas de auth
  children: [
    {
      path: 'login',
      name: 'login',
      component: () => import('@/modules/auth/views/LoginPage.vue'),
    },
    {
      path: 'register',
      name: 'register',
      component: () => import('@/modules/auth/views/RegisterPage.vue'),
    },
  ],
}
