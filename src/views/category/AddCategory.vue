<template>
  <Breadcrumb></Breadcrumb>
  <Content>
    <form @submit.prevent="submitForm">
      <InputText v-model="categoryName" :placeholder="'Tên danh mục'" name="Category name" />
      <button type="submit">Submit</button>
    </form>
  </Content>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'pinia';
import Content from '@/components/elements/Content.vue';
import Breadcrumb from '@/components/layout/Breadcrumb.vue';
import InputText from '@/components/elements/InputText.vue';
import { breadcrumbsStore } from '@/stores/breadcrumb';
import { categoryStore } from '@/stores/category'; // import the store
import { useRouter } from 'vue-router';
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

let categoryName = ref('');

const store = useStore(categoryStore); // use the store

const submitForm = async () => {
  try {
    const formData = { name: categoryName.value };
    const response = await store.createCategory(formData);
    console.log(response);
    alert("Thêm danh mục thành công!"); // Hoặc sử dụng một hệ thống thông báo tốt hơn
    router.push('/category'); // Chuyển hướng người dùng về trang danh sách
  } catch (error) {
    console.error(error);
    alert("Có lỗi xảy ra!"); // Hoặc sử dụng một hệ thống thông báo tốt hơn
  }
};
</script>
