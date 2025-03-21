<template>
  <h1 class="text-2xl font-semibold mb-4">Login</h1>
  <form @submit.prevent="onLogin">
    <!-- Username Input -->
    <div class="mb-4">
      <label for="email" class="block text-gray-600">Email</label>
      <input
        ref="emailInputRef"
        v-model="myForm.email"
        type="text"
        id="email"
        name="email"
        class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        autocomplete="off"
      />
    </div>
    <!-- Password Input -->
    <div class="mb-4">
      <label for="password" class="block text-gray-600">Password</label>
      <input
        ref="passwordInputRef"
        v-model="myForm.password"
        type="password"
        id="password"
        name="password"
        class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        autocomplete="off"
      />
    </div>
    <!-- Remember Me Checkbox -->
    <div class="mb-4 flex items-center">
      <input
        ref="rememberMeInputRef"
        v-model="myForm.rememberMe"
        type="checkbox"
        id="remember"
        name="remember"
        class="text-blue-500"
      />
      <label for="remember" class="text-gray-600 ml-2">Remember user</label>
    </div>
    <!-- Forgot Password Link -->
    <div class="mb-6 text-blue-500">
      <a href="#" class="hover:underline">Forgot Password?</a>
    </div>
    <!-- Login Button -->
    <button
      type="submit"
      class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
    >
      Login
    </button>
  </form>
  <!-- Sign up  Link -->
  <div class="mt-6 text-blue-500 text-center">
    <RouterLink :to="{ name: 'register' }" class="hover:underline">Sign up</RouterLink>
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '../stores/auth.store';
import { useToast } from 'vue-toastification';
import { ref, reactive, watchEffect } from 'vue';

const authStore = useAuthStore();
const toast = useToast();

const emailInputRef = ref<HTMLInputElement | null>(null);
const passwordInputRef = ref<HTMLInputElement | null>(null);

const myForm = reactive({
  email: '',
  password: '',
  rememberMe: false,
});

const onLogin = async () => {
  console.log('Se está ejecutando la función onLogin');
  if (myForm.email === '') {
    console.log('El email es requerido');
    toast.error('El email es requerido');
    return emailInputRef.value?.focus();
  }
  if (myForm.password === '') {
    console.log('El password es requerido');
    toast.error('El password es requerido');
    return passwordInputRef.value?.focus();
  }
  if (myForm.rememberMe) {
    console.log('Se está recordando el email');
    localStorage.setItem('email', myForm.email);
  } else {
    console.log('No se está recordando el email');
    localStorage.removeItem('email');
  }
  const response = await authStore.login(myForm.email, myForm.password);
  console.log('Se obtuvo la respuesta del servidor');
  if (response) {
    console.log('El login fue exitoso');
    console.log('Se está mostrando el toast de éxito');
    toast.success('Login successful');
  } else {
    console.log('El login no fue exitoso');
    toast.error('Usuario o contraseña incorrectos');
  }
};

watchEffect(() => {
  const email = localStorage.getItem('email');
  if (email) {
    myForm.email = email;
    myForm.rememberMe = true;
  }
});
</script>
