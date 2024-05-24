<template>
  <Breadcrumb></Breadcrumb>
  <div class="search-container">
    <BaseButton
      :title="'THÊM'"
      :width="'lg:w-[100px] w-[60px] lg:text-base md:text-sm text-xs'"
      :height="'md:h-9 h-7'"
      :classStyle="'border rounded-xl hover:bg-[#4BBDCF] my-4 p-1 justify-center'"
      @click="gotoAdd"
    />
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search articles..."
      class="search-input"
    />
  </div>
  <Content>
    <BaseTable :headers="headers" :items="paginatedItems">
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
    <div class="pagination-controls">
      <button
        class="pagination-button"
        @click="prevPage"
        :disabled="currentPage === 1"
      >
        Prev
      </button>
      <span class="pagination-info">{{ currentPage }}/{{ totalPages }}</span>
      <button
        class="pagination-button"
        @click="nextPage"
        :disabled="currentPage === totalPages"
      >
        Next
      </button>
    </div>
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
import { onMounted, ref, computed } from 'vue';
import { newsStore } from '@/stores/news';
import { popupStore } from '@/stores/popup';
import Confirm from '@/components/elements/Confirm.vue';

const { t } = useI18n();
const router = useRouter();
const popup = popupStore();
const breadcrumb = breadcrumbsStore();
const title = 'Quản lý bài viết';
const listBreadcrumb = [
  { title: 'Home', src: '/' },
  { title: 'News', src: '/news' },
];
breadcrumb.setBreadcrumb(title, listBreadcrumb);

const headers = [
  { key: 'id', title: 'ID' },
  { key: 'title', title: t('news.news_title'), align: 'text-left' },
  { key: 'author', title: t('news.author'), align: 'text-left' },
  { key: 'category', title: t('news.news_category'), align: 'text-left' },
  { key: 'published_time', title: t('news.published_time'), align: 'text-left' },
  { key: 'action', title: t('action') },
];

const news = newsStore();
const items = ref([]);
const searchQuery = ref('');
const currentPage = ref(1);
const pageSize = 5;

const mapApiDataToTable = (apiData) => {
  return apiData.map((apiItem) => ({
    id: apiItem.id,
    title: apiItem.title,
    author: apiItem.author,
    category: apiItem.category,
    published_time: apiItem.release_date,
  }));
};

const fetchNews = async () => {
  try {
    const data = await news.getNewsList();
    items.value = mapApiDataToTable(data.data);
  } catch (error) {
    console.error('Fetch news error:', error);
  }
};

onMounted(async () => {
  await fetchNews();
});

const filteredItems = computed(() => {
  return items.value.filter(item =>
    item.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const totalPages = computed(() => {
  return Math.ceil(filteredItems.value.length / pageSize);
});

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  const end = start + pageSize;
  return filteredItems.value.slice(start, end);
});

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

// Xử lý xóa
const onDelete = (id) => {
  popup.setPopUp(true);
  popup.setIndex(id);
};
const cancelHandler = () => {
  popup.setPopUp(false);
};
const acceptHandler = async () => {
  const index = popup.index;
  try {
    await news.deleteNews(index);
    items.value = items.value.filter((item) => item.id !== index);
    popup.setPopUp(false);
  } catch (error) {
    console.error('Error deleting news:', error);
  }
};

const gotoUpdate = (id) => {
  router.push(`/news/news-detail/${id}`);
};

const gotoAdd = () => {
  router.push('/news/add-news');
};
</script>

<style scoped>
.search-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.search-input {
  width: 100%;
  max-width: 300px;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.pagination-controls {
  display: flex;
  justify-content: right;
  margin-top: 1rem;
}

.pagination-button {
  background-color: #4bbdcf;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.pagination-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.pagination-info {
  margin: 0 1rem;
  font-size: 14px;
  color: #333;
}
</style>
