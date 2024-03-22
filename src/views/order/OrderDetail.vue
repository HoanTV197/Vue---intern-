<template>
  <breadcrumb></breadcrumb>
  <content>
    <div>
      <div class="flex justify-between items-center mb-3">
        <div>
          {{ t('order.order_id') }}: <span>{{ items.order_id }}</span>
        </div>
        <div>
          <select
            class="border-2 border-solid border-gray_200 bg-gray_01 rounded-lg h-9 w-40 px-2"
            v-model="DELIVERED"
          >
            <option>Change Status</option>
            <option :value="DELIVERED">
              {{ t('order.status.delivered') }}
            </option>
            <option :value="SHIPPED">{{ t('order.status.shipped') }}</option>
            <option :value="CANCELLED">
              {{ t('order.status.cancelled') }}
            </option>
            <option :value="PENDING">{{ t('order.status.pending') }}</option>
          </select>
        </div>
      </div>
      <div class="flex items-start justify-between p-3 m-2">
        <div class="flex items-start">
          <div>
            <div class="py-2">
              {{ t('order.customer') }}:
              <span class="ml-4">{{ items.customer_name }}</span>
            </div>
            <div class="py-2">
              {{ t('order.phone') }}:
              <span class="ml-4">{{ items.customer_phone }}</span>
            </div>
            <div class="py-2">
              {{ t('order.location') }}:
              <span class="ml-4">{{ items.location }}</span>
            </div>
            <div class="py-2">
              {{ t('order.total_price') }}:
              <span class="ml-4">{{ items.total_price }}</span>
            </div>
          </div>
        </div>
        <div class="flex items-start">
          <div>
            <div class="py-2">
              {{ t('order.order_time') }}:
              <span class="ml-4">{{ items.order_time }}</span>
            </div>
            <div class="py-2">
              {{ t('order.purchase_time') }}:
              <span class="ml-4">{{ items.purchase_time }}</span>
            </div>
            <div class="py-2">
              {{ t('update_time') }}:
              <span class="ml-4">{{ items.updated_time }}</span>
            </div>
            <div class="py-2">
              {{ t('staff.title') }}:
              <span class="ml-4">{{ items.staff_name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <content>
        <BaseTable :headers="header" :items="items.product_list"> </BaseTable>
      </content>
    </div>
  </content>
  <div class="flex items-center justify-center mt-4">
    <BaseButton
      :type="'submit'"
      :title="'SAVE'"
      :width="'lg:w-16 lg:text-base md:w-14 md:text-sm w-12 text-xs'"
      :height="'lg:h-9 md:h-8 h-7'"
      :classStyle="'border rounded-xl justify-center'"
      @onClick="updateStatus"
    />
  </div>
</template>
<script setup>
import Icon from '@/components/elements/Icon.vue';
import Status from '@/components/elements/Status.vue';
import Content from '@/components/elements/Content.vue';
import BaseTable from '@/components/elements/BaseTable.vue';
import Breadcrumb from '@/components/layout/Breadcrumb.vue';
import BaseButton from '@/components/elements/BaseButton.vue';
import { DELIVERED, SHIPPED, CANCELLED, PENDING } from '@/utils/constant';
import { PROFILE, SHOPPING_CART } from '@/utils/constant';
import { breadcrumbsStore } from '@/stores/breadcrumb';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';

const { t } = useI18n();
const router = useRouter();
const breadcrumb = breadcrumbsStore();
const title = 'Chi tiết đơn hàng';
const listBreadcrumb = [
  {
    title: 'Home',
    src: '/',
  },
  {
    title: 'Order',
    src: '/order',
  },
  {
    title: 'Order-detail',
    src: '/order/order-detail',
  },
];
const items = {
  id: '1',
  customer_name: 'Do Quang Phuc',
  customer_phone: '0342246428',
  location: 'Tan Hoa , Vu Thu, Thai Binh',
  order_time: '18:10 - 18/10/2024',
  purchase_time: '18:10 - 20/10/2024',
  updated_time: '20:10 - 20/10/2024',
  total_price: '1200000',
  status: 1,
  product_list: [
    {
      product_id: '1',
      product_name: 'Áo cái bang',
      quantity: '5',
      price: '100000',
    },
    {
      product_id: '2',
      product_name: 'Lá đu đủ',
      quantity: '10 kg',
      price: '1000000',
    },
    {
      product_id: '3',
      product_name: 'Máy tính Casio',
      quantity: '2',
      price: '104000',
    },
    {
      product_id: '4',
      product_name: 'Hoa anh túc',
      quantity: '5 kg',
      price: '1400000',
    },
  ],
  staff_name: 'Do Quang Phuc',
};
const header = [
  {
    key: 'product_id',
    title: t('product.product_id'),
  },
  {
    key: 'product_name',
    title: t('product.product_name'),
  },
  {
    key: 'quantity',
    title: t('product.product_quantity'),
  },
  {
    key: 'price',
    title: t('product.product_price'),
  },
];
breadcrumb.setBreadcrumb(title, listBreadcrumb);
const updateStatus = () => {
  router.push('/order');
};
</script>
