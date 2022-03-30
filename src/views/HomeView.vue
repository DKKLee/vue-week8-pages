<template>
  <FrontNavbar></FrontNavbar>
  <ToastMessages></ToastMessages>
</template>

<script>
import emitter from '@/libs/emitter';
import FrontNavbar from '@/components/FrontNavbar.vue';
import ToastMessages from '@/components/ToastMessages.vue';

export default {
  provide() {
    return {
      emitter,
    };
  },
  components: {
    FrontNavbar,
    ToastMessages,
  },
};
</script>
