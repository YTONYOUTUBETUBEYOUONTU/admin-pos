// src/router.ts

import { createRouter, createWebHistory } from 'vue-router'
import { authRoutes } from '@/modules/auth/routes' // Importa las rutas de autenticación
import ShopLayout from '@/modules/shop/layouts/ShopLayout.vue'
import { adminRoutes } from '@/modules/admin/routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'store',
      component: ShopLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/modules/shop/shop/HomeView.vue'),
        },
      ],
    },
    authRoutes, // Aquí agregas las rutas de autenticación
    adminRoutes
  ],
})

export default router
