<template>
  <div id="content" class="app-apptest">
		<AppContent>
      <div id="app">
        <ZeroBlock />
        <div class="header">
            <div class="header__rectangle"></div>
            <div class="container">
                <div class="header__logo">
                  <div class="logo"></div>
                </div>
                <div class="menu">
                    <div class="menu_about">
                        <a @click="scrollTo('banner')" class="menu__about_description">{{ menu.about }}</a>
                    </div>
                </div>
            </div>
        </div>
        <Banner ref="banner" />
        <Document ref="document" />
        <NewDays ref="new-days" />
        <News ref="news" />
        <Personnel ref="personnel" />
      </div>
    </AppContent>
	</div>
</template>

<script>
import AppContent from '@nextcloud/vue/dist/Components/AppContent'
import ZeroBlock from './components/zero-block.vue'
import Banner from './components/banner.vue'
import Document from './components/document.vue'
import NewDays from './components/new-days.vue'
import News from './components/news.vue'
import Personnel from './components/personnel.vue'

export default {
  name: 'app',
  components: {
		AppContent,
    ZeroBlock,
    Banner,
    Document,
    NewDays,
    News,
    Personnel
	},
  data () {
    return {
      menu: {
        about: 'О нас'
      }
    }
  },
  methods: {
    scrollTo (menu) {
      window.scrollTo({
        top: this.$refs[menu].$el.offsetTop,
        behavior: 'smooth'
      })
    }
	}
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

  .header {
    position: absolute;
    height: 108px;
    left: 0%;
    right: 0%;
    top: 101px;
    z-index: 1;
  }

  .header__rectangle {
    position: absolute;
    height: 62px;
    left: 0%;
    right: 0%;
    top: -112px;

    background: #F2F6F7;
    border-radius: 0px;
  }

  .container {
    position: absolute;
    height: 62px;
    left: 5.9%;
    right: 5.9%;
    top: -112px;
  }

  .header__logo {
    position: absolute;
    height: 31px;
    left: 0%;
    right: 90.7%;
    top: calc(50% - 31px/2 + 2px);

    border-radius: 0px;
  }

  .logo {
    position: absolute;
    left: 0.52%;
    right: 16.2%;
    top: 1.45%;
    bottom: 0%;

    background: url(./assets/logo.png);
  }

  .menu {
    position: absolute;
    height: 45px;
    left: 13.39%;
    right: 54.65%;
    top: calc(50% - 45px/2 + 4px);
  }

  .menu__about {
    position: absolute;
    height: 45px;
    left: 0%;
    right: 81.03%;
    top: 0px;
  }

  .menu__about_description {
    height: 35px;
    left: 0%;
    right: 0%;
    top: 0px;

    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 35px;

    color: #00486D;

    text-decoration: none;
  }

  .menu__about_description:hover {
    cursor: pointer;
    text-decoration: underline;
  }
</style>
