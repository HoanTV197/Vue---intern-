<template>
  <Breadcrumb></Breadcrumb>
  <BaseButton
    :title="'THÊM'"
    :width="'lg:w-[100px] w-[60px] lg:text-base md:text-sm text-xs'"
    :height="'md:h-9 h-7'"
    :classStyle="'border rounded-xl hover:bg-[#4BBDCF] my-4 p-1 justify-center'"
    @onClick="gotoAdd"
  />
  <Content>
    <BaseTable :headers="header" :items="paginatedItems">
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
import Confirm from '@/components/elements/Confirm.vue';
import BaseTable from '@/components/elements/BaseTable.vue';
import BaseButton from '@/components/elements/BaseButton.vue';
import Breadcrumb from '@/components/layout/Breadcrumb.vue';
import { useRoute, useRouter } from 'vue-router';
import { breadcrumbsStore } from '@/stores/breadcrumb';
import { PENCIL, DELETE } from '@/utils/constant';
import { useCategoryStore } from '@/stores/category';
import { popupStore } from '@/stores/popup';
import { useI18n } from 'vue-i18n';
import { ref, computed, onMounted } from 'vue';

const router = useRouter();
const popup = popupStore();
const { t } = useI18n();
const header = [
  {
    key: 'id',
    title: 'ID',
  },
  {
    key: 'name',
    title: t('categories.name'),
  },
  {
    key: 'action',
    title: t('action'),
  },
];

const title = 'Home';
const listBreadcrumb = [
  {
    title: 'Home',
    src: '/',
  },
  {
    title: 'Category',
    src: '/category',
  },
];
const breadcrumb = breadcrumbsStore();
breadcrumb.setBreadcrumb(title, listBreadcrumb);

const items = ref([]);
const currentPage = ref(1);
const pageSize = 5;
const category = useCategoryStore();

const fetchCategories = async () => {
  try {
    const data = await category.getList();
    items.value = data.data;
  } catch (error) {
    console.error('Fetch categories error:', error);
  }
};

onMounted(async () => {
  await fetchCategories();
});

const totalPages = computed(() => {
  return Math.ceil(items.value.length / pageSize);
});

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  return items.value.slice(start, start + pageSize);
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

const onDelete = (id) => {
  popup.setPopUp(true);
  popup.setIndex(id);
};

const cancelHandler = () => {
  popup.setPopUp(false);
};

// Xóa category khỏi danh sách hiện tại mà không cần tải lại trang
const acceptHandler = async () => {
  const id = popup.index;
  try {
    await category.deleteCategory(id);
    items.value = items.value.filter((item) => item.id !== id);
    popup.setPopUp(false);
  } catch (error) {
    console.error('Error deleting category:', error);
  }
};

const gotoAdd = () => {
  router.push('/category/add-category');
};

const gotoUpdate = (id) => {
  router.push(`/category/update-category/${id}`);
};
</script>

<style scoped>
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
