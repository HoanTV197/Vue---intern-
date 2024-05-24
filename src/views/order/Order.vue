<template>
  <Breadcrumb></Breadcrumb>
  <Content>
    <BaseTable :headers="headers" :items="items">
      <template #[`status`]="{ item }">
        <Status :status="item.status" />
      </template>
      <template #[`action`]="{ item }">
        <div
          class="flex items-center justify-center cursor-pointer p-2"
          @click="gotoUpdate(item.id)"
        >
          <Icon :type="ARROW_RIGHT" />
        </div>
      </template>
    </BaseTable>
  </Content>
</template>
<script setup>
import Icon from '@/components/elements/Icon.vue';
import Status from '@/components/elements/Status.vue';
import Content from '@/components/elements/Content.vue';
import BaseTable from '@/components/elements/BaseTable.vue';
import Breadcrumb from '@/components/layout/Breadcrumb.vue';
import { breadcrumbsStore } from '@/stores/breadcrumb';
import { ARROW_RIGHT } from '@/utils/constant';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { ordersStore } from '@/stores/order';
import { ref } from 'vue';
 
const { t } = useI18n();
const router = useRouter();
const breadcrumb = breadcrumbsStore();
 
const title = 'Danh sách đơn hàng';
const listBreadcrumb = [
  {
    title: 'Home',
    src: '/',
  },
  {
    title: 'Order',
    src: '/order',
  },
];
breadcrumb.setBreadcrumb(title, listBreadcrumb);
const headers = [
  {
    key: 'id',
    title: 'ID',
  },
  {
    key: 'customer_name',
    title: t('order.customer'),
  },
  {
    key: 'location',
    title: t('order.location'),
  },
  {
    key: 'order_time',
    title: t('order.order_time'),
  },
  {
    key: 'total_price',
    title: t('order.total_price'),
  },
  {
    key: 'status',
    title: t('order.status.title'),
  },
  {
    key: 'action',
    title: 'action',
  },
];

const order = ordersStore();

const items = ref([]);

order.getOrderList().then((data) => {
  data.data.map(item=>{
    items.value.push({
      id: item.id,
      customer_name: item.user.first_name + ' ' + item.user.last_name,
      location: item.purchase_place,
      order_time: item.order_date,
      total_price: formatPrice(item.total_price),
      status: item.status,
    });
  })
});



function formatPrice(price) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
}

const gotoUpdate = (id) => {
  router.push(`/order/order-detail/${id}`);
};
</script>
