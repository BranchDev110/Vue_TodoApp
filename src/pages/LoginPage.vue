<script>
import { signIn } from '../services/auth';
import { NOTIFICATION_ERROR, NOTIFICATION_SUCCESS } from '../utils/constant';
export default {
  data() {
   return {
     emailValue: '',
     password: ''
   }
  },
  methods: {
    async handleSubmit(event) {
      event.preventDefault();
      try {
        const { user } = await signIn(this.emailValue, this.password);
        this.$store.dispatch('user/setLogin', user);
        this.$store.dispatch('notifications/addNotification', {id: 1, title: 'Info', content: 'User logs in successfully!', type: NOTIFICATION_SUCCESS, isCompleted: false})
        this.$router.push('/');
      } catch (error) {
        this.$store.dispatch('notifications/addNotification', {id: 1, title: 'Error', content: 'User Login failed!', type: NOTIFICATION_ERROR, isCompleted: false})
      }
    }
  }
}
</script>
<template>
  <section class="flex flex-col w-screen h-screen bg-gray-900 items-center p-10 overflow-hidden">
    <img src="../assets/logo-no-background.png" alt="Logo" width="200" height="200"/>
    <p class="text-gray-200 text-2xl my-6">TodoMaster</p>
    <form class="space-y-4 w-96">
      <div>
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Email</label
        >
        <input
          type="email"
          name="email"
          id="email"
          placeholder="steve.jobs@apple.com"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          v-model="emailValue"
          required=""
        />
      </div>
      <div>
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Password</label
        >
        <input
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          v-model="password"
          required=""
        />
      </div>
      <button
        type="submit"
        class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        @click="handleSubmit"
      >
        Login
      </button>
      <p class="text-sm font-light text-gray-500 dark:text-gray-400">
        Don't have an account?
        <router-link to="/register">
          <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >Register here</a
          >
        </router-link>
      </p>
    </form>
  </section>
</template>
