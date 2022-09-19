<template>
    <div class="banner">
        <div class="banner__point_up"></div>
        <div class="container">
            <p class="banner__name">{{ banner.name }}</p>
        </div>
        <div class="container">
            <p class="banner__description">{{ banner.description }}</p>
        </div>
        <div class="frame">
            <div class="banner__point_down"></div>
            <div class="banner__box_image"></div>
        </div>
        <div class="banner__box_blue"></div>
    </div>
</template>

<script>
export default {
    name: 'Banner',
    data () {
        return {
            banner: {
                name: 'Подразделение внутреннего контроля и аудита',
                description: 'Внутренний контроль - это действия направленные на получение уверенности в достижении целей. Система внутреннего контроля - это совокупность действий работников и организационных мер, направленных на достижение стратегических целей, соблюдение законов и ЛНА, обеспечение достоверности информации. Каждый работник часть системы ВК.'
            }
        }
    }
}

</script>

<style scoped>
    .banner {
        position: absolute;
        height: 753px;
        left: 0%;
        right: 0%;
        top: 49px;

        background: #E4ECF0;
        border-radius: 0px;
        text-align: left;
    }

    .banner__point_up {
        position: absolute;
        height: 208px;
        left: 2.01%;
        right: 87.8%;
        top: -152px;

        background: url(../assets/point.png);
        border-radius: 0px;
    }

    .container {
        position: absolute;
        height: 135px;
        left: 6.3%;
        right: 31.65%;
        top: calc(70% - 135px/2 - 154px);
    }

    .banner__name {
        position: absolute;
        height: 135px;
        left: 0%;
        right: 31.65%;
        top: calc(-50% - 135px/2 - 154px);

        font-family: 'DM Serif Text';
        font-style: normal;
        font-weight: 400;
        font-size: 55px;
        line-height: 67px;

        color: #00486D;
    }

    .banner__description {
        position: absolute;
        height: 135px;
        left: 0%;
        right: 31.65%;
        top: calc(40% - 168px/2 + 22.5px);

        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 42px;

        color: #00486D;
    }

    .frame {
        position: absolute;
        height: 753px;
        left: 52.96%;
        right: 0%;
        top: 0px;
        z-index: 100;
    }

    .banner__box_image {
        position: absolute;
        height: 753px;
        left: 0%;
        right: 27%;
        top: 56px;

        background: url(../assets/build.png);
        filter: drop-shadow(0px 32px 24px rgba(0, 72, 109, 0.5));
        border-radius: 0px;
    }

    .banner__point_down {
        position: absolute;
        height: 208px;
        left: -8.82%;
        right: 87.9%;
        top: 657px;

        background: url(../assets/point.png);
        border-radius: 0px;
    }

    .banner__box_blue {
        position: absolute;
        height: 753px;
        left: 60%;
        right: 0%;
        top: 0px;

        background: #00486D;
        border-radius: 0px;
    }
</style>
