// src/main.ts

import './assets/main.css' // Estilos globales

import { createApp } from 'vue'
import { createPinia } from 'pinia' // Estado global con Pinia
import { VueQueryPlugin } from '@tanstack/vue-query' // Integración de Vue Query
import App from './App.vue' // Componente principal de la aplicación
import router from './router' // Configuración de Vue Router

import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

const app = createApp(App) // Crear la instancia de la aplicación Vue

// Usar los plugins
app.use(createPinia()) // Usar Pinia para gestión de estado
app.use(router) // Usar Vue Router para navegación
app.use(Toast);
app.use(VueQueryPlugin) // Usar Vue Query para manejo de datos asíncronos

// Montar la aplicación en el contenedor #app
app.mount('#app')
