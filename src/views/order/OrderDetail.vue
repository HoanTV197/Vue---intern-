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
            v-model="items.status"  
          >
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
              <span class="ml-4">{{ items.staff_name || "Admin" }} </span> 
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
import { useRoute, useRouter} from 'vue-router';
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';
import { ordersStore } from '@/stores/order';
import { breadcrumbsStore } from '@/stores/breadcrumb';


const { t } = useI18n();
const router = useRouter();
const route= useRoute()
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

const param = route.params.order_id;
const order = ordersStore();
const items = ref({staff_name: "Admin"});


order.getOrderById(param).then((data) => {
  console.log(data.data);
  items.value = {
    id: data.data.id,
    customer_name: data.data.user.first_name + ' ' + data.data.user.last_name,
    customer_phone: data.data.user.phone,
    location: data.data.purchase_place,
    order_time: data.data.order_date,
    purchase_time: data.data.purchase_date,
    updated_time: formatDate(data.data.updated_at),
    total_price: formatPrice(data.data.total_price),
    status: data.data.status,
    staff_name: data.data.staff ? data.data.staff.first_name + ' ' + data.data.staff.last_name : "Admin",
    product_list: data.data.order_details.map((item) => {
      return {
        product_id: item.product_id,
        product_name: item.product.name,
        quantity: item.quantity,
        price: formatPrice(item.product.price),
      };
    }),
  }
});

function formatPrice(price) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
}

// format updated_at ve nam-thang-ngay
function formatDate(date) {
  const dateObj = new Date(date);
  return `${dateObj.getFullYear()}-${dateObj.getMonth() + 1}-${dateObj.getDate()}`;
}


const updateStatus = async () => {
  const formData = {
    status: items.value.status,
  };
  console.log(formData);
  const response = await order.updateOrder(param, formData);
  console.log(response);
  router.push('/order');
};
</script>

<style scoped>
.py-2 .ml-4{
  font-weight: bold;
}
</style>