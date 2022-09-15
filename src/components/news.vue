<template>
    <div class="news">
        <div class="button__arrow_left"></div>
        <div class="container__news">
            <p class="news__description">
                The team at McKinley always delivers thoughtful and 
                professional legal services in a timely manner.
            </p>
        </div>
        <div class="button__arrow_right"></div>
    </div>
</template>

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

    .button__arrow_left {
        position: absolute;
        height: 25px;
        left: 0%;
        right: 99.29%;
        top: calc(50% - 25px/2 + 0.3px);

        background: url(../assets/arrow_left.png);
        border-radius: 0px;
    }
</style>
