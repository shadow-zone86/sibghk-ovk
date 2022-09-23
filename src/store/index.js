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
        allNews: 0,
        headerDocumant: {
            header: 'Документы',
            description: 'Нормативно-правовые акты, устанавливающие статус, функции, права, обязанности и ответственность ОВК, а так же акты, которыми ОВК руководствуется в своей деятельности'
        },
        blockDocument: {
            right: {
                header: '',
                description: 'Документы по деятельности ОВК'
            },
            center: {
                header: '',
                description: 'Документы по применению мер ответственности'
            },
            left: {
                header: '',
                description: 'Положение об ОВК'
            }
        },
        learnMore: 'Подробнее',
        allDocument: {
            0: {
                0: {
                    name: 'ЕОМУ по ЭАМ',
                    alt: '001'
                },
                1: {
                    name: 'ЕОП проведения проверки',
                    alt: '002'
                },
                2: {
                    name: 'Порядок по ВА',
                    alt: '003'
                },
                3: {
                    name: 'Регламент планирования КМ и проведения проверок ОВК ГХК',
                    alt: '004'
                }
            },
            1: {
                0: {
                    name: 'Приказ ГК от 04.03.16 № 1-186-П  внесение изм в пр ГК меры воздейст исп дисц 1-534-П',
                    alt: '005'
                },
                1: {
                    name: 'Приказ ГК от 05.06.15 № 534-п об утверждении ЕОМР исп дисц',
                    alt: '006'
                },
                2: {
                    name: 'Приказ ГК от 25.01.17 № 1-52-П изм. ЕОМР и отмена 417-П',
                    alt: '007'
                },
                3: {
                    name: 'Приказ ГК от 29.07.16 № 1-696-П изм ЕОМР меры за исполн дисципд',
                    alt: '008'
                }
            },
            2: {
                0: {
                    name: '01-38.001-2018 Положение об ОВК',
                    alt: '009'
                }
            }
        },
        documentActive: {}
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
        },
        setDocumentActive(state, click) {
            state.documentActive = state.allDocument[click]
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
        },
        actionDocumentActive(ctx, click) {
            ctx.commit('setDocumentActive', click)
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
        },
        getHeaderDocument(state) {
            return state.headerDocumant
        },
        getBlockDocument(state) {
            return state.blockDocument
        },
        getLearnMore(state) {
            return state.learnMore
        },
        getDocument(state) {
            return state.documentActive
        }
    }
})