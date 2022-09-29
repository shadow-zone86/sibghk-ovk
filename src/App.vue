<template>
  <div id="content" class="app-apptest">
		<AppContent>
      <div id="app">
        <ZeroBlock ref="zero-block" />
        <div class="wrap-header">
          <div class="header__rectangle"></div>
          <div class="header__container">
            <div class="header__logo">
              <div class="logo"></div>
            </div>
            <div class="menu">
              <div class="menu_about">
                <a @click="scrollTo('banner')" class="menu__about_description">{{ menu.about }}</a>
              </div>
              <div class="menu_document">
                <a @click="scrollTo('document')" class="menu__document_description">{{ menu.document }}</a>
              </div>
              <div class="menu_guide">
                <a @click="scrollTo('guide')" class="menu__guide_description">{{ menu.guide }}</a>
              </div>
              <div class="menu_news">
                <a @click="scrollTo('news')" class="menu__news_description">{{ menu.news }}</a>
              </div>
              <div class="menu_personnel">
                <a @click="scrollTo('personnel')" class="menu__personnel_description">{{ menu.personnel }}</a>
              </div>
            </div>
            <div class="block__feedback">
              <div class="feedback__button">
                <button class="button__blue">{{ $store.getters.getButton[2].name }}</button>
              </div>
            </div>
          </div>
        </div>
        <Banner ref="banner" />
        <Document ref="document" />
        <Guide ref="guide" />
        <News ref="news" />
        <Personnel ref="personnel" />
        <Footer ref="footer" />
      </div>
    </AppContent>
	</div>
</template>

<script>
import AppContent from '@nextcloud/vue/dist/Components/AppContent'
import ZeroBlock from './components/zero-block.vue'
import Banner from './components/banner.vue'
import Document from './components/document.vue'
import Guide from './components/guide.vue'
import News from './components/news.vue'
import Personnel from './components/personnel.vue'
import Footer from './components/footer.vue'

export default {
  name: 'app',
  components: {
		AppContent,
    ZeroBlock,
    Banner,
    Document,
    Guide,
    News,
    Personnel,
    Footer
	},
  data () {
    return {
      menu: {
        about: 'О нас',
        document: 'Документы',
        guide: 'Руководство',
        news: 'Новости',
        personnel: 'Сотрудники'
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

  .wrap-header {
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

  .header__container {
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
    top: calc(65% - 31px/2 + 2px);

    border-radius: 0px;
  }

  .logo {
    position: absolute;
    left: 15.5%;
    right: -9.8%;
    top: -74.6%;
    bottom: 0%;
    background: url(./assets/logo2.png);
    background-size: 120px 70px;
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

  .menu_document {
    position: absolute;
    height: 45px;
    left: 26.85%;
    right: 59.11%;
    top: 0px;
  }

  .menu__document_description {
    position: absolute;
    height: 35px;
    left: 0%;
    right: 0%;
    top: 0px;

    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 35px;

    color: #00486D;

    text-decoration: none;
  }

  .menu__document_description:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .menu_guide {
    position: absolute;
    height: 45px;
    left: 66.77%;
    right: 10%;
    top: 0px;
  }

  .menu__guide_description {
    position: absolute;
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

  .menu__guide_description:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .menu_news {
    position: absolute;
    height: 45px;
    left: 106.7%;
    right: 7.88%;
    top: 0px;
  }

  .menu__news_description {
    position: absolute;
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

  .menu__news_description:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .menu_personnel {
    position: absolute;
    height: 45px;
    left: 140.7%;
    right: 7.88%;
    top: 0px;
  }

  .menu__personnel_description {
    position: absolute;
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

  .menu__personnel_description:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .block__feedback {
    position: absolute;
    height: 59px;
    left: 68.9%;
    right: 0%;
    top: calc(50% - 59px/2);
  }

  .feedback__button {
    position: absolute;
    height: 59px;
    left: 56.8%;
    right: 0%;
    top: calc(50% - 59px/2);
  }

  .button__blue {
    position: absolute;
    height: 39px;
    left: 0%;
    right: 0%;
    top: 13px;
        
    appearance: none;
    border: 0;
    border-radius: 5px;
    color: #F2F6F7;
    background: #00486D;
    padding: 8px 16px;
    font-size: 16px;
    font-family: 'DM Serif Text';
  }

  .button__blue:hover {
    cursor: pointer;
	  background-color: #1976d2;
	}
</style>
