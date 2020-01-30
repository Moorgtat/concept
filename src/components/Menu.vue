<template>
    <div id="Menu">
        <div class="first-half"></div>
        <div class="perfect-mid">
            <p>Menu</p>
        </div>
        <div class="second-half"></div>
    </div>
</template>

<script>
    export default {
        name: "Menu"
    }
</script>

<style scoped>
    #Menu{
        height: 100vh;
        width: 100%;
        color: white;
        text-align: center
    }
    .first-half{
        background-color: goldenrod;
        height: 50%;
        width: 100%;
    }
    .second-half{
        background-color: white;
        height: 50%;
        width: 100%;
    }
    .perfect-mid {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 60px;
        width: 180px;
        background-color: white;
        font-size: 26px;
        color: black;
        z-index: 5;
    }
</style>