import Vue from 'vue'
import Router from 'vue-router'
import KanbanPage from '@/components/KanbanPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'KanbanPage',
      component: KanbanPage
    }
  ]
})
