<script>
import { mapState } from 'vuex'
import AlertComponent from './AlertComponent.vue'
export default {
  components: { AlertComponent },
  computed: {
    ...mapState(['notifications'])
  },
  methods: {
    updateNotification(id) {
      this.$store.dispatch('notifications/updateNotification', id);
    }
  }
}
</script>
<template>
  <div class="absolute top-0 right-0 w-80 overflow-hidden py-8 px-2" v-for="(notification, index) in notifications.data" :key="notification.id">
    <alert-component v-if="!notification.isCompleted" :notification="notification" :index="index" :updateNotification="() => updateNotification(notification.id)"> </alert-component>
  </div>
</template>