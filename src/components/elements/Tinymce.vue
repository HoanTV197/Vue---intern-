<template>
  <div :class="props.classCustom">
    <editor
      ref="refEditor"
      api-key="3cg3emo2j23jib7yp9o2dsshjnlzwdx4htqn7pbd5v17p75j"
      v-model="value"
      :init="init"
    />
  </div>
</template>
<script setup>
import Editor from '@tinymce/tinymce-vue';
import { defineProps } from 'vue';

const props = defineProps({
  classCustom: {
    type: String,
    default: '',
  },
  height: {
    type : Number,
    default: 500
  }
});
const value = defineModel();
const init = {
  selector: 'textarea',
  height: 400,
  statusbar: false,
  plugins: [
    'advlist',
    'autolink',
    'lists',
    'link',
    'image',
    'charmap',
    'preview',
    'anchor',
    'searchreplace',
    'visualblocks',
    'code',
    'fullscreen',
    'insertdatetime',
    'media',
    'table',
    'help',
    'wordcount',
  ],
  toolbar:
    'undo redo | blocks | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
  content_style:
    'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
};


</script>
