<template>
  <div>
    <SearchBar @dataFetched2="getWeatherData" />
    <div
      class="current-day d-flex align-items-center night"
      v-bind:class="timeOfDay === 'day' ? 'day' : 'night'"
    >
      <div class="weather-container container">
        <h3>Search weather week by city name.</h3>
        <h2><i class="fas fa-search"></i></h2>
      </div>
      <MyFooter :days="nextDays" :exist="exist" />
    </div>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import MyFooter from "@/components/MyFooter";

export default {
  name: "App",
  data: function () {
    return {
      weather2: {},
      exist: false,
      daysOfWeek: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      nextDays: [],
      timeOfDay: "day",
    };
  },
  methods: {
    getWeatherData(data) {
      this.weather2 = data;
      this.exist = true;

      let days = [];
      let number = new Date().getDay();

      for (let i = 1; i <= 7; i++) {
        number++;
        if (number >= 7) {
          number = 0;
        }
        days.push({
          name: this.daysOfWeek[number],
          data: this.weather2.daily[Math.round(i)],
        });
      }
      console.log(this.weather2);
      this.nextDays = days;
    },
  },
  components: {
    SearchBar,
    MyFooter,
  },
};
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}
</style>
