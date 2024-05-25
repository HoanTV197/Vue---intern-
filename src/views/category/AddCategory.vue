<template>
  <Breadcrumb></Breadcrumb>
  <Content>
    <InputText
      v-model="categoryName"
      :placeholder="'Tên danh mục'"
      name="Category name"
    />
  </Content>
  <div class="flex items-center justify-center mt-4">
    <BaseButton
      :type="'submit'"
      :title="'SAVE'"
      :width="'lg:w-16 lg:text-base md:w-14 md:text-sm w-12 text-xs'"
      :height="'lg:h-9 md:h-8 h-7'"
      :classStyle="'border rounded-xl justify-center button-save'"
      @click="createCategory"
    />
  </div>
</template>
<script setup>
import { ref } from 'vue';
import Content from '@/components/elements/Content.vue';
import Breadcrumb from '@/components/layout/Breadcrumb.vue';
import InputText from '@/components/elements/InputText.vue';
import { breadcrumbsStore } from '@/stores/breadcrumb';
import BaseButton from '@/components/elements/BaseButton.vue';
import { useRouter } from 'vue-router';
import { useCategoryStore } from '@/stores/category';

const store = useCategoryStore();
const router = useRouter();

const title = 'Thêm danh mục';
const listBreadcrumb = [
  {
    title: 'Home',
    src: '/',
  },
  {
    title: 'Category',
    src: '/category',
  },
  {
    title: 'Add-Category',
    src: '/category/add-category',
  },
];
const breadcrumb = breadcrumbsStore();
breadcrumb.setBreadcrumb(title, listBreadcrumb);

let categoryName = '';

const createCategory = async () => {
  const formData = { name: categoryName };
  const response = await store.createCategory(formData);
  console.log(response);
  router.push('/category');
};
</script>
