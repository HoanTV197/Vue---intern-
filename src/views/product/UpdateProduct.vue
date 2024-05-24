<template>
  <breadcrumb></breadcrumb>
  <Content>
    <Form class="flex flex-col">
      <div class="flex w-full">
        <div class="input-container">
          <label class="my-[10px]">Tên sản phẩm</label>
          <InputText
            :placeholder="'Tên sản phẩm'"
            name="Product name"
            :classCustom="'xl:h-[44px] h-[40px] xl:w-[230px] '"
            v-model="infoProduct.name"
            rules="required"
          />
        </div>
        <div class="input-container">
          <label class="my-[10px]">Giá sản phẩm</label>
          <InputText
            :placeholder="'Giá sản phẩm'"
            name="Product price"
            :classCustom="'xl:h-[44px] h-[40px] xl:w-[230px] '"
            v-model="infoProduct.price"
            rules="required"
          />
        </div>
      </div>
      <div class="flex w-full ">
        <div class="input-container">
          <label class="my-[10px]">Loại của sản phẩm</label>
          <div class="custom-select">
            <select v-model="selectedCategories" @change="updateSelectedCategories" multiple>
              <option v-for="item in items" :key="item.id" :value="item.id">{{ item.name }}</option>
            </select>
        </div>
      </div>
        <div class="input-container">
          <label class="my-[10px]">Xuất xứ sản phẩm</label>
          <InputText
            :placeholder="'Xuất xứ sản phẩm'"
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
          :placeholder="'Mô tả sản phẩm'"
          name="Product descrition"
          :classCustom="'h-[40px] w-4/5 '"
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
      :type="'submit'"
      :title="'SAVE'"
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
import { required, min } from '@vee-validate/rules';
import { useI18n } from 'vue-i18n';
import { localize } from '@vee-validate/i18n';
import { useRouter, useRoute } from 'vue-router';
import UploadImage from '@/components/elements/UploadImage.vue';
import { useCategoryStore } from '@/stores/category';


const route = useRoute();
const router = useRouter();
const title = 'Cập nhật thông tin săn phẩm';
const listBreadcrumb = [
  {
    title: 'Home',
    src: '/',
  },
  {
    title: 'Product',
    src: '/product',
  },
  {
    title: 'Update-Product',
    src: '/product/update-product/:product_id',
  },
];
const breadcrumb = breadcrumbsStore();
breadcrumb.setBreadcrumb(title, listBreadcrumb);

const { t } = useI18n();
defineRule('required', required);
configure({
  generateMessage: localize('en', {
    messages: {
      required: t('enter_all_field'),
    },
  }),
});
let infoProduct = ref({
  name: '',
  description: '',
  categories: [],
  price: '',
  origin: '',
});
const product = productStore();
const image = imageStore();

product.getProductById(route.params.product_id).then((data) => {
  infoProduct.value = data.data;
});

const category = useCategoryStore();
const items = ref([]);
category.getList().then((data) => {
  items.value = data.data;
});
let selectedCategories = ref([]);
const updateSelectedCategories = () => {
  infoProduct.value.category = selectedCategories.value;
};
const onChangeValue = async () => {
  const imageList = image.getImageList();
  const formData = {
    name: infoProduct.value.name,
    description: infoProduct.value.description,
    category_ids: Array.from(selectedCategories.value),
    price: infoProduct.value.price,
    image_url: imageList[0],
    origin: infoProduct.value.origin,
  };
  console.log(formData);
  const result = await product.updateProduct(formData, route.params.product_id);
  if (result) {
    console.log('Update successful');
    router.push('/product');
  } else {
    console.log('Update failed');
  }
};
</script>
<style lang="scss" scoped>
.input-container {
  @apply flex flex-col p-2 my-2 w-full;
}
</style>
