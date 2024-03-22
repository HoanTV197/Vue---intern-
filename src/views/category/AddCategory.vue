<template>
  <Breadcrumb></Breadcrumb>
  <Content>
    <InputText :placeholder="'Tên danh mục'" name="Category name" />
  </Content>
</template>
<script setup>
import Content from '@/components/elements/Content.vue';
import Breadcrumb from '@/components/layout/Breadcrumb.vue';
import InputText from '@/components/elements/InputText.vue';
import { breadcrumbsStore } from '@/stores/breadcrumb';

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
</script>
