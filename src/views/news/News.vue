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
          <div class="cursor-pointer p-2" @click="onDelete(item.id)">
            <Icon :type="DELETE" />
          </div>
        </div>
      </template>
    </BaseTable>
  </Content>
  <div v-if="popup.isHiddenPopUp">
    <Confirm @cancelHandler="cancelHandler" @acceptHandler="acceptHandler" />
  </div>
  
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
import { onMounted, ref } from 'vue';
import { newsStore } from '@/stores/news';
import { popupStore } from '@/stores/popup';
import Confirm from '@/components/elements/Confirm.vue';


const { t } = useI18n();
const router = useRouter();
const popup = popupStore();
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
    key: 'action',
    title: t('action'),
  },
];

const news = newsStore();
const items = ref([]);

const mapApiDataToTable = (apiData) => {
  return apiData.map(apiItem => ({
    id: apiItem.id,
    title: apiItem.title,
    author: apiItem.author,
    category: apiItem.category,
    published_time: apiItem.release_date, // Định dạng theo 'publish_time'
    // Bạn có thể thêm cấu trúc dữ liệu khác cần thiết cho bảng
  }));
};
onMounted(async () => {
  try {
    const data = await news.getNewsList();
    items.value = mapApiDataToTable(data.data);
  } catch (error) {
    console.error(error);
    // Hiển thị thông báo lỗi cho người dùng
  }
});

// Xử lý xóa
const onDelete = (id) => {
  popup.setPopUp(true);
  popup.setIndex(id);
};
const cancelHandler = () => {
  popup.setPopUp(false);
};
const acceptHandler = () => {
  const index = popup.index;
  news.deleteNews(index).then((data) => {
    popup.setPopUp(false);
    window.location.reload();
  });
};

const gotoUpdate = (id) => {
  router.push(`/news/news-detail/${id}`);
};

const gotoAdd = ()=>{
  router.push('/news/add-news')
};
</script>
