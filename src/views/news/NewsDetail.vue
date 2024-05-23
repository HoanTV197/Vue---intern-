<template>
  <breadcrumb></breadcrumb>
  <Content>
    <div class="flex items-center justify-center my-3">
      <p class="text-2xl font-semibold">CẬP NHẬT :</p>
      <p class="text-xl font-medium ml-2">{{ item.title }}</p>
    </div>
    <div class="my-3">
      <div class="input-container">
        <div class="input-title">{{ t('news.author') }}</div>
        <div  class="col-span-1">
          <InputText
          v-model="item.author"
          name="news_author"
        />
        </div>
      </div>
      <div class="input-container">
        <div class="input-title">{{ t('news.news_title') }}</div>
        <div class="col-span-3">
          <InputText v-model="item.title" />
        </div>
      </div>
      <div class="input-container">
        <div class="input-title">{{ t('news.news_category') }}</div>
        <div class="col-span-3">
          <InputText  v-model="item.category" />
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
      @click="submitForm"
      :type="'submit'"
      :title="'SAVE'"
      :width="'lg:w-16 lg:text-base md:w-14 md:text-sm w-12 text-xs'"
      :height="'lg:h-9 md:h-8 h-7'"
      :classStyle="'border rounded-xl justify-center'"
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
import { useRouter } from 'vue-router';
import { newsStore } from '@/stores/news';
import { onMounted } from 'vue';

const { t } = useI18n();
const breadcrumb = breadcrumbsStore();
const title = 'Chỉnh sửa bài viết';

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
    title: 'News-Detail',
    src: '/news/news-detail',
  },
];

  breadcrumb.setBreadcrumb(title, listBreadcrumb);

const fetchNews = async () => {
  try {
    const response = await news.getNews(item.value.id);
    item.value = response.data;
  } catch (error) {
    console.error(error);
    // Hiển thị thông báo lỗi cho người dùng
  }
};

onMounted(fetchNews);


let item = ref({});

const router = useRouter();
const news = newsStore();
const submitForm = async () => {
  try {
    await news.updateNews(item.value.id, item.value);
    router.push('/news');
  } catch (error) {
    console.error(error);
    // Hiển thị thông báo lỗi cho người dùng
  }
};
</script>
<style lang="scss" scoped>
.input-container {
  @apply my-2 p-2 mx-4 grid grid-cols-4;
  .input-title {
    @apply text-xl font-semibold;
  }
}
</style>
