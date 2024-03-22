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

const item = ref({
  id: '1',
  title: 'Mặt hàng tốt nhất ngày hôm nay. Mua ngay ',
  author: 'Do Quang Phuc',
  category: 'Thực phẩm , tiền bạc',
  content:
    'Chứng minh cho giả thuyết này được đưa ra bởi Grigori Perelman. Lời giải của ông dựa trên lý thuyết dòng Ricci của Richard Hamilton. Tuy nhiên, lời giải này chủ yếu nhờ vào sự cải tiến độc đáo của Perelman. Đồng thời bằng các công trình của Perelman xoay quanh việc phát triển lý thuyết dòng Ricci cũng giúp ông hoàn tất chứng minh giả thuyết hình học hóa của William Thurston (một dạng mạnh hơn giả thuyết Poincaré).',
  published_time: '18:10 - 18/10/2024',
  status: '1',
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
