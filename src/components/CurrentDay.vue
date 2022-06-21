<template>
  <div class="current-day d-flex night" v-bind:class = "(timeOfDay === 'day') ? 'day' : 'night'">
    <div class="weather-container container" v-if="exist">
      <div class="weather-icon text-center">
        <i v-if="timeOfDay === 'day'" class="fas fa-cloud-sun"></i>  <i v-else class="fas fa-cloud-moon"></i>
      </div>
      <div class="weather-data container">
        <div class="row">
          <div class="data-box temperature">
            {{weather2.current.temp}}&ordm;C
          </div>
          <div class="data-box d-flex">
            <div class="wind text-justify">{{weather2.current.wind_speed}}km/h</div>
            <div class="humidity text-justify">{{weather2.current.humidity}}%</div>
          </div>
          <div class="data-box description d-flex align-items-end">
            <span>{{weather2.current.weather[0].description}}</span>
          </div> 
        </div>
      </div>
      <div class="location-data container">
        <div class="location-box">
          <i class="fas fa-map-marker-alt"></i> {{weather2.timezone}}
        </div>
        <div class="location-box d-flex">
          <div class="date">
            {{new Date().toDateString()}}
          </div>
          <div class="time">
            {{new Date().getHours()}}:{{new Date().getMinutes()}}
          </div>
        </div>
      </div>
    </div>
    <div class="weather-container container" v-else>
      <h2>Hello!</h2>
      <h3>Search weather today by city name.</h3>
      <h2><i class="fas fa-search"></i></h2>
    </div>
  </div>
</template>

<script>

export default {
  
  name: 'CurrentDay',
  props: ['weather2', 'exist'],
  data: function() {
    return {
      timeOfDay: 'day'
    }
  },

  methods: {
    dayOrNight() {
      const time = new Date().getHours();
      if(time >= 18 || time < 5) {

        this.timeOfDay = 'night'
      } else {

        this.timeOfDay = 'day'
      }
    }
  },
  created: function () {
    this.dayOrNight();
  }
}
</script>

<style scoped>

  .temperature {
    font-size: 2.5rem;
  }
  .location-box {
    padding-top: 2px;
    padding-bottom: 2px;
    justify-content: space-between;
  }
  .location-box:first-of-type {
    border-bottom: 2px solid #d1ab13;
  }
</style>
