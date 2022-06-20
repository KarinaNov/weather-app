import Vuex from 'vuex'
import axios from 'axios';

let apiKey = "38edd8cbc178071c11ab3d91cb7decc1";
let BASE_URL = `https://api.openweathermap.org/data/2.5/`;

let store = new Vuex.Store({
    state:{
        weather: [],
        results: [],
    },
    mutations: {
        SET_WEATHER: (state, weather) => {
            state.weather = weather;
        }
    },
    actions: {
        GET_WEATHER_API({commit}, query) {
            return axios(`${BASE_URL}forecast?q=${query}&lang=ru&units=metric&appid=${apiKey}`, {
                method: "GET"
            })
            .then((weather) => {
                commit('SET_WEATHER', weather.data);
                console.log(weather.data)
                return weather;
            })
            .catch((error) => {
                console.log(error)
                return error;
            })
        }},
    getter:{
        WEATHER(state){
            return state.weather;
        }
    }
});

export default store;