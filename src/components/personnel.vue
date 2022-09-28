<template>
    <div class="personnel">
        <div class="container__rectangle"></div>
        <div class="block">
            <p class="block__text">{{ $store.getters.getPersonnel }}</p>
            <div class="block__container_up">
                <div class="personnel_left">
                    <div class="personnel__rectangle_left"></div>
                    <div class="personnel__image_left"></div>
                    <div class="personnel__container_left">
                        <p class="personnel__name_left">{{ $store.getters.getPersonnelBlock[0].post }}</p>
                        <p class="personnel__description_left">{{ $store.getters.getPersonnelBlock[0].name }}</p>
                        <div class="text__container_left">
                            <p class="personnel__text_left">{{ $store.getters.getButton[1].name }}</p>
                        </div>
                    </div>
                </div>
                <div class="personnel_center">
                    <div class="personnel__rectangle_center"></div>
                    <div class="personnel__image_center"></div>
                    <div class="personnel__container_center">
                        <p class="personnel__name_center">{{ $store.getters.getPersonnelBlock[1].post }}</p>
                        <p class="personnel__description_center">{{ $store.getters.getPersonnelBlock[1].name }}</p>
                        <div class="text__container_center">
                            <p class="personnel__text_center">{{ $store.getters.getButton[1].name }}</p>
                        </div>
                    </div>
                </div>
                <div class="personnel_right">
                    <div class="personnel__rectangle_right"></div>
                    <div class="personnel__image_right"></div>
                    <div class="personnel__container_right">
                        <p class="personnel__name_right">{{ $store.getters.getPersonnelBlock[2].post }}</p>
                        <p class="personnel__description_right">{{ $store.getters.getPersonnelBlock[2].name }}</p>
                        <div class="text__container_right">
                            <p class="personnel__text_right">{{ $store.getters.getButton[1].name }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="block__container_down">
                <div class="personnel_left">
                    <div class="personnel__rectangle_left"></div>
                    <div class="personnel__image_left-down"></div>
                    <div class="personnel__container_left">
                        <p class="personnel__name_left">{{ $store.getters.getPersonnelBlock[4].post }}</p>
                        <p class="personnel__description_left">{{ $store.getters.getPersonnelBlock[4].name }}</p>
                        <div class="text__container_left">
                            <p class="personnel__text_left">{{ $store.getters.getButton[1].name }}</p>
                        </div>
                    </div>
                </div>
                <div class="personnel_right">
                    <div class="personnel__rectangle_right"></div>
                    <div class="personnel__image_right-down"></div>
                    <div class="personnel__container_right">
                        <p class="personnel__name_right">{{ $store.getters.getPersonnelBlock[5].post }}</p>
                        <p class="personnel__description_right">{{ $store.getters.getPersonnelBlock[5].name }}</p>
                        <div class="text__container_right">
                            <p class="personnel__text_right">{{ $store.getters.getButton[1].name }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .personnel {
        position: absolute;
        height: 938px;
        left: 0%;
        right: 0%;
        top: 3182px;
    }

    .container__rectangle {
        position: absolute;
        height: 938px;
        left: 0%;
        right: 0%;
        top: 0px;

        background: #FFFFFF;
        border-radius: 0px;
    }

    .block {
        position: absolute;
        height: 618.47px;
        left: 3.12%;
        right: 3.12%;
        top: 160.2px;
    }

    .block__text {
        position: absolute;
        height: 53px;
        left: 2.96%;
        right: 75.26%;
        top: -210px;

        font-family: 'DM Serif Text';
        font-style: normal;
        font-weight: 400;
        font-size: 44px;
        line-height: 53px;

        color: #00486D;
    }

    .block__container_up {
        position: absolute;
        height: 510.47px;
        left: 2.96%;
        right: 2.96%;
        top: 108px;
    }

    .personnel_left {
        position: absolute;
        height: 510px;
        left: 0%;
        right: 68.74%;
        top: -0.2px;
    }

    .personnel__rectangle_left {
        box-sizing: border-box;

        position: absolute;
        height: 510px;
        left: 0%;
        right: 14.1%;
        top: 0px;

        background: #FFFFFF;
        border: 1px solid #E4ECF0;
        box-shadow: 0px 24px 24px rgba(0, 72, 109, 0.2);
        border-radius: 2px;
    }

    .personnel__image_left {
        position: absolute;
        height:456px;
        left: 0.2%;
        right: 14.3%;
        top: -191px;

        background: url(../assets/personnel/001.png);
        border-radius: 0px;
        background-size: 450px 700px;
    }

    .personnel__image_left-down {
        position: absolute;
        height:456px;
        left: 0.2%;
        right: 14.3%;
        top: -191px;

        background: url(../assets/personnel/005.png);
        border-radius: 0px;
        background-size: 450px 700px;
    }

    .personnel__container_left {
        position: absolute;
        height: 248px;
        left: 0.25%;
        right: 0.34%;
        top: 261.67px;
    }

    .personnel__name_left {
        position: absolute;
        height: 20px;
        left: 8.11%;
        right: 55.91%;
        top: 39.33px;

        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 19px;

        color: #00486D;
    }

    .personnel__description_left {
        position: absolute;
        height: 66px;
        left: 8.11%;
        right: 17.4%;
        top: 77.33px;

        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 33px;

        color: #00486D;
    }

    .text__container_left {
        position: absolute;
        height: 35px;
        left: 8.11%;
        right: 8.11%;
        top: 173px;
    }

    .personnel__text_left {
        position: absolute;
        height: 35px;
        left: 0%;
        right: 68.85%;
        top: calc(50% - 35px/2 - 0.67px);

        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 19px;
        line-height: 35px;

        color: #00486D;
    }

    .personnel_center {
        position: absolute;
        height: 510px;
        left: 34.41%;
        right: 34.33%;
        top: -0.2px;
    }

    .personnel__rectangle_center {
        box-sizing: border-box;

        position: absolute;
        height: 510px;
        left: 0%;
        right: 14.1%;
        top: 0px;

        background: #FFFFFF;
        border: 1px solid #E4ECF0;
        box-shadow: 0px 24px 24px rgba(0, 72, 109, 0.2);
        border-radius: 2px;
    }

    .personnel__image_center {
        position: absolute;
        height: 456px;
        left: 0.2%;
        right: 14.3%;
        top: -191px;

        background: url(../assets/personnel/002.png);
        border-radius: 0px;
        background-size: 450px 700px;
    }

    .personnel__container_center {
        position: absolute;
        height: 248px;
        left: 0.17%;
        right: 0.43%;
        top: 261.67px;
    }

    .personnel__name_center {
        position: absolute;
        height: 20px;
        left: 8.2%;
        right: 55.32%;
        top: 39.33px;

        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 19px;

        color: #00486D;
    }

    .personnel__description_center {
        position: absolute;
        height: 33px;
        left: 8.2%;
        right: 20.6%;
        top: 75.33px;

        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 33px;

        color: #00486D;
    }

    .text__container_center {
        position: absolute;
        height: 35px;
        left: 8.11%;
        right: 8.11%;
        top: 173px;
    }

    .personnel__text_center {
        position: absolute;
        height: 35px;
        left: 0.1%;
        right: 68.75%;
        top: calc(50% - 35px/2 - 0.67px);

        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 19px;
        line-height: 35px;

        color: #00486D;
    }

    .personnel_right {
        position: absolute;
        height: 510px;
        left: 68.74%;
        right: 0%;
        top: -0.2px;
    }

    .personnel__rectangle_right {
        box-sizing: border-box;

        position: absolute;
        height: 510px;
        left: 0%;
        right: 14.1%;
        top: 0px;

        background: #FFFFFF;
        border: 1px solid #E4ECF0;
        box-shadow: 0px 24px 24px rgba(0, 72, 109, 0.2);
        border-radius: 2px;
    }

    .personnel__image_right {
        position: absolute;
        height: 456px;
        left: 0.2%;
        right: 14.3%;
        top: -191px;

        background: url(../assets/personnel/003.png);
        border-radius: 0px;
        background-size: 450px 700px;
    }

    .personnel__image_right-down {
        position: absolute;
        height: 456px;
        left: 0.2%;
        right: 14.3%;
        top: -191px;

        background: url(../assets/personnel/006.png);
        border-radius: 0px;
        background-size: 450px 700px;
    }

    .personnel__container_right {
        position: absolute;
        height: 248px;
        left: 0.33%;
        right: 0.26%;
        top: 261.67px;
    }

    .personnel__name_right {
        position: absolute;
        height: 20px;
        left: 8.03%;
        right: 55.48%;
        top: 39.33px;

        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 19px;

        color: #00486D;
    }

    .personnel__description_right {
        position: absolute;
        height: 66px;
        left: 8.03%;
        right: 17.73%;
        top: 77.33px;

        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 33px;

        color: #00486D;
    }

    .text__container_right {
        position: absolute;
        height: 35px;
        left: 8.11%;
        right: 8.11%;
        top: 173px;
    }

    .personnel__text_right {
        position: absolute;
        height: 35px;
        left: -0.09%;
        right: 68.94%;
        top: calc(50% - 35px/2 - 0.67px);

        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 19px;
        line-height: 35px;

        color: #00486D;
    }

    .block__container_down {
        position: absolute;
        height: 510.47px;
        left: 2.96%;
        right: 2.96%;
        top: 931px;
    }

    .personnel__text_right:hover {
        cursor: pointer;
        color: black;
    }

    .personnel__text_center:hover {
        cursor: pointer;
        color: black;
    }

    .personnel__text_left:hover {
        cursor: pointer;
        color: black;
    }
</style>