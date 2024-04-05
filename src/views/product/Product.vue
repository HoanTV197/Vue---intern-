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
    <BaseTable :headers="headers" :items="items" >
      <template #[`category`]="{ item }">
        <div>
          <span v-for="(category, index) in item.categories" :key="index">
            {{ category.name }}
            <span v-if="index < item.categories.length - 1">, </span>
          </span>
        </div>
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
      <button class="pagination-button" @click="prevPage" :disabled="currentPage <= 1">Previous</button>
      <button class="pagination-button" @click="nextPage" :disabled="currentPage >= totalPage">Next</button>
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
import { ref,onMounted } from 'vue';
const router = useRouter();
const product = productStore();
const popup = popupStore();
const breadcrumb = breadcrumbsStore();
const items = ref([]);
product.getProductList().then((data) => {
  items.value = data.data;
});
const headers = [
  {
    key: 'id',
    title: 'ID',
  },
  {
    key: 'name',
    title: 'name',
  },
  {
    key: 'price',
    title: 'price',
  },
  {
    key: 'category',
    title: 'category',
    align: 'text-left',
  },
  {
    key: 'origin',
    title: 'origin',
    align: 'text-left',
  },
  {
    key: 'description',
    title: 'description',
    align: 'text-left',
  },
  {
    key: 'action',
    title: 'action',
  },
];
const title = 'Product';
const listBreadcrumb = [
  {
    title: 'Home',
    src: '/',
  },
  {
    title: 'Product',
    src: '/product',
  },
];
breadcrumb.setBreadcrumb(title, listBreadcrumb);
const onDelete = (id) => {
  popup.setPopUp(true);
  popup.setIndex(id);
};
const cancelHandler = () => {
  popup.setPopUp(false);
};
const acceptHandler = () => {
  const index = popup.index;
  product.deleteProduct(index).then(() => {
    popup.setPopUp(false);
    window.location.reload();
  });
};
const gotoAdd = () => {
  router.push('/product/add-product');
};
const gotoUpdate = (index) => {
  router.push(`/product/update-product/${index}`);
};
const currentPage = ref(1);
const totalPage = ref(0);

onMounted(async () => {
  await fetchProducts();
});

const fetchProducts = async () => {
  const data = await product.getProductList(currentPage.value);
  items.value = data.data;
  totalPage.value = data.last_page;
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
</script>
<style scoped>
.pagination-buttons {
  display: flex;
  justify-content: flex-end;
  margin-top: 1em;
}

.pagination-button {
  margin-left: 1em;
  padding: 0.5em 1em;
  border: none;
  border-radius: 5px;
  background-color: #4BBDCF;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.pagination-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.pagination-button:not(:disabled):hover {
  background-color: #2a9da7;
}
</style>