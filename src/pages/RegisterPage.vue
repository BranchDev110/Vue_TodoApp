<script setup>
import useValidate from '@vuelidate/core';
import { mapState } from 'vuex';
import { required, email, minLength } from '@vuelidate/validators';
import { createUser } from '../services/auth';
import LoadingComponent from '../components/LoadingComponent.vue';
</script>

<script>
import { NOTIFICATION_ERROR, NOTIFICATION_SUCCESS } from '../utils/constant';
export default {
  components: { LoadingComponent },
  data() {
    return {
      v$: useValidate(),
      emailValue: '',
      password: '',
      confirm: '',
    }
  },
  computed: {
    ...mapState(['loading'])
  },
  validations() {
    return {
      emailValue: { required, email },
      password: { required, minLength: minLength(6) },
      confirm: { required, minLength: minLength(6) },
    }
  },
  methods: {
    async handleSubmit(event) {
      event.preventDefault();
      this.v$.$validate();
      if(this.v$.$error) return ;
      this.$store.dispatch('loading/changeLoadingState');
      try {
        await createUser(this.emailValue, this.password); 
        this.$store.dispatch('notifications/addNotification', {id: 1, title: 'Info', content: 'User info is created successfully!', type: NOTIFICATION_SUCCESS, isCompleted: false})
        this.$router.push('/login');
      } catch (error) {
        this.$store.dispatch('notifications/addNotification', {id: 1, title: 'Error', content: 'User creation failed!', type: NOTIFICATION_ERROR, isCompleted: false})
      }
      this.$store.dispatch('loading/changeLoadingState');
    },
  }
}
</script>
<template>
  <section class="flex flex-col w-screen h-screen bg-gray-900 items-center p-10">
    <loading-component v-if="loading.value"></loading-component>
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
      <div>
        <label
          for="confirm-password"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Confirm password</label
        >
        <input
          type="confirm-password"
          name="confirm-password"
          id="confirm-password"
          placeholder="••••••••"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          v-model="confirm"
          required=""
        />
      </div>
      <div class="flex items-start">
        <div class="flex items-center h-5">
          <input
            id="terms"
            aria-describedby="terms"
            type="checkbox"
            class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
            required=""
          />
        </div>
        <div class="ml-3 text-sm">
          <label for="terms" class="font-light text-gray-500 dark:text-gray-300"
            >I accept the
            <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#"
              >Terms and Conditions</a
            ></label
          >
        </div>
      </div>
      <button
        type="submit"
        class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        @click="handleSubmit"
      >
        Create an account
      </button>
      <p class="text-sm font-light text-gray-500 dark:text-gray-400">
        Already have an account?
        <router-link to="/login">
          <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >Login here</a
          >
        </router-link>
      </p>
    </form>
  </section>
</template>
