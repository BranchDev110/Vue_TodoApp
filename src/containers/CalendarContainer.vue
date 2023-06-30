<script>
import VueCal from 'vue-cal'
import moment from 'moment'
import 'vue-cal/dist/vuecal.css'

const CLIENT_ID = '34540538628-l9tar1jvblkqirp74o7mm176bgrrqbr9.apps.googleusercontent.com'
const API_KEY = 'AIzaSyDhnvIjtwbpcwOv5mvYgzmjNWwpNeE9XUg'
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest']
const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly'

export default {
  components: { VueCal },
  created() {
    this.api = this.$gapi
    //this.handleClientLoad();
  },
  methods: {
    handleClientLoad() {
      this.api.load('client:auth2', this.initClient)
    },
    initClient() {
      let vm = this
      vm.api.client
        .init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES
        })
        .then(() => {
          vm.api.auth2.getAuthInstance().isSignedIn.listen(vm.authorized)
        })
    },

    handleAuthClick() {
      Promise.resolve(this.api.auth2.getAuthInstance().signIn()).then(() => {
        this.authorized = true
      })
    },
    handleSignOutClick() {
      Promise.resolve(this.api.auth2.getAuthInstance().signOut()).then(() => {
        this.authorized = false
      })
    },
    getEvents() {
      let vm = this
      vm.api.client.calendar.events
        .list({
          calendarId: 'primary',
          timeMin: moment(this.filters.start).format('YYYY-MM-DDTHH:mm:ss.SZ'),
          timeMax: moment(this.filters.end).format('YYYY-MM-DDTHH:mm:ss.SZ'),
          showDeleted: false,
          singleEvents: true,
          maxResults: 10,
          orderBy: 'startTime'
        })
        .then((response) => {
          this.items = response.result.items
        })
    }
  },
  data() {
    return {
      authorized: false,
      items: undefined,
      filters: {
        start: '2023-05-01',
        end: '2023-05-30'
      },
      events: [
        {
          start: '2018-11-20 14:00',
          end: '2018-11-20 18:00',
          title: 'Need to go shopping',
          icon: 'shopping_cart', // Custom attribute.
          content: 'Click to see my shopping list',
          contentFull:
            'My shopping list is rather long:<br><ul><li>Avocados</li><li>Tomatoes</li><li>Potatoes</li><li>Mangoes</li></ul>', // Custom attribute.
          class: 'leisure'
        },
        {
          start: '2018-11-22 10:00',
          end: '2018-11-22 15:00',
          title: 'Golf with John',
          icon: 'golf_course', // Custom attribute.
          content: 'Do I need to tell how many holes?',
          contentFull: 'Okay.<br>It will be a 18 hole golf course.', // Custom attribute.
          class: 'sport'
        },
        {
          start: '2018-11-22 16:00',
          end: '2018-11-22 18:00',
          title: 'Golf with John',
          icon: 'golf_course', // Custom attribute.
          content: 'Do I need to tell how many holes?',
          contentFull: 'Okay.<br>It will be a 18 hole golf course.', // Custom attribute.
          class: 'sport'
        }
      ]
    }
  }
}
</script>
<template>
  <vue-cal
    selected-date="2018-11-19"
    class="w-full h-96 vuecal--green-theme"
    :disable-views="['years', 'year']"
    active-view="month"
    events-on-month-view="short"
    :events="events"
  />
</template>
