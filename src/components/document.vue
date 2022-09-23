<template>
    <div class="document">
        <div class="container__description">
            <p class="text__header">{{ $store.getters.getHeaderDocument.header }}</p>
            <p class="text__description">{{ $store.getters.getHeaderDocument.description }}</p>
        </div>
        <div class="block">
            <div class="container__block_right">
                <div class="container__rectangle_right"></div>
                <div class="container__picture_right"></div>
                <p class="container__header_right">{{ $store.getters.getBlockDocument.right.header }}</p>
                <p class="container__description_right">{{ $store.getters.getBlockDocument.right.description }}</p>
                <div class="container__button_right">
                    <p class="button__text_right" @click="showDocument(0)">{{ $store.getters.getLearnMore }}</p>
                </div>
            </div>
            <div class="container__block_center">
                <div class="container__rectangle_center"></div>
                <div class="container__picture_center"></div>
                <p class="container__header_center">{{ $store.getters.getBlockDocument.center.header }}</p>
                <p class="container__description_center">{{ $store.getters.getBlockDocument.center.description }}</p>
                <div class="container__button_center">
                    <p class="button__text_center" @click="showDocument(1)">{{ $store.getters.getLearnMore }}</p>
                </div>
            </div>
            <div class="container__block_left">
                <div class="container__rectangle_left"></div>
                <div class="container__picture_left"></div>
                <p class="container__header_left">{{ $store.getters.getBlockDocument.left.header }}</p>
                <p class="container__description_left">{{ $store.getters.getBlockDocument.left.description }}</p>
            </div>
            <div class="container__button_left">
                <p class="button__text_left" @click="showDocument(2)">{{ $store.getters.getLearnMore }}</p>
            </div>
        </div>
		<NcModal
			v-if="showModal"
			@close="showModal = false"
			size="normal"
            dark>
            <div style="background-color: azure">
                <li v-for="(value, name, index) in $store.getters.getDocument" :key="index">
                    <a @click="getDocument(value.alt)">{{ value.name }}</a>
                </li>
            </div>
		</NcModal>
    </div>
</template>

<script>
import NcModal from '@nextcloud/vue/dist/Components/Modal'

export default {
    name: 'document',
    components: {
        NcModal
    },
    data () {
        return {
            showModal: false
        }
    },
    methods: {
        showDocument(click) {
            this.$store.dispatch('actionDocumentActive', click)
            this.showModal = true
        },
        getDocument (name) {
            window.open('src/static/document/' + name + '.pdf', '_blank')
        }
    }
}
</script>

<style scoped>
    .document {
        position: absolute;
        height: 650px;
        left: 3.12%;
        right: 3.12%;
        top: 1072px;
    }

    .container__description {
        position: absolute;
        height: 152px;
        left: 2.96%;
        right: 50%;
        top: -33px;
    }

    .text__header {
        position: absolute;
        height: 53px;
        left: 0%;
        right: 48.03%;
        top: -5px;

        font-family: 'DM Serif Text';
        font-style: normal;
        font-weight: 400;
        font-size: 44px;
        line-height: 53px;

        color: #00486D;
    }

    .text__description {
        position: absolute;
        height: 84px;
        left: 0%;
        right: 4.72%;
        top: 73px;

        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 42px;

        color: #00486D;
    }

    .block {
        position: absolute;
        height: 442px;
        left: 2.96%;
        right: 2.96%;
        top: 208px;
    }

    .container__block_right {
        position: absolute;
        height: 442px;
        left: 0%;
        right: 68.74%;
        top: 0px;
    }

    .container__rectangle_right {
        box-sizing: border-box;

        position: absolute;
        height: 442px;
        left: 0%;
        right: 0%;
        top: 0px;

        background: #FFFFFF;
        border: 1px solid #E4ECF0;
        box-shadow: 0px 24px 24px rgba(0, 72, 109, 0.2);
        border-radius: 2px;
    }

    .container__picture_right {
        position: absolute;
        height: 64px;
        left: 8.31%;
        right: 80%;
        top: 41px;

        background: url(../assets/www.png);
        border-radius: 0px;
    }

    .container__header_right {
        position: absolute;
        height: 33px;
        left: 8.31%;
        right: 38.29%;
        top: 145px;

        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 33px;

        color: #00486D;
    }

    .container__description_right {
        position: absolute;
        height: 140px;
        left: 8.31%;
        right: 9.07%;
        top: 190px;

        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 35px;

        color: #00486D;
    }

    .container__button_right {
        position: absolute;
        height: 35px;
        left: 8.31%;
        right: 58.94%;
        top: 366px;
    }

    .button__text_right {
        position: absolute;
        height: 35px;
        left: 0%;
        right: 20.77%;
        top: calc(50% - 35px/2);

        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 19px;
        line-height: 35px;

        color: #00486D;
    }

    .button__text_right:hover {
        cursor: pointer;
        color: black;
    }

    .container__block_center {
        position: absolute;
        height: 442px;
        left: 34.41%;
        right: 34.33%;
        top: 0px;
    }

    .container__rectangle_center {
        box-sizing: border-box;

        position: absolute;
        height: 442px;
        left: 0%;
        right: 0%;
        top: 0px;

        background: #FFFFFF;
        border: 1px solid #E4ECF0;
        box-shadow: 0px 24px 24px rgba(0, 72, 109, 0.2);
        border-radius: 2px;
    }

    .container__picture_center {
        position: absolute;
        height: 64px;
        left: 8.31%;
        right: 82.3%;
        top: 41px;

        background: url(../assets/vector.png);
        border-radius: 0px;
    }

    .container__header_center {
        position: absolute;
        height: 33px;
        left: 8.31%;
        right: 62.72%;
        top: 145px;

        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 33px;

        color: #00486D;
    }

    .container__description_center {
        position: absolute;
        height: 105px;
        left: 8.31%;
        right: 14.86%;
        top: 190px;

        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 35px;

        color: #00486D;
    }

    .container__button_center {
        position: absolute;
        height: 35px;
        left: 8.23%;
        right: 59.03%;
        top: 366px;
    }

    .button__text_center {
        position: absolute;
        height: 35px;
        left: 0.26%;
        right: 20.5%;
        top: calc(50% - 35px/2);

        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 19px;
        line-height: 35px;

        color: #00486D;
    }

    .button__text_center:hover {
        cursor: pointer;
        color: black;
    }

    .container__block_left {
        position: absolute;
        height: 442px;
        left: 68.74%;
        right: 0%;
        top: 0px;
    }

    .container__rectangle_left {
        box-sizing: border-box;

        position: absolute;
        height: 442px;
        left: 0%;
        right: 0%;
        top: 0px;

        background: #FFFFFF;
        border: 1px solid #E4ECF0;
        box-shadow: 0px 24px 24px rgba(0, 72, 109, 0.2);
        border-radius: 2px;
    }

    .container__picture_left {
        position: absolute;
        height: 48px;
        left: 8.31%;
        right: 79.5%;
        top: 41px;

        background: url(../assets/book.png);
        border-radius: 0px;
    }

    .container__header_left {
        position: absolute;
        height: 33px;
        left: 8.31%;
        right: 71.03%;
        top: 145px;

        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 33px;

        color: #00486D;
    }

    .container__description_left {
        position: absolute;
        height: 105px;
        left: 8.31%;
        right: 12.34%;
        top: 190px;

        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 35px;

        color: #00486D;
    }

    .container__button_left {
        position: absolute;
        height: 35px;
        left: 72%;
        right: -1.0%;
        top: 366px;
    }

    .button__text_left {
        position: absolute;
        height: 35px;
        left: -0.24%;
        right: 21.01%;
        top: calc(50% - 35px/2);

        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 19px;
        line-height: 35px;

        color: #00486D;
    }

    .button__text_left:hover {
        cursor: pointer;
        color: black;
    }

    a {
        color: black;
        text-decoration: none;
    }

    a:hover {
        color: #00486D;
        cursor: pointer;
    }
</style>