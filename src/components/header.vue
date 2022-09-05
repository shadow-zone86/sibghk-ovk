<template>
    <div class="header">
        <div class="header__rectangle"></div>
        <div class="container">
            <div class="header__logo"></div>
        </div>
    </div>
</template>

<style scoped>
    .header {
        position: absolute;
        height: 108px;
        left: 0%;
        right: 0%;
        top: 51px;
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

    .container {
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
        top: calc(50% - 31px/2 + 2px);

        background: url(../assets/logo.png);
        border-radius: 0px;
    }
</style>