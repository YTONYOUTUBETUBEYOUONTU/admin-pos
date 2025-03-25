import { defineComponent, watch, watchEffect } from 'vue';
import CustomInput from '@/modules/common/components/CustomInput.vue';
import CustomTextArea from '@/modules/common/components/CustomTextArea.vue';
import { useQuery } from '@tanstack/vue-query';
import { getProductById } from '@/modules/products/actions/get-product-by-id.action.js';
import { useRouter } from 'vue-router';
import { useFieldArray, useForm } from 'vee-validate';
import * as yup from 'yup';

const validationSchema = yup.object({
  title: yup.string().required('El título es requerido'),
  slug: yup.string().required('El slug es requerido'),
  description: yup.string().required('La descripción es requerida'),
  price: yup.number().required('El precio es requerido'),
  stock: yup.number().required('El stock es requerido').min(1),
  gender: yup.string().required('El genero es requerido').oneOf(['Hombre', ',Mujer', 'Unisex']),

});

export default defineComponent({

  components: {
    CustomInput,
    CustomTextArea,
  },

  props: {
    productId: {
      type: String,
      required: true,
    }
  },

  setup(props) {
    const router = useRouter();

    const {
      data: product,
      isLoading,
      isError,
      error,
    } = useQuery({
      queryKey: ['product', props.productId],
      queryFn: () => getProductById(props.productId),
      retry: false,
    });

    const { values, defineField, errors, handleSubmit, resetForm, meta } = useForm({
      validationSchema,
    });

    const [title, titleAttrs] = defineField('title');
    const [slug, slugAttrs] = defineField('slug');
    const [description, descriptionAttrs] = defineField('description');
    const [price, priceAttrs] = defineField('price');
    const [stock, stockAttrs] = defineField('stock');
    const [gender, genderAttrs] = defineField('gender');

    const { fields: sizes, remove: removeSize, push: pushSize } = useFieldArray<string>('sizes');
    const { fields: images } = useFieldArray<string>('images');

    const onSubmit = handleSubmit((values) => {
      console.log({ values });
    });

    const toogleSize = (size: srtring) => {
      const currentSizes = sizes.value.map((s) => s.value);
      const hasSize = currentSizes.includes(size);
      if (hasSize) {
        removeSize(currentSizes.indexOf(size));
      } else {
        pushSize(size);
      }
    };

    watchEffect(() => {
      if (isError.value && !isLoading.value) {
        console.error('Error al obtener el producto', error.value);
        router.replace('/admin/products');
        return;
      }
    });
    watch(product, () => {
      if (!product) return;
      resetForm({
        values: product.value
      });
    },
      {
        deep: true,
        immediate: true,
      });
  },

  return {
    //Props
    values,
    errors,
    meta,

    title,
    titleAttrs,
    slug,
    slugAttrs,
    description,
    descriptionAttrs,
    price,
    priceAttrs,
    stock,
    stockAttrs,
    gender,
    genderAttrs,
    sizes,
    images,

    //Getters
    allSize: ['XS', 'S', 'M', 'L', 'XL', 'XXL']

    //Actions
    onSubmit,
    toogleSize,
    resetForm,

    hasSize: (size: string) => {
      const currentSizes = sizes.value.map((s) => s.value);
      return currentSizes.includes(size);
    }
  }
});
