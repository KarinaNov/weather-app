<template>
<div>
    <SearchBar @dataFetched="getWeatherData" />
     <div class="current-day d-flex align-items-center night" v-bind:class = "(timeOfDay === 'day') ? 'day' : 'night'">
      <div class="weather-container container">
      <h3>Search weather week by city name.</h3>
      <h2><i class="fas fa-search"></i></h2>
    </div>
    <MyFooter :days="nextDays" :exist="exist" />
     </div>
     </div>
</template>

<script>
import SearchBar from '@/components/SearchBar';
import MyFooter from '@/components/MyFooter';

export default {
  name: 'App',
  data: function() {
    return {
      weather: {},
      exist: false,
      daysOfWeek: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      nextDays: [],
      timeOfDay: 'day'
    }
  },
  methods: {
    getWeatherData(data) {

      this.weather = data;
      this.exist = true;

      let days = [];
      let number = new Date().getDay();

      for(let i=1; i<=6; i++) {
        number++;
        if(number >= 7) {
          number = 0;
        }
        days.push({
          name: this.daysOfWeek[number],
          data: this.weather.list[Math.round(i*5.8)]
        })
      }
      // const arr2 = data.list.filter(d => d.dt_txt);
      // console.log(arr2.indexOf(item => item.dt_txt === '2022-06-20 15:00:00'))
        // console.log(arr2.find(d => d.dt_txt == '2022-06-20 15:00:00'))
      // let item = this.weather.list.forEach(element => console.log(element.dt_txt));
      // console.log(item)
      this.nextDays = days;
      console.log(days)
    }
  },
  components: {
    SearchBar,
    MyFooter
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}
</style>
