<template>
  <div class="next-day col-3">
    <img
      :src="`http://openweathermap.org/img/wn/${day.data.weather[0].icon}.png`"
      alt="img"
    />
    <div class="div">
      {{ day.name }}
    </div>

    <div class="info">
      <p>{{ day.data.temp.day }}&ordm;C</p>
      <p>{{ day.data.wind_speed }} km/h</p>
      <p>{{ day.data.weather[0].description }}</p>
      <p>{{ day.data.pressure }} hPa</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NextDay",
  props: ["day"],
};
</script>

<style scoped>
.next-day {
  margin-top: 7px;
  margin-bottom: 5px;
  border-right: 1px solid #d1ab13;
  font-size: 0.7rem;
  position: relative;
  cursor: pointer;
}
.info {
  position: absolute;
  top: 200%;
  left: 0;
  right: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  padding: 10px;
  opacity: 0;
  -webkit-transition: all 0.6s ease-in-out;
  -o-transition: all 0.6s ease-in-out;
  transition: all 0.6s ease-in-out;
  z-index: 3;
  border-radius: 2px;
}
.next-day:hover > .info {
  opacity: 1;
  top: -330%;
}
.next-day:last-of-type {
  border: 0;
}
.next-day i {
  font-size: 1.4rem;
}
</style>
