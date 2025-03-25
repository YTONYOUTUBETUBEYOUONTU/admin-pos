import { tesloApi } from "@/api/tesloApi";
import type { Product } from "../interfaces/product.interface";
import { getProductImageAction } from './get-product-image.action';

export const getProductById = async (productId: string) => {
  try {
    const { data } = await tesloApi.get<Product>(`/products/${productId}`);
    console.log(data);
    return {
      ...data,
      images: data.images.map(getProductImageAction),
    }
  } catch (error) {
    console.log(error);
    throw new Error(`Error al obtener el producto con Id ${productId}`);
  }
}
