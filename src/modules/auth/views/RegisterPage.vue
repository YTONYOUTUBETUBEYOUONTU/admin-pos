<template>
  <h1 class="text-2xl font-semibold mb-4">UsuarioNuevo</h1>
  <form @submit.prevent="onRegister">
    <!-- Username Input -->
    <div class="mb-4">
      <label for="name" class="block text-gray-600">Name</label>
      <input
        v-model="myForm.fullName"
        ref="fullNameInputRef"
        type="text"
        id="name"
        name="name"
        class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        autocomplete="off"
      />
    </div>

    <!-- Username Input -->
    <div class="mb-4">
      <label for="email" class="block text-gray-600">Correo</label>
      <input
        v-model="myForm.email"
        ref="emailInputRef"
        type="email"
        id="email"
        name="email"
        class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        autocomplete="off"
      />
    </div>
    <!-- Password Input -->
    <div class="mb-4">
      <label for="password" class="block text-gray-600">Contraseña</label>
      <input
        v-model="myForm.password"
        ref="passwordInputRed"
        type="password"
        id="password"
        name="password"
        class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        autocomplete="off"
      />
    </div>
    <!-- Forgot Password Link -->
    <!-- <div class="mb-6 text-blue-500">
      <a href="#" class="hover:underline">Olvidaste la contraseña?🤣🤣🤣</a>
    </div> -->
    <!-- Register Button -->
    <button
      type="submit"
      class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
    >
      Registrarse
    </button>
  </form>
  <!-- Sign up  Link -->
  <div class="mt-6 text-blue-500 text-center">
    <RouterLink :to="{ name: 'login' }" class="hover:underline">Ingresar desde aqui</RouterLink>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useAuthStore } from '../stores/auth.store';
import { useToast } from 'vue-toastification';

const authStore = useAuthStore();
const toast = useToast();

const fullNameInputRef = ref<HTMLInputElement | null>(null);
const emailInput = ref<HTMLInputElement | null>(null);
const passwordInput = ref<HTMLInputElement | null>(null);

const myForm = reactive({
  fullName: '',
  email: '',
  password: '',
});

const onRegister = async () => {
  if (myForm.fullName.length < 3) {
    toast.error('El nombre debe contener al menos tres caracteres');
    return emailInput.value?.focus();
  }
  if (myForm.email === '') {
    toast.error('Falta email');
    return emailInput.value?.focus();
  }
  if (myForm.password.length < 6) {
    toast.error('La contraseña requiere un minimo de 6 caracteres');
    return passwordInput.value?.focus();
  }
  const { ok, message } = await authStore.register(myForm.fullName, myForm.email, myForm.password);
  if (ok) {
    toast.success('Registro exitoso');
    return;
  } else {
    console.log(message);
    toast.error('Error al registrarse' + message);
  }
};
</script>
