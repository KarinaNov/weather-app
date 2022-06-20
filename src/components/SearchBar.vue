<template>
  <nav class="navbar navbar-expand-lg navbar-dark rgba-black-strong fixed-top">
    <MyNavbar></MyNavbar>
    <form class="form-inline" @submit.prevent="getData">
      <div class="container-fluid">
        <div class="row">
          <div class="col-8">
            <div class="md-form" v-bind:class="{ error_city: errorCity }">
              <input
                class="form-control"
                type="text"
                placeholder="Search"
                aria-label="Search"
                v-model="city"
              />
            </div>
          </div>
          <div class="col-4">
            <button class="btn btn-outline-white btn-sm" type="submit">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    </form>
  </nav>
</template>

<script>
import MyNavbar from "@/components/MyNavbar";
export default {
  name: "SearchBar",
  data: function () {
    return {
      city: "",
      errorCity: false,
      weather: {},
    };
  },
  methods: {
    getData() {
      this.axios
        .get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${this.city}&exclude=daily&APPID=38edd8cbc178071c11ab3d91cb7decc1&units=metric`
        )
        .then((response) => {
          return response.data;
        })
        .then((data) => {
          this.weather = data;
          console.log(this.weather);
          this.$emit("dataFetched", this.weather);
        })
        .catch((error) => {
          return error;
        });
      if (this.city == "") {
        this.errorCity = true;
      } else {this.errorCity = false;}

      this.city = "";
    },
  },
  components: {
    MyNavbar,
  },
};
</script>

<style scoped>
.navbar {
  font-weight: 300;
  -webkit-box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%),
    0 2px 10px 0 rgb(0 0 0 / 12%);
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
}

.rgba-black-strong,
.rgba-black-strong:after {
  background-color: rgba(54, 54, 54, 0.8);
}
.fixed-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}
.navbar {
  position: relative;
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-align: center;
  -webkit-box-align: center;
  align-items: center;
  -ms-flex-pack: justify;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 0.5rem 1rem;
}
.ml-auto,
.mx-auto {
  margin-left: auto !important;
}
.form-control {
  color: white;
}
input.form-control[type="text"]:focus:not([readonly]) {
  border-bottom: 1px solid white;
  -webkit-box-shadow: 0 1px 0 0 white;
  box-shadow: 0 1px 0 0 white;
}
.error_city {
  position: relative;
  display: block;
}
.error_city::before {
  content: "Insert city";
  position: absolute;
  color: rgb(203, 15, 15);;
  width: 160px;
  height: 50px;
  bottom: -60px;
  left: 0;
  font-size: 20px;
    background-color: #555;
    text-align: center;
    border-radius: 6px;
    padding: 8px 0;
}
.error_city::after {
    content: "";
    position: absolute;
    bottom: -20px;
    left: 42%;
    border-width: 15px;
     transform: rotate(-180deg);
    border-style: solid;
    border-color: #555 transparent transparent transparent;
}
</style>
