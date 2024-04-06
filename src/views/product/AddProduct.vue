<template>
  <breadcrumb></breadcrumb>
  <Content>
    <Form class="flex flex-col">
      <div class="flex w-full">
        <div class="input-container">
          <label class="lg:my-[10px] my-[6px] lg:text-base text-xs"
            >Tên sản phẩm</label
          >
          <InputText
            :placeholder="'Tên sản phẩm'"
            name="Product name"
            :classCustom="'lg:h-[44px] md:h-[35px] h-[30px] lg:w-[230px] md:w-[200px] w-[160px]'"
            v-model="infoProduct.name"
            rules="required"
          />
        </div>
        <div class="input-container">
          <label class="lg:my-[10px] my-[6px] lg:text-base text-xs"
            >Giá sản phẩm</label
          >
          <InputText
            :placeholder="'Giá sản phẩm'"
            name="Product price"
            :classCustom="'lg:h-[44px] md:h-[35px] h-[30px] lg:w-[230px] md:w-[200px] w-[160px]'"
            v-model="infoProduct.price"
            rules="required"
          />
        </div>
      </div>
      <div class="flex md:flex-row flex-col w-full">
        <div class="input-container">
          <label class="lg:my-[10px] my-[6px] lg:text-base text-xs"
            >Loại của sản phẩm</label
          >
          <InputText
            :placeholder="'Loại của sản phẩm'"
            name="Product category"
            :classCustom="'lg:h-[44px] md:h-[40px] h-[30px] lg:w-[430px] w-[300px]'"
            v-model="infoProduct.category"
            rules="required"
          />
        </div>
        <div class="input-container">
          <label class="lg:my-[10px] my-[6px] lg:text-base text-xs"
            >Xuất xứ sản phẩm</label
          >
          <InputText
            :placeholder="'Xuất xứ sản phẩm'"
            name="Product origin"
            :classCustom="'lg:h-[44px] md:h-[40px] h-[30px] lg:w-[430px] w-[300px]'"
            v-model="infoProduct.origin"
            rules="required"
          />
        </div>
      </div>
      <div class="input-container">
        <label class="lg:my-[10px] my-[6px] lg:text-base text-xs"
          >Mô tả sản phẩm</label
        >
        <InputText
          :placeholder="'Mô tả sản phẩm'"
          name="Product descrition"
          :classCustom="'lg:h-[44px] md:h-[40px] h-[30px] lg:w-4/5 w-[300px] '"
          v-model="infoProduct.description"
          rules="required"
        />
      </div>
      <div class="input-container">
        <label class="lg:my-[10px] my-[6px] lg:text-base text-xs"
          >Upload hình ảnh</label
        >
        <UploadImage />
      </div>
    </Form>
  </Content>
  <div class="flex items-center justify-center mt-4">
    <BaseButton
      :type="'submit'"
      :title="'SAVE'"
      :width="'lg:w-16 lg:text-base md:w-14 md:text-sm w-12 text-xs'"
      :height="'lg:h-9 md:h-8 h-7'"
      :classStyle="'border rounded-xl justify-center'"
      @onClick="createProduct"
    />
  </div>
</template>
<script setup>
import Content from '@/components/elements/Content.vue';
import InputText from '@/components/elements/InputText.vue';
import BaseButton from '@/components/elements/BaseButton.vue';
import Breadcrumb from '@/components/layout/Breadcrumb.vue';
import UploadImage from '@/components/elements/UploadImage.vue';
import { Form, defineRule, configure } from 'vee-validate';
import { breadcrumbsStore } from '@/stores/breadcrumb';
import { required, min } from '@vee-validate/rules';
import { productStore } from '@/stores/product';
import { imageStore } from '@/stores/image';
import { useRouter } from 'vue-router';
import { localize } from '@vee-validate/i18n';
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';

const router = useRouter();
const title = 'Thêm sản phẩm';
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
    title: 'Add-Product',
    src: '/product/add-product',
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
const infoProduct = ref({});
const product = productStore();
const image = imageStore();
</script>
<style lang="scss" scoped>
.input-container {
  @apply flex flex-col p-2 my-2 w-full;
}
</style>
