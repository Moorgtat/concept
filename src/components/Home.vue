<template>
    <div id="Home">

<!--        NAVBAR-->
        <div id="nav" :class="{ white : navbarStatus }">
            <div class="logo">
                <a href="/"><logo></logo></a>
            </div>
            <div class="menu">
                <ul>
                    <li><a class="white-nav-li-a" :class="{ 'black-nav-li-a' : navbarStatus}" href="/">Accueil</a></li>
                    <li><a class="white-nav-li-a" :class="{ 'black-nav-li-a' : navbarStatus }" href="/">Menu</a></li>
                    <li><a class="white-nav-li-a" :class="{ 'black-nav-li-a' : navbarStatus }" href="/">L'équipe</a></li>
                    <li><a class="white-nav-li-a" :class="{ 'black-nav-li-a' : navbarStatus }" href="/">Nous trouver</a></li>
                </ul>
            </div>
        </div>

<!--        ANIM CAROUSEL <a> -->
        <div id="ACA">
            <div id="bigtest" class="liencar run-animation">
                <p style="margin-bottom: 25px"><a href=""><b> NOS RESTAURANTS </b></a> </p>
                <p><a href=""><b> ME FAIRE LIVRER </b></a></p>
            </div>
        </div>

<!--        CAROUSEL-->
        <div id="carousel" @click.prevent="dosomething">
            <Carousel>
                <Carousel-slide>
                    <div class="img-carousel img-one"></div>
                </Carousel-slide>
                <Carousel-slide>
                    <div class="img-carousel img-two"></div>
                </Carousel-slide>
                <Carousel-slide>
                    <div class="img-carousel img-three"></div>
                </Carousel-slide>
            </Carousel>
        </div>

<!--        PRESENTATION-->
        <div id="presentation">

            <div class="presentation-anim" :class="{ 'run-animation' : animStatus }">
            <div class="marge-auto">
               <div>
                   <font-awesome-icon icon="star" size="2x" style="margin-right: 5px"/>
                   <font-awesome-icon icon="star" size="2x" style="margin-right: 5px"/>
                   <font-awesome-icon icon="star" size="2x"/>
               </div>
            </div>
            </div>

            <div id="texte-presentation">
               <div class="marge-auto">
                   <p><strong>LE SITE DE VOTRE RESTAURANT C'EST</strong></p>
                   <p><strong>NOTRE METIER DE VOUS EN RENDRE FIER</strong></p>
               </div>
            </div>

            <div class="presentation-anim" :class="{ 'run-animation' : animStatus }">
                <div class="marge-auto">
                    <font-awesome-icon icon="star" size="2x" style="margin-right: 5px"/>
                    <font-awesome-icon icon="star" size="2x" style="margin-right: 5px"/>
                    <font-awesome-icon icon="star" size="2x"/>
                </div>
            </div>
        </div>

<!--        BANDEAUX-->
<div id="bandeau-container">

    <div class="bandeau-3p">
        <div class="parent mr4">
            <div class="img3p bg-one">
                <p><a href=""> Notre restaurant </a></p>
            </div>
        </div>
        <div class="parent mr4">
            <div class="img3p bg-two">
                <p><a href=""> Nos menus </a></p>
            </div>
        </div>
        <div class="parent">
            <div class="img3p bg-three">
                <p><a href=""> Nous trouver </a></p>
            </div>
        </div>
    </div>

        <div class="bandeau-deux-photos">
            <div class="img2p-one">
            </div>
            <div class="img2p-two">
                <div class="marge-auto">
                    <h2>LE SITE VOTRE RESTAURANT C’EST NOTRE
                    METIER DE VOUS EN RENDRE FIER</h2></div>
            </div>
        </div>

    <div class="bandeau-deux-photos">
        <div class="b2p-texte">
            <h2>LE SITE VOTRE RESTAURANT C’EST NOTRE
                METIER DE VOUS EN RENDRE FIER</h2>
        </div>
        <div class="img2p-two">
        </div>
    </div>

</div>

<!--        EXPLICATION-->
        <div id="explication">
           <div class="marge-auto">
               <p>VOTRE RESTAURANT MERITE UN SITE DYNAMIQUE ET MODERNE</p>
               <p>VOTRE RESTAURANT MERITE UN SITE DYNAMIQUE ET MODERNE</p>
               <p>VOTRE RESTAURANT MERITE UN SITE DYNAMIQUE ET MODERNE</p>
               <p>VOTRE RESTAURANT MERITE UN SITE DYNAMIQUE ET MODERNE</p>
           </div>
        </div>

          <div id="caroussel-avis">
              <h1>Carroussel Avis</h1>
          </div>


<!--        FOOTER-->
        <div id="footer">
            <div id="contacts">
               Contacts
            </div>
            <div id="livraison">
                Livraison
            </div>
            <div id="divers">
                Divers
            </div>
        </div>

        <div id="surplus">

        </div>

    </div>
</template>

<script>
    import logo from "@/components/svg/logo";
    import Carousel from "@/components/carousel/Carousel";
    import CarouselSlide from "@/components/carousel/CarouselSlide";
export default {
  name: 'Home',
    components: {
      Carousel,
      CarouselSlide,
      logo
    },
    data () {
      return {
          navbarStatus: '',
          animStatus: ''
      }
  },
    methods: {
        handleScroll () {
            this.navbarStatus = !!(window.scrollY << 18);
            this.animStatus = !!(window.scrollY <<  document.getElementById('carousel').offsetHeight);
        },
        dosomething () {
            let element =  document.getElementById('bigtest');
            element.classList.remove("run-animation");
            // oblige le browser a reflow
            // void element.offsetWidth;
            // element.classList.add("run-animation");
            setTimeout(() => element.classList.add("run-animation"), 0);
        }
    },
    mounted() {
        // this.startAnim();
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    }
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

    #Home {
        font-family: 'Roboto Condensed', sans-serif;
        text-align: center;
    }

    /*ANIM ACCUEIL <a>*/
    #ACA{
        background: transparent;
        position: absolute;
        top:80px;
        left: 10%;
        width: 80%;
        height: 90vh;
        min-height: 250px;
        z-index: 1;
    }

    .liencar{
        position: relative;
        top:32%;
    }

    .liencar a{
        color: white;
        font-size: 42px;
    }

    .run-animation {
        animation: comeFB ease-in-out 1.3s;
    }

    @keyframes comeFB {
        from { top: 18%; opacity: 0; }
        to { top: 32%; opacity: 1; }
        
    }
    
    /*NAVBAR*/
    #nav {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 80px;
        padding: 0 120px;
        box-sizing: border-box;
        transition: 1s;
        z-index: 2;
    }

    #nav .logo {
        margin: 20px 40px;
        float: left;
    }

    #nav ul {
        float: right;
        margin: 0;
        padding: 0;
        display: flex;
    }

    #nav ul li {
        list-style: none;
    }

    .white-nav-li-a {
        color: white;
        font-size: 13px;
        line-height: 80px;
        padding: 5px 20px;
        text-decoration: none;
        text-transform: uppercase;
        transition: .5s;
    }

    .black-nav-li-a {
        color: black;
        font-size: 14px;
        line-height: 80px;
        padding: 5px 20px;
        text-decoration: none;
        text-transform: uppercase;
        transition: .5s;
    }

    .white{
        background: white;
    }

    /*CAROUSEL*/
    #carousel {
        width: 100%;
    }
    .img-carousel {
        width: 100%;
        height: 100vh;
        min-height: 250px;
        background-position: 50% 40%;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .img-carousel.img-one{
        background-image: url("../assets/food-one.jpg");
    }
    .img-carousel.img-two{
        background-image: url("../assets/food-two.jpg");
    }
    .img-carousel.img-three{
        background-image: url("../assets/food-three.jpg");
    }

    /*PRESENTATION*/
    #presentation {
        width: 100%;
        text-align: center;
    }

    #texte-presentation {
        display: flex;
        width: 100%;
        font-size: 40px;
        height: 210px;
    }

    .presentation-anim{
        display: flex;
        margin: 5px;
        width: 100%;
        height: 80px;
    }

    #bandeau-container{
        margin: 5px;
    }

    /*BANDEAU 3P*/

    .bandeau-3p{
        margin-bottom: 5px;
        display: flex;
        flex-direction: row;
        height: calc(200px + 5vw);
        line-height: calc(200px + 3.4vw);
    }

    .bandeau-3p a {
        text-decoration: none;
        color: white;
        font-size:calc(12px + 1.3vw);
    }

    .parent{
        width: 100%;
        overflow: hidden;
    }

    .mr4{
        margin-right: 4px;
    }

    .img3p{
        height: 100%;
        border-top: 1px solid transparent;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: cover;
        transition: ease-in-out 0.3s;
    }

    .bg-one {
        background-image: url("../assets/food-one.jpg");
    }

    .bg-two {
        background-image: url("../assets/food-two.jpg");
    }

    .bg-three {
        background-image: url("../assets/food-three.jpg");
    }

    .parent:hover .img3p, .parent:focus .img3p {
        transform: scale(1.02);
    }

    .parent:hover a, .parent:focus a {
        text-decoration: underline;
    }


    /*BANDEAU 2P*/

    .bandeau-deux-photos{
        margin-bottom: 5px;
        width: 100%;
        display: flex;
        flex-direction: row;
        min-height:300px;
        height: 28vw;
    }

    .b2p-texte{
        background-position: 50% 50%;
        width: 100%;
        margin: auto;
        padding-right: 5px;
    }

    .img2p-one{
        background-position: 50% 50%;
        width: 100%;
        margin-right: 5px;
        background-image: url("../assets/food-one.jpg");
        background-size: cover;
    }

    .img2p-two{
        display: flex;
        background-position: 50% 50%;
        width: 100%;
        background-image: url("../assets/food-two.jpg");
        background-size: cover;
    }

    /*EXPLICATION*/

#explication {
    display: flex;
    height: 300px;
}

.marge-auto{
    margin: auto;
}

    /*CAROUSEL AVIS*/
    #caroussel-avis {
        height: 300px;
    }


    /*FOOTER*/
    #footer{
        background-color: #12171b;
        height: 340px;
        display: flex;
        flex-direction: row;
        padding: 60px 120px;
        color: white;
    }
    #contacts {
        width: 100%;
    }
    #livraison {
        border-right: dashed 1px rgba(191, 191, 191, .3);
        border-left: dashed 1px rgba(191, 191, 191, .3);
        width: 100%;
        height: 100%;
    }
    #divers {
        width: 100%;
    }

    #surplus {
        height: 100px;
        background-color: black;
    }
</style>