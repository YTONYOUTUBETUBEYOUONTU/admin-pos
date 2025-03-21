<template>
  <!-- Header Navbar -->
  <nav class="fixed top-0 left-0 z-20 w-full border-b border-gray-200 bg-white py-2.5 px-6 sm:px-4">
    <div class="container mx-auto flex max-w-6xl flex-wrap items-center justify-between">
      <a href="#" class="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="mr-3 h-6 text-blue-500 sm:h-9"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5
                   l9 5.25M3 7.5v9l9 5.25m0-9v9"
          />
        </svg>
        <span class="self-center whitespace-nowrap text-xl font-semibold"> Termcode </span>
      </a>
      <div class="mt-2 sm:mt-0 sm:flex md:order-2">
        <template v-if="!authStore.isAuthenticated">
          <!-- Login Button -->
          <RouterLink
            to="/auth/login"
            class="mr-3 hidden border border-blue-700 py-1.5 px-6 text-center text-sm font-medium text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 md:inline-block rounded-lg"
          >
            Ingresar
          </RouterLink>
        </template>

        <!-- Register Button -->
        <template v-if="!authStore.isAuthenticated">
          <RouterLink
            to="/auth/register"
            class="mr-3 hidden border border-blue-700 py-1.5 px-6 text-center text-sm font-medium text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 md:inline-block rounded-lg"
          >
            Registrarse
          </RouterLink>
        </template>

        <template v-if="authStore.isAuthenticated">
          <!-- Admin Button -->
          <RouterLink
            v-if="authStore.isAdmin"
            to="/admin"
            class="mr-3 hidden border border-blue-700 py-1.5 px-6 text-center text-sm font-medium text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 md:inline-block rounded-lg"
          >
            Admin
          </RouterLink>
          <button
            @click="logout"
            class="mr-3 hidden border border-blue-700 py-1.5 px-6 text-center text-sm font-medium text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 md:inline-block rounded-lg"
          >
            Logout
          </button>
        </template>

        <!-- Mobile Menu Button -->
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          class="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="h-6 w-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110
                     2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1
                     0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1
                     0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/modules/auth/stores/auth.store';

const authStore = useAuthStore();

const logout = () => {
  authStore.logout(); // Asegúrate de que logout existe en tu store de Pinia.
};
</script>

<style scoped>
/* Puedes agregar estilos específicos del header aquí si lo deseas */
</style>
