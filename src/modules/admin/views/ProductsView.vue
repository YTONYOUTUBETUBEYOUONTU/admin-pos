<template>
  <div class="bg-white px-5 py-2 rounded">
    <h1 class="text-3xl" font-semibold text-gray-900>Productos</h1>
    <!-- component -->
    <div class="py-8 w-full">
      <div class="shadow overflow-hidden rounded border-b border-gray-200">
        <table class="min-w-full bg-white">
          <thead class="bg-gray-800 text-white">
            <tr>
              <th class="w-10 text-left py-3 px-4 uppercase font-semibold text-sm">Imagen</th>
              <th class="flex-1 text-left py-3 px-4 uppercase font-semibold text-sm">Título</th>
              <th class="w-28 py-3 px-4 uppercase font-semibold text-sm">Precio</th>
              <th class="w-60 py-3 px-4 uppercase font-semibold text-sm">Tallas</th>
            </tr>
          </thead>
          <tbody class="text-gray-700">
            <tr
              v-for="(product, index) in prodcuts"
              :key="product.id"
              class="{ 'bg-gray-100 hover:bg-gray-200': index % 2 === 0"
            >
              <!--Aquí vamos-->
              <td class="text-left py-3 px-4">
                <img :src="product.images[0]" :alt="product.title" class="h-10 w-10 object-cover" />
              </td>
              <td class="text-left py-3 px-4">
                <RouterLink
                  :to="`/admin/products/${product.id}`"
                  class="hover:text-blue-500 hover:underline"
                  >{{ product.title }}</RouterLink
                >
              </td>
              <td class="text-left py-3 px-4">
                <!--Si no funca quitar el font-medium del span de abajo-->
                <span class="bg-blue-200 text-blue-600 py-1 px-3 text-xs font-medium rounded-full">
                  ${{ product.price }}</span
                >
              </td>
              <td class="text-left py-3 px-4">
                {{ product.sizes.join(', ') }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <ButtonPagination :page="page" :has-more-data="!!prodcuts && prodcuts.length < 10" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQueryClient, useQuery } from '@tanstack/vue-query';
import { watchEffect } from 'vue';
import ButtonPagination from '@/modules/common/components/ButtonPagination.vue';
import { usePagination } from '@/modules/common/composables/UsePagination';
import { getProductsAction } from '@/modules/products/actions/get-products-action';

const queryClient = useQueryClient();
const { page } = usePagination();

const { data: prodcuts = [] } = useQuery({
  queryKey: ['prodcuts', { page: page }],
  queryFn: () => getProductsAction(page.value),
});

watchEffect(() => {
  queryClient.prefetchQuery({
    queryKey: ['prodcuts', { page: page.value + 1 }],
    queryFn: () => getProductsAction(page.value + 1),
  });
});
</script>
