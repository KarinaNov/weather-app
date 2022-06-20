<template>
<div>
    <SearchBar @dataFetched="getWeatherData" />
    <CurrentDay :weather="weather" :exist="exist" />
</div>
</template>

<script>
import CurrentDay from '@/components/CurrentDay.vue';
import SearchBar from '@/components/SearchBar';

export default {
  name: 'App',
  data: function() {
    return {
      weather: {},
      exist: false
    }
  },
  methods: {
    getWeatherData(data) {
      this.weather = data;
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
