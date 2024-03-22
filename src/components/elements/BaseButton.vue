<template>
  <button
    :class="['base-btn', color, background, height, width, classStyle]"
    :disabled="disabled"
    :type="type"
    @click="$emit('onClick')"
  >
    <div v-if="props.haveIcon" class="mr-[20px]">
      <Icon :type="props.typeIcon" :classCustom="props.classIcon" />
    </div>
    <slot>
      <div :class="haveIcon ? 'mr-[45px]' : ''">
        {{ props.title }}
      </div>
    </slot>
  </button>
</template>
<script setup>
import { PLUS } from '@/utils/constant';
import Icon from '@/components/elements/Icon.vue';
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: 'w-full text-[15px]',
  },
  color: {
    type: String,
    default: 'text-[#FFFFFF] ',
  },
  background: {
    type: String,
    default: 'bg-primary',
  },
  height: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: '',
  },
  classStyle: {
    type: String,
    default: '',
  },
  typeIcon: {
    type: String,
    default: PLUS,
  },
  haveIcon: {
    type: Boolean,
    default: false,
  },
  classIcon: {
    type: String,
    default: '',
  },
});
</script>
<style lang="scss" scoped>
.base-btn {
  @apply font-bold flex items-center;
}
</style>
