<template>
  <footer class="page-footer">
    <div class="container-fluid">
      <div class="row" >
        <NextDay class="fadeInUp animated" v-for="(d, index) in days" :key="index" :day="d" />
      </div>
    </div>
  </footer>
</template>

<script>
import NextDay from '@/components/NextDay';

export default {
  name: "MyFooter",
  props: ["days"],
  
  components: {
    NextDay
  }
};

</script>

<style scoped>

</style>
