<template>
<div>
    <SearchBar @dataFetched2="getWeatherData" />
    <CurrentDay :weather2="weather2" :exist="exist" />
</div>
</template>

<script>
import CurrentDay from '@/components/CurrentDay.vue';
import SearchBar from '@/components/SearchBar';

export default {
  name: 'App',
  data: function() {
    return {
      weather2: {},
      exist: false
    }
  },
  methods: {
    getWeatherData(data) {
      this.weather2 = data;
      this.exist = true;
    }
  },
  components: {
    CurrentDay,
    SearchBar,
  }
}
</script>

<style>
</style>
