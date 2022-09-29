<template>
    <div class="footer">
        <div class="rectangle"></div>
        <p class="text">{{ $store.getters.getFooter }}</p>
    </div>
</template>

<style scoped>
    .footer {
        position: absolute;
        height: 51px;
        left: 0%;
        right: 0%;
        top: 5000px;
    }

    .rectangle {
        position: absolute;
        height: 51px;
        left: 0%;
        right: 0%;
        top: 0px;

        background: #002B41;
        border-radius: 0px;
    }

    .text {
        position: absolute;
        height: 35px;
        left: 1.67%;
        right: 82.43%;
        top: -4px;

        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 35px;

        color: #99B6C5;
    }
</style>