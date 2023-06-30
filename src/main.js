import './assets/main.css'

import { createApp } from 'vue'
import VueGapi from 'vue-gapi'
import App from './App.vue'
import store from './store'
import router from './router'

createApp(App).use(VueGapi, {
  apiKey: 'AIzaSyDhnvIjtwbpcwOv5mvYgzmjNWwpNeE9XUg',
  clientId: '34540538628-l9tar1jvblkqirp74o7mm176bgrrqbr9.apps.googleusercontent.com',
  discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
  scope: 'https://www.googleapis.com/auth/calendar.readonly',
}).use(store).use(router).mount('#app')
