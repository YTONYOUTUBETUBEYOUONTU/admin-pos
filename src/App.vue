<template>
  <FullScreenLoader v-if="useAuthStore.isChecking" />
  <RouterView v-else />
  <VueQueryDevtools />
</template>

<script setup>
import { VueQueryDevtools } from '@tanstack/vue-query-devtools';
import FullScreenLoader from './modules/common/components/FullScreenLoader.vue';
import { useAuthStore } from './modules/auth/stores/auth.store';
import { useRouter, useRoute } from 'vue-router';
import { AuthStatus } from './modules/auth/interfaces';

const authStore = useAuthStore();

const router = useRouter();
const route = useRoute();

authStore.$subscribe(
  (_, state) => {
    if (state.authStatus === AuthStatus.Checking) {
      authStore.checkAuthStatus();

      return;
    }
    if (route.path.includes('/auth') && state.authStatus === AuthStatus.Authenticated) {
      router.replace({ name: 'home' });
    }
  },
  {
    immediate: true,
  },
);
</script>
