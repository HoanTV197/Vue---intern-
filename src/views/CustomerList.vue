<template>
  <Breadcrumb></Breadcrumb>
  <Content>
    <BaseTable :headers="headers" :items="paginatedItems">
      <template #[`action`]="{ item }">
        <div class="flex items-center justify-center cursor-pointer p-2" @click="gotoDetail(item.id)">
          <Icon :type="ARROW_RIGHT" />
        </div>
      </template>
    </BaseTable>
    <div class="pagination-controls">
      <button class="pagination-button" @click="prevPage" :disabled="currentPage === 1">Prev</button>
      <span class="pagination-info">{{ currentPage }}/{{ totalPages }}</span>
      <button class="pagination-button" @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
  </Content>
</template>

<script setup>
import Icon from '@/components/elements/Icon.vue';
import Content from '@/components/elements/Content.vue';
import BaseTable from '@/components/elements/BaseTable.vue';
import Breadcrumb from '@/components/layout/Breadcrumb.vue';
import { breadcrumbsStore } from '@/stores/breadcrumb';
import { ARROW_RIGHT } from '@/utils/constant';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { ordersStore } from '@/stores/order';
import { ref, computed, onMounted } from 'vue';

const { t } = useI18n();
const router = useRouter();
const breadcrumb = breadcrumbsStore();

const title = 'Danh sách khách hàng';
const listBreadcrumb = [
  { title: 'Home', src: '/' },
  { title: 'Customers', src: '/customers' },
];
breadcrumb.setBreadcrumb(title, listBreadcrumb);

const headers = [
  { key: 'id', title: 'ID' },
  { key: 'name', title: t('customer.name') },
  { key: 'phone', title: t('customer.phone') },
  { key: 'email', title: t('customer.email') },
  { key: 'location', title: t('customer.location') },
  { key: 'action', title: 'action' },
];

const order = ordersStore();
const items = ref([]);
const searchQuery = ref('');
const currentPage = ref(1);
const pageSize = 5;

const fetchCustomers = async () => {
  try {
    const data = await order.getCustomerList();
    items.value = data;
  } catch (error) {
    console.error('Fetch customers error:', error);
  }
};

onMounted(async () => {
  await fetchCustomers();
});

const filteredItems = computed(() => {
  return items.value.filter(item =>
    item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const totalPages = computed(() => {
  return Math.ceil(filteredItems.value.length / pageSize);
});

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  return filteredItems.value.slice(start, start + pageSize);
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

const gotoDetail = (id) => {
  router.push(`/customers/${id}`);
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
