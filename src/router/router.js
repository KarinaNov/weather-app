import Home from '@/pages/Home'
import WeatherWeek from '@/pages/WeatherWeek'
import { createRouter, createWebHistory } from "vue-router"
import NotFound from '@/pages/NotFound'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/week',
        component: WeatherWeek
    },
    { path: '/:pathMatch(.*)*', component: NotFound },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;