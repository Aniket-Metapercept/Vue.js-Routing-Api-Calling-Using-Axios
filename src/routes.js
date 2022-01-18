import {createWebHistory,createRouter} from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import PageNotFound from './components/PageNotFound.vue'

const routes =[
    { name:"Home",path:'/',component:Home } ,
    {  name:"about",path:'/about',component:About },
    {  name:"contact",path:'/contact',component:Contact },
    {  name:"user_about",path:'/about/:name',component:About },
    {  name:"not Found",path:'/:pathMatch(.*)*',component:PageNotFound },
]

const router = createRouter({history:createWebHistory(),routes})

export default router