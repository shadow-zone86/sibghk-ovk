<template>
    <div class="guide">
        <div class="picture"></div>
        <div class="guide__picture"></div>
        <div class="rectangle"></div>
        <div class="block">
            <div class="block__container_blue">
                <div class="block__rectangle_blue"></div>
                <p class="block__header">{{ $store.getters.getPersonnelBlock[3].name }}</p>
                <p class="block__description">{{ $store.getters.getPersonnelBlock[3].post }}</p>
                <div class="block__button">
                    <button class="button">{{ $store.getters.getButton[0].name }}</button>
                </div>
            </div>
        </div>
        <div class="picture_point"></div>
    </div>
</template>

<style scoped>
    .guide {
        position: absolute;
        height: 680.2px;
        left: 5.9%;
        right: 5.9%;
        top: 1882px;
    }

    .guide__picture {
        position: absolute;
        width: 610px;
        height: 680px;
        bottom: 0.2px;

        background: url(../assets/personnel/004.png);
        border-radius: 2px;
        background-size: 610px 900px;
    }

    .picture {
        position: absolute;
        width: 1270px;
        height: 680px;
        bottom: 0.2px;

        background: url(../assets/man.png);
        border-radius: 2px;
    }

    .rectangle {
        position: absolute;
        width: 413px;
        height: 680.2px;
        right: -2px;
        bottom: 0px;

        background: #F2F6F7;
    }

    .block {
        position: absolute;
        width: 423.33px;
        height: 491px;
        right: 0px;
        bottom: 0px;
    }

    .block__container_blue {
        position: absolute;
        height: 491px;
        left: 0.08%;
        right: 0%;
        top: -0.2px;
    }

    .block__rectangle_blue {
        position: absolute;
        height: 491px;
        left: 0%;
        right: 0%;
        top: 0px;

        background: #00486D;
        border-radius: 2px;
        z-index: 1;
    }

    .block__header {
        position: absolute;
        height: 84px;
        left: 13.24%;
        right: 13.8%;
        top: 35px;

        font-family: 'DM Serif Text';
        font-style: normal;
        font-weight: 400;
        font-size: 35px;
        line-height: 42px;

        color: #F2F6F7;
        z-index: 2;
    }

    .block__description {
        position: absolute;
        height: 140px;
        left: 13.24%;
        right: 13.71%;
        top: 160px;

        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 19px;
        line-height: 35px;

        color: #F2F6F7;
        z-index: 3;
    }

    .block__button {
        position: absolute;
        height: 59px;
        left: 13.24%;
        right: 43.97%;
        top: 360px;
        z-index: 4;
    }

    .button {
        position: absolute;
        height: 59px;
        left: 0%;
        right: 0%;
        top: 0;
        
        appearance: none;
        border: 0;
        border-radius: 5px;
        background: #F2F6F7;
        color: #00486D;
        padding: 8px 16px;
        font-size: 16px;
        font-family: 'DM Serif Text';
    }

    .button:hover {
        cursor: pointer;
	    background-color: #1976d2;
	}

    .picture_point {
        position: absolute;
        height: 185px;
        left: 87.7%;
        right: 0%;
        top: 98.8px;

        background: url(../assets/point.png);
        border-radius: 0px;
    }
</style>