<script>
import { mapState } from 'vuex'

import TodoSVG from '@/assets/todo.svg';
import CalendarSVG from '@/assets/calendar.svg';
import FocusSVG from '@/assets/focus.svg';
import CalendarContainerVue from '../containers/CalendarContainer.vue';
import TodoContainerVue from '../containers/TodoContainer.vue';
import FocusContainerVue from '../containers/FocusContainer.vue';

export default {
  computed: {
    ...mapState(['user'])
  },
  mounted() {
    if(!this.user.isLoggedin) this.$router.push('/login');
  },
  setup() {
    return {
      TodoSVG, CalendarSVG, FocusSVG
    }
  },
  data() {
    return {
      page: 0,
      containers: [CalendarContainerVue, TodoContainerVue, FocusContainerVue]
    }
  },
  methods: {
    handleItemClick(page) {
      this.page = page;
    }
  }
}
</script>
<template>
  <div class="flex flex-col w-screen h-screen bg-gray-900">
    <div class="flex flex-1 w-2/3 ">
      <component :is="containers[page]" />
    </div>
    <button class="btn w-64 rounded-full">Button</button>

    <div class="btm-nav">
      <button class='text-primary' :class="page === 0 && 'active'" @click="handleItemClick(0)">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
      </button>
      <button class="text-primary" :class="page === 1 && 'active'" @click="handleItemClick(1)">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      </button>
      <button class="text-primary" :class="page === 2 && 'active'" @click="handleItemClick(2)">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
      </button>
    </div>
  </div>
</template>