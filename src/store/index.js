import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        news: {
            0: {
                header: 'The team at McKinley always delivers thoughtful and professional legal services in a timely manner.',
                description: 'GraphQL is a query language for your API, and a server side runtime for executing queries. A single endpoint can return data about multiple resources, which makes it a great fit for Vue.js single page applications. This article will go over how to build a GraphQL API from scratch, as well as define and implement queries and mutations with custom types. I will use Node.js for the GraphQL server, and make requests and display the results using a Vue.js single page application.'
            },
            1: {
                header: 'GraphQL basics and practical examples with Vue.',
                description: 'Vue is a modern JavaScript framework for building single-page applications. Apollo Client is a fully-fledged GraphQL client and state management library. Using Vue Apollo, we can combine them to substantially improve the developer experience involved in building complex UIs. In this article, we’ll learn how to get started building with Vue, GraphQL, and Apollo Client using the latest versions of Apollo Client and Vue Apollo.'
            },
            2: {
                header: 'Nextcloud trial',
                description: 'Get a feeling for the collaboration platform that helps thousands of modern organizations to secure data and to collaborate across divisions and over company borders. With our trial you will get access to our core applications – Nextcloud Files, Nextcloud Talk, Nextcloud Groupware, and Nextcloud Office. Take some time to explore our user interface and see how Nextcloud can help you to accomplish your tasks! We will follow up with information to guide you on your journey to explore Nextcloud. Note: Your account is valid for 60 minutes.'
            }
        },
        newsDescription: '',
        key: 0,
        allNews: 0
    },
    mutations: {
        setNewsDescription(state, key) {
            state.newsDescription = state.news[key].header
        },
        setAllNews(state, argument) {
            state.allNews = (Object.keys(state.news).length) - argument
        },
        setKey(state, click) {
            switch (click) {
                case 0:
                    (state.key > 0) ? state.key-- : state.key=state.allNews
                    break
                case 1:
                    (state.key < state.allNews) ? state.key++ : state.key=0
                    break
            }
        }
    },
    actions: {
        actionDescription(ctx, key) {
            ctx.commit('setNewsDescription', key)
        },
        actionAllNews(ctx, argument) {
            ctx.commit('setAllNews', argument)
        },
        actionKey(ctx, click) {
            ctx.commit('setKey', click)
        }
    },
    getters: {
        getNews(state) {
            return state.news
        },
        getNewsDescription(state) {
            return state.newsDescription
        },
        getKey(state) {
            return state.key
        },
        getAllNews(state) {
            return state.allNews
        }
    }
})