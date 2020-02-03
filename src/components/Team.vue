<template>
    <div id="Team">
        <div class="first-half"></div>
        <div class="perfect-mid">
            <div id="titre">L'équipe</div>
        </div>
        <div class="second-half">
            <div class="texte-container"><p class="texte"> "Concept-One est un site concept pour un restaurant, les parties Menu,
                L'équipe et Nous trouver, reste à personaliser."</p>
            </div>
            <div class="logo">
                <div class="logo-container">
                    <logo></logo>
                </div>
            </div>

        </div>
        <a href="/"> <button class="btn-content"><b>Retour</b></button> </a>
    </div>
</template>

<script>
    import logo from "@/components/svg/logo";
    export default {
        name: "Team",
        components: {
            logo
        }
    }
</script>

<style scoped>
    @import url("https://fonts.googleapis.com/css?family=Sacramento");
    @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');
    #Team{
        height: 100vh;
        width: 100%;
        color: white;
        text-align: center
    }
    .first-half{
        background-image: url("../assets/rest-five.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        height: 50%;
        width: 100%;
    }
    .second-half{
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: white;
        height: 50%;
        width: 100%;
    }
    .perfect-mid {
        display: flex;
        color: black;
        background-color: white;
        position: absolute;
        border: 2px solid black;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 60px;
        width: 180px;
        z-index: 5;
    }
    #titre {
        margin: auto;
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 28px;
    }
    .logo{
        margin-top: 5vh;
    }
    .texte-container{
        margin-bottom: 30px;
    }
    .texte {
        font-family: "Sacramento", sans-serif;
        margin: auto;
        color: black;
        font-size: 28px;
        width: 80%;
    }
    .btn-content {
        position: absolute;
        left: 90%;
        top: 90%;
        outline-style:none;
        transition: ease-in .2s;
        background-color: white;
        height: 35px;
        width: 65px;
        border: black 1px solid;
        border-radius: 8px;
        color: black;
        text-align: center;
        font-size: 10px;
    }

    .btn-content:hover {
        background-color: rgba(255,140,0,0.1);
    }

    @media (max-height: 500px) {
        .perfect-mid{
            top:30%;
        }

        .texte{
            margin-top: 15px;
        }
        .texte-container{
            margin: 0;
        }
    }

    @media (max-width: 700px) {

        .texte {
            font-size: 20px;
        }

        .btn-content {
            left: 80%;
        }
    }
</style>