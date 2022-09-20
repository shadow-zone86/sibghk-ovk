<template>
    <div class="news">
        <div class="button__arrow_left" @click="down()"></div>
        <div class="container__news">
            <p class="news__description" @click="showModal = true">{{ newsDescription }}</p>
        </div>
        <div class="button__arrow_right" @click="next()"></div>
		<NcModal
			v-if="showModal"
			@close="showModal = false"
			size="normal"
            dark>
			<div style="background-color: azure">{{ news[key].description }}</div>
		</NcModal>
    </div>
</template>

<script>
import NcModal from '@nextcloud/vue/dist/Components/Modal'

export default {
    name: 'news',
    components: {
        NcModal
    },
    data () {
        return {
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
            showModal: false
        }
    },
    created () {
        this.description()
        this.allNews = (Object.keys(this.news).length) - 1
    },
    methods: {
        next() {
            (this.key < this.allNews) ? this.key++ : this.key=0
            this.description()
        },
        down() {
            (this.key > 0) ? this.key-- : this.key=this.allNews
            this.description()
        },
        description() {
            this.newsDescription = this.news[this.key].header
        }
    }
}
</script>


<style scoped>
    .news {
        position: absolute;
        height: 620px;
        left: 5.9%;
        right: 5.9%;
        top: 2562.2px;
    }

    .button__arrow_right {
        position: absolute;
        width: 80px;
        height: 620px;
        right: 0px;
        top: -0.2px;

        background: url(../assets/arrow_right.png);
        border-radius: 0px;
    }

    .button__arrow_right:hover {
        cursor: pointer;
    }

    .container__news {
        position: absolute;
        height: 300px;
        left: 0%;
        right: 0%;
        top: 160px;
    }

    .news__description {
        position: absolute;
        width: 723px;
        height: 103px;
        left: calc(50% - 723px/2 + 0.5px);
        top: calc(35% - 103px/2 + 3.5px);

        font-family: 'DM Serif Text';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 51px;

        text-align: center;

        color: #00486D;
    }

    .news__description:hover {
        cursor: pointer;
        color: black;
    }

    .button__arrow_left {
        position: absolute;
        height: 25px;
        left: 0%;
        right: 99.6%;
        top: calc(50% - 25px/2 + 0.3px);
        z-index: 1;

        background: url(../assets/arrow_left.png);
        border-radius: 0px;
    }

    .button__arrow_left:hover {
        cursor: pointer;
    }
</style>
