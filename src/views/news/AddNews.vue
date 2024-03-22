<template>
    <breadcrumb></breadcrumb>
    <Content>
      <div class="my-3">
        <div class="input-container">
          <div class="input-title">{{ t('news.author') }}</div>
          <div  class="col-span-1">
            <InputText
            v-model="item.author"
            name="news_author"
            placeholder="Tên tác giả"
          />
          </div>
        </div>
        <div class="input-container">
          <div class="input-title">{{ t('news.news_title') }}</div>
          <div class="col-span-3">
            <InputText v-model="item.title" name="news_title" placeholder="Tên tiêu đề"/>
          </div>
        </div>
        <div class="input-container">
          <div class="input-title">{{ t('news.news_category') }}</div>
          <div class="col-span-3">
            <InputText  v-model="item.category" name="news_category" placeholder="Danh mục bài viết"/>
          </div>
        </div>
        <div class="input-container">
          <div class="input-title">{{ t('news.content') }}</div>
          <div class="col-span-3">
            <Tinymce
              v-model="item.content"
            />
          </div>
        </div>
      </div>
    </Content>
    <div class="flex items-center justify-center mt-4">
      <BaseButton
        :type="'submit'"
        :title="'ĐĂNG BÀI'"
        :width="'lg:text-base md:text-sm text-xs'"
        :classStyle="'border rounded-xl justify-center p-2'"
      />
    </div>
  </template>
  <script setup>
  import Editor from '@tinymce/tinymce-vue';
  import Content from '@/components/elements/Content.vue';
  import InputText from '@/components/elements/InputText.vue';
  import BaseButton from '@/components/elements/BaseButton.vue';
  import Breadcrumb from '@/components/layout/Breadcrumb.vue';
  import Tinymce from '@/components/elements/Tinymce.vue';
  import { breadcrumbsStore } from '@/stores/breadcrumb';
  import { useI18n } from 'vue-i18n';
  import { ref } from 'vue';
  const { t } = useI18n();
  const breadcrumb = breadcrumbsStore();
  const title = 'Thêm bài viết';
  const listBreadcrumb = [
    {
      title: 'Home',
      src: '/',
    },
    {
      title: 'News',
      src: '/news',
    },
    {
      title: 'Add-News',
      src: '/news/add-news',
    },
  ];
  
  const item = ref({
    id: '',
    title: '',
    author: '',
    category: '',
    content:'',
    published_time: '',
    status: '',
  });
  breadcrumb.setBreadcrumb(title, listBreadcrumb);
  </script>
  <style lang="scss" scoped>
  .input-container {
    @apply my-2 p-2 mx-4 grid grid-cols-4;
    .input-title {
      @apply text-xl font-semibold;
    }
  }
  </style>
  