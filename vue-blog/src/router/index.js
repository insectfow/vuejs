import Vue from 'vue'
import VueRouter from 'vue-router';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import NewsView from '../views/NewsView.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    {
        // url 주소
        path: '/ask',
        // url 주소로 갔을때 보여지는 컴포넌트
        component: AskView
    },
    {
        path: '/jobs',
        component: JobsView
    },
    {
        path: '/news',
        component: NewsView
    }
  ]
});
