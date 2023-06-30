<script>
import {NOTIFICATION_WARNING, NOTIFICATION_ERROR} from '../utils/constant';

export default {
  data() {
    return {
      isAnim: true
    }
  },
  props: ['notification', 'updateNotification', 'index'],
  methods: {
    animend () {
      this.isAnim = false;
      this.updateNotification();
    }
  },
  computed: {
    containerStyle () {
      const warning = 'bg-orange-100 border-orange-500 text-orange-700';
      const error = 'bg-red-100 border-red-500 text-red-700';
      const success = 'bg-teal-100 border-teal-500 text-teal-700';

      if(this.notification.type === NOTIFICATION_WARNING) return warning;
      else if(this.notification.type === NOTIFICATION_ERROR) return error;
      return success;
    },
    animationStyle() {
      return this.isAnim ? 'notification_show_anim' : 'notification_hide_anim';
    },
    positionStyle() {
      return `top-[${this.index * 200}px]`;
    },
    notificationStyle() {
      return this.containerStyle + ' ' + this.animationStyle + ' ' + this.positionStyle
    }
  }
}
</script>
<template>
  <div class="border-l-4 w-full" :class="notificationStyle" role="alert">
    <div class="p-4">
      <p class="font-bold">{{notification.title}}</p>
      <p>{{notification.content}}</p>
    </div>
    <div class="w-full h-1.5 bg-gray-300 opacity-50">
      <div class="w-full h-full progress_notification_anim bg-gray-500 opacity-60" v-on:animationend="animend">
      </div>
    </div>
  </div>
</template>