import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        news: {
            0: {
                header: 'На ГХК заработал дополнительный канал коммуникаций с сотрудниками отдела внутреннего контроля',
                description: 'На Горно-химическом комбинате открыт дополнительный канал коммуникации для взаимодействия работников предприятия с отделом внутреннего контроля (ОВК). На канале можно найти нормативно-правовые акты, устанавливающие статус, функции, права, обязанности и ответственность ОВК, а также акты, которыми ОВК руководствуется в своей деятельности. С помощью канала можно узнать о сотрудниках отдела и напрямую обратиться за консультацией.'
            },
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
        documentActive: {},
        personnel: 'Сотрудники',
        personnelBlock: {
            0: {
                name: 'Александрова Наталья Александровна',
                post: 'Ведущий юрисконсульт'
            },
            1: {
                name: 'Бехтгольд Марина Михайловна',
                post: 'Бухгалтер-ревизор'
            },
            2: {
                name: 'Дмитриев Михаил Сергеевич',
                post: 'Начальник отдела'
            },
            3: {
                name: 'Конев Павел Иванович',
                post: 'Заместитель генерального директора предприятия по внутреннему контролю'
            },
            4: {
                name: 'Протопопов Дмитрий Борисович',
                post: 'Инженер'
            },
            5: {
                name: 'Саломатова Елена Ивановна',
                post: 'Специалист по закупкам'
            },
        },
        button: {
            0: {
                name: 'Обратная связь'
            },
            1: {
                name: 'Задай вопрос'
            },
            2: {
                name: 'Получи консультацию'
            }
        },
        footer: '© 2022 Отдел внутреннего контроля'
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
        },
        getPersonnel(state) {
            return state.personnel
        },
        getPersonnelBlock(state) {
            return state.personnelBlock
        },
        getButton(state) {
            return state.button
        },
        getFooter(state) {
            return state.footer
        }
    }
})