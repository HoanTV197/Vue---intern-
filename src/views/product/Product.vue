<template>
  <Breadcrumb></Breadcrumb>
  <div class="search-container">
    <BaseButton
      :title="'THÊM'"
      :width="'lg:w-[100px] w-[60px] lg:text-base md:text-sm text-xs'"
      :height="'md:h-9 h-7'"
      :classStyle="'border rounded-xl hover:bg-[#4BBDCF] my-4 p-1 justify-center'"
      @onClick="gotoAdd"
    />
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search products..."
      class="search-input"
    />
  </div>
  <Content>
    <BaseTable :headers="headers" :items="filteredItems">
      <template #[`category`]="{ item }">
        <div>
          <span v-for="(category, index) in item.categories" :key="index">
            {{ category.name }}
            <span v-if="index < item.categories.length - 1">, </span>
          </span>
        </div>
      </template>
      <template #[`price`]="{ item }">
        <span v-if="item.price != null">
          {{ formatPrice(item.price) }} 
        </span>
        <span v-else>Đang tải...</span> 
      </template> 
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
    <div class="pagination-buttons">
      <button
        class="pagination-button"
        @click="prevPage"
        :disabled="currentPage === 1"
      >
        Prev
      </button>
      <span class="pagination-info">{{ currentPage }}/{{ totalPage }}</span>
      <button
        class="pagination-button"
        @click="nextPage"
        :disabled="currentPage === totalPage"
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
import Toasted from '@/components/Toasted.vue';
import Confirm from '@/components/elements/Confirm.vue';
import Content from '@/components/elements/Content.vue';
import BaseTable from '@/components/elements/BaseTable.vue';
import BaseButton from '@/components/elements/BaseButton.vue';
import Breadcrumb from '@/components/layout/Breadcrumb.vue';
import { useRoute, useRouter } from 'vue-router';
import { breadcrumbsStore } from '@/stores/breadcrumb';
import { PENCIL, DELETE } from '@/utils/constant';
import { productStore } from '@/stores/product';
import { popupStore } from '@/stores/popup';
import { ref, computed, onMounted } from 'vue';

const router = useRouter();
const product = productStore();
const popup = popupStore();
const breadcrumb = breadcrumbsStore();

const items = ref([]);
const searchQuery = ref('');
const currentPage = ref(1);
const totalPage = ref(0);

product.getProductList().then((data) => {
  items.value = data.data;
});

function formatPrice(price) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
}

const headers = [
  { key: 'id', title: 'ID' },
  { key: 'name', title: 'Name' },
  { key: 'price', title: 'Price' },
  { key: 'category', title: 'Category', align: 'text-left' },
  { key: 'origin', title: 'Origin', align: 'text-left' },
  { key: 'description', title: 'Description', align: 'text-left' },
  { key: 'action', title: 'Action' },
];

const title = 'Product';
const listBreadcrumb = [
  { title: 'Home', src: '/' },
  { title: 'Product', src: '/product' },
];
breadcrumb.setBreadcrumb(title, listBreadcrumb);

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
    await product.deleteProduct(index);
    items.value = items.value.filter((item) => item.id !== index);
  } catch (error) {
    console.error('Delete product error:', error);
  }
  popup.setPopUp(false);
};

const gotoAdd = () => {
  router.push('/product/add-product');
};
const gotoUpdate = (index) => {
  router.push(`/product/update-product/${index}`);
};

const fetchProducts = async () => {
  try {
    const data = await product.getProductList(currentPage.value);
    items.value = data.data;
    totalPage.value = data.last_page;
  } catch (error) {
    console.error('Fetch products error:', error);
  }
};

const nextPage = async () => {
  if (currentPage.value < totalPage.value) {
    currentPage.value++;
    await fetchProducts();
  }
};

const prevPage = async () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    await fetchProducts();
  }
};

const filteredItems = computed(() => {
  return items.value.filter(item => 
    item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

onMounted(async () => {
  await fetchProducts();
});
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

.pagination-buttons {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 1rem;
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

.pagination-button:hover {
  background-color: #3aa9c2;
}

.pagination-info {
  margin: 0 1rem;
  font-size: 14px;
  color: #333;
}
</style>
