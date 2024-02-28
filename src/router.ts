// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Homepage from './components/Homepage.vue';
import Leaderboard from './components/leaderboard/Leaderboard.vue';
import Profilepage from './components/profile/Profilepage.vue';
import About from './components/about/About.vue';


const routes = [
  { path: '/', component: Homepage },
  { path: '/leaderboard', component: Leaderboard },
  { path: '/about', component: About },
  { path: '/:user', component: Profilepage },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
