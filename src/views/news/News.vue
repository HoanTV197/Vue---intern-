<template>
  <Breadcrumb></Breadcrumb>
  <BaseButton
    :title="'THÊM'"
    :width="'lg:w-[100px] w-[60px] lg:text-base md:text-sm text-xs'"
    :height="'md:h-9 h-7'"
    :classStyle="'border rounded-xl hover:bg-[#4BBDCF] my-4 p-1 justify-center'"
    @click="gotoAdd"
  />
  <Content>
    <BaseTable :headers="headers" :items="items">
      <template #[`action`]="{ item }">
        <div class="flex items-center justify-center">
          <div class="cursor-pointer p-2" @click="gotoUpdate(item.id)">
            <Icon :type="PENCIL" />
          </div>
          <div class="cursor-pointer p-2">
            <Icon :type="DELETE" />
          </div>
        </div>
      </template>
    </BaseTable>
  </Content>
</template>
<script setup>
import Icon from '@/components/elements/Icon.vue';
import Content from '@/components/elements/Content.vue';
import BaseTable from '@/components/elements/BaseTable.vue';
import BaseButton from '@/components/elements/BaseButton.vue';
import Breadcrumb from '@/components/layout/Breadcrumb.vue';
import { breadcrumbsStore } from '@/stores/breadcrumb';
import { PENCIL, DELETE } from '@/utils/constant';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const router = useRouter();
const breadcrumb = breadcrumbsStore();
const title = 'Quản lý bài viết';
const listBreadcrumb = [
  {
    title: 'Home',
    src: '/',
  },
  {
    title: 'News',
    src: '/news',
  },
];
breadcrumb.setBreadcrumb(title, listBreadcrumb);

const headers = [
  {
    key: 'id',
    title: 'ID',
  },
  {
    key: 'title',
    title: t('news.news_title'),
    align: 'text-left',
  },
  {
    key: 'author',
    title: t('news.author'),
    align: 'text-left',
  },
  {
    key: 'category',
    title: t('news.news_category'),
    align: 'text-left',
  },
  {
    key: 'published_time',
    title: t('news.published_time'),
    align: 'text-left',
  },
  {
    key: 'status',
    title: t('news.status.title'),
  },
  {
    key: 'action',
    title: t('action'),
  },
];

const items = [
  {
    id: '1',
    title: 'Mặt hàng tốt nhất ngày hôm nay. Mua ngay ',
    author: 'Do Quang Phuc',
    category: 'Thực phẩm , tiền bạc',
    published_time: '18:10 - 18/10/2024',
    status: '1',
  },
  {
    id: '2',
    title: 'Sốc . Cả nước bàng hoàng khi biết tin này',
    author: 'Do Quang Phuc',
    category: 'áo quần , khuyến mãi',
    published_time: '18:10 - 18/10/2024',
    status: '2',
  },
  {
    id: '3',
    title: 'Nhóm nhạc nổi tiếng thế giới đã làm điều này',
    author: 'Do Quang Phuc',
    category: 'hoa quả, khuyến mãi',
    published_time: '18:10 - 18/10/2024',
    status: '2',
  },
  {
    id: '4',
    title: 'Bỏ học để làm điều này, người đàn ông đã đổi đời trong phút chốc',
    author: 'Do Quang Phuc',
    category: 'tiền bạc',
    published_time: '18:10 - 18/10/2024',
    status: '1',
  },
];

const gotoUpdate = (id) => {
  router.push(`/news/news-detail/${id}`);
};

const gotoAdd = ()=>{
  router.push('/news/add-news')
}
</script>
