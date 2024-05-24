<template>
  <breadcrumb></breadcrumb>
  <Content>
    <Form class="flex flex-col">
      <div class="flex w-full">
        <div class="input-container">
          <label class="my-[10px]">Tên sản phẩm</label>
          <InputText
            placeholder="Tên sản phẩm"
            name="Product name"
            :classCustom="'xl:h-[44px] h-[40px] xl:w-[230px]'"
            v-model="infoProduct.name"
            rules="required"
          />
        </div>
        <div class="input-container">
          <label class="my-[10px]">Giá sản phẩm</label>
          <InputText
            placeholder="Giá sản phẩm"
            name="Product price"
            :classCustom="'xl:h-[44px] h-[40px] xl:w-[230px]'"
            v-model="infoProduct.price"
            rules="required"
          />
        </div>
      </div>
      <div class="flex w-full">
        <div class="input-container">
          <label class="lg:my-[10px] my-[6px] lg:text-base text-xs">Loại của sản phẩm</label>
          <div class="custom-select">
            <VueMultiselect
              v-model="selectedCategories"
              :options="items"
              :multiple="true"
              :close-on-select="false"
              :clear-on-select="false"
              :preserve-search="true"
              placeholder="Chọn loại sản phẩm"
              label="name"
              track-by="id"
              :preselect-first="false"
              @input="updateSelectedCategories"
              :classCustom="'lg:h-[44px] md:h-[40px] h-[30px] lg:w-[430px] w-[300px]'"
            />
          </div>
        </div>
        <div class="input-container">
          <label class="my-[10px]">Xuất xứ sản phẩm</label>
          <InputText
            placeholder="Xuất xứ sản phẩm"
            name="Product origin"
            :classCustom="'xl:h-[44px] h-[40px] xl:w-[430px] w-[300px]'"
            v-model="infoProduct.origin"
            rules="required"
          />
        </div>
      </div>
      <div class="input-container">
        <label class="my-[10px]">Mô tả sản phẩm</label>
        <InputText
          placeholder="Mô tả sản phẩm"
          name="Product description"
          :classCustom="'h-[40px] w-4/5'"
          v-model="infoProduct.description"
          rules="required"
        />
      </div>
      <div class="input-container">
        <label class="my-[10px]">Upload hình ảnh</label>
        <UploadImage />
      </div>
    </Form>
  </Content>
  <div class="flex items-center justify-center mt-4">
    <BaseButton
      type="submit"
      title="SAVE"
      :width="'w-16 text-[16px]'"
      :height="'h-9'"
      :classStyle="'border rounded-xl justify-center'"
      @onClick="onChangeValue"
    />
  </div>
</template>

<script setup>
import Breadcrumb from '@/components/layout/Breadcrumb.vue';
import { breadcrumbsStore } from '@/stores/breadcrumb';
import { productStore } from '@/stores/product';
import { imageStore } from '@/stores/image';
import Content from '@/components/elements/Content.vue';
import InputText from '@/components/elements/InputText.vue';
import BaseButton from '@/components/elements/BaseButton.vue';
import { ref } from 'vue';
import { Form, defineRule, configure } from 'vee-validate';
import { required } from '@vee-validate/rules';
import { useI18n } from 'vue-i18n';
import { localize } from '@vee-validate/i18n';
import { useRouter, useRoute } from 'vue-router';
import UploadImage from '@/components/elements/UploadImage.vue';
import { useCategoryStore } from '@/stores/category';
import VueMultiselect from 'vue-multiselect';

const route = useRoute();
const router = useRouter();
const title = 'Cập nhật thông tin sản phẩm';
const listBreadcrumb = [
  { title: 'Home', src: '/' },
  { title: 'Product', src: '/product' },
  { title: 'Update-Product', src: `/product/update-product/${route.params.product_id}` },
];
const breadcrumb = breadcrumbsStore();
breadcrumb.setBreadcrumb(title, listBreadcrumb);

const { t } = useI18n();
defineRule('required', required);
configure({
  generateMessage: localize('en', {
    messages: { required: t('enter_all_field') },
  }),
});

const infoProduct = ref({
  name: '',
  description: '',
  categories: [],
  price: '',
  origin: '',
});
const selectedCategories = ref([]);
const items = ref([]);

const product = productStore();
const image = imageStore();

const category = useCategoryStore();
category.getList().then((data) => {
  items.value = data.data;
});

product.getProductById(route.params.product_id).then((data) => {
  if (data && data.data) {
    infoProduct.value = data.data;
    if (data.data.categories) {
      selectedCategories.value = data.data.categories.map(cat => cat.id);
    }
  }
});

const updateSelectedCategories = () => {
  infoProduct.value.categories = selectedCategories.value.map(cat => cat.id);
};

const onChangeValue = async () => {
  updateSelectedCategories();
  const imageList = image.getImageList();
  const formData = {
    name: infoProduct.value.name,
    description: infoProduct.value.description,
    category_ids: infoProduct.value.categories,
    price: formatPrice(infoProduct.value.price),
    image_url: imageList[0] || '', // Ensure image_url is provided
    origin: infoProduct.value.origin,
  };
  console.log('Sending form data:', formData); // Log data before sending
  const result = await product.updateProduct(formData, route.params.product_id);
  if (result && result.status === 1) {
    console.log('Update successful');
    router.push('/product');
  } else {
    console.log('Update failed:', result); // Log result if update failed
  }
};

function formatPrice(price) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
}

</script>

<style lang="scss" scoped>
.input-container {
  @apply flex flex-col p-2 my-2 w-full;
}
</style>
<style src="vue-multiselect/dist/vue-multiselect.css"></style>
