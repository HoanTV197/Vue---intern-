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
const items = [
  {
    id: '1',
    customer_name: 'Do Quang Phuc',
    order_time: '18:10-18/10/2001',
    location: 'Tân Hòa, Vũ Thư , Thái Bình',
    total_price: '1200000',
    status: '1',
  },
  {
    id: '2',
    customer_name: 'Do Quang Phuc',
    order_time: '18:10-18/10/2001',
    location: 'Tân Hòa, Vũ Thư , Thái Bình',
    total_price: '1200000',
    status: '2',
  },
  {
    id: '3',
    customer_name: 'Do Quang Phuc',
    order_time: '18:10-18/10/2001',
    location: 'Tân Hòa, Vũ Thư , Thái Bình',
    total_price: '1200000',
    status: '3',
  },
  {
    id: '4',
    customer_name: 'Do Quang Phuc',
    order_time: '18:10-18/10/2001',
    location: 'Tân Hòa, Vũ Thư , Thái Bình',
    total_price: '1200000',
    status: '4',
  },
];

const gotoUpdate = (id) => {
  router.push(`/order/order-detail/${id}`);
};
</script>
