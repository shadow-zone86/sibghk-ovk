<template>
    <div class="news">
        <div class="button__arrow_left" @click="showNews(0)"></div>
        <div class="container__news">
            <p class="news__description" @click="showModal = true">{{ $store.getters.getNewsDescription }}</p>
        </div>
        <div class="button__arrow_right" @click="showNews(1)"></div>
		<NcModal
			v-if="showModal"
			@close="showModal = false"
			size="normal"
            dark>
            <div style="background-color: azure">{{ $store.getters.getNews[$store.getters.getKey].description }}</div>
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
            showModal: false
        }
    },
    created () {
        this.description()
        this.$store.dispatch('actionAllNews', 1)
    },
    methods: {
        showNews(click) {
            this.$store.dispatch('actionKey', click)
            this.description()
        },
        description() {
            this.$store.dispatch('actionDescription', this.$store.getters.getKey)
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
