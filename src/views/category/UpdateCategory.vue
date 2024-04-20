<template>
  <Breadcrumb></Breadcrumb>
  <Content>
    <InputText v-model="categoryName" :placeholder="'Tên danh mục'" name="Category name" />
  </Content>
  <div class="flex items-center justify-center mt-4">
    <BaseButton
      :type="'submit'"
      :title="'UPDATE'"
      :width="'lg:w-16 lg:text-base md:w-14 md:text-sm w-12 text-xs'"
      :height="'lg:h-9 md:h-8 h-7'"
      :classStyle="'border rounded-xl justify-center'"
      @click="updateCategory"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useCategoryStore } from '@/stores/category';
import Content from '@/components/elements/Content.vue';
import Breadcrumb from '@/components/layout/Breadcrumb.vue';
import InputText from '@/components/elements/InputText.vue';
import { breadcrumbsStore } from '@/stores/breadcrumb';
import BaseButton from '@/components/elements/BaseButton.vue';

const title = 'Cập nhật danh mục';
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
    title: 'Update-Category',
    src: '/category/update-category',
  },
];
const breadcrumb = breadcrumbsStore();
breadcrumb.setBreadcrumb(title, listBreadcrumb);

const router = useRouter();
const route = useRoute();
const store = useCategoryStore();
let categoryName = ref('');

onMounted(async () => {
  const categoryId = route.params.id;
  const category = await store.getCategoryById(categoryId);
  categoryName.value = category.name;
});

const updateCategory = async () => {
  const formData = { name: categoryName.value };
  const categoryId = route.params.id;
  const response = await store.updateCategory(formData, categoryId);
  console.log(response);
  router.push('/category');
};
</script>
