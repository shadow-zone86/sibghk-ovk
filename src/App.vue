<template>
  <div id="content" class="app-apptest">
		<AppContent>
      <div id="app">
        <Header />
        <Banner />
        <Document />
        <NewDays />
        <News />
      </div>
    </AppContent>
	</div>
</template>

<script>
import AppContent from '@nextcloud/vue/dist/Components/AppContent'
import Header from './components/header.vue'
import Banner from './components/banner.vue'
import Document from './components/document.vue'
import NewDays from './components/new-days.vue'
import News from './components/news.vue'

export default {
  name: 'app',
  components: {
		AppContent,
    Header,
    Banner,
    Document,
    NewDays,
    News
	},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
		actionDelete() {
			alert('Delete')
		},
	},
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
