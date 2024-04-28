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
    <BaseTable :headers="header" :items="items">
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
import Confirm from '@/components/elements/Confirm.vue';
import InputText from '@/components/elements/InputText.vue';
import BaseTable from '@/components/elements/BaseTable.vue';
import BaseButton from '@/components/elements/BaseButton.vue';
import Breadcrumb from '@/components/layout/Breadcrumb.vue';
import { useRoute, useRouter } from 'vue-router';
import { breadcrumbsStore } from '@/stores/breadcrumb';
import { PENCIL, DELETE } from '@/utils/constant';
import { useCategoryStore } from '@/stores/category';
import { popupStore } from '@/stores/popup';
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';

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
const category = useCategoryStore();

category.getList().then((data) => {
  items.value = data.data;
});
const onDelete = (id) => {
  popup.setPopUp(true);
  popup.setIndex(id);
};
const cancelHandler = () => {
  popup.setPopUp(false);
};
const acceptHandler = () => {
  const index = popup.index;
  category.deleteCategory(index).then((data) => {
    popup.setPopUp(false);
    window.location.reload();
  });
};
const gotoAdd = () => {
  router.push('/category/add-category');
};

const gotoUpdate = (id) => {
  router.push(`/category/update-category/${id}`);
};
</script>
