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
                    <li><a class="white-nav-li-a" :class="{ 'black-nav-li-a' : navbarStatus }" href="/">Livraison</a></li>
                    <li><a class="white-nav-li-a" :class="{ 'black-nav-li-a' : navbarStatus }" href="/">Nous trouver</a></li>
                </ul>
            </div>
        </div>

<!--        CAROUSEL-->
        <div id="carousel">
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

            <div class="presentation-anim" :class="{ opacitos : animStatus }">
            <div class="texte-explication">
                <font-awesome-icon icon="coffee" size="2x"/>
                <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }"  v-if="animStatus === true" />
            </div>
            </div>

            <div id="texte-presentation">
               <div class="texte-explication">
                   <h2>JAMES BUN C’EST VOTRE CANTINE</h2>
                   <h2>STREET FOOD FRANCO-VIETNAMIENNE</h2>
                   <h2>JAMES BUN C’EST VOTRE CANTINE</h2>
               </div>
            </div>

            <div class="presentation-anim" :class="{ opacitos : animStatus }">
                <div class="texte-explication">
                <font-awesome-icon icon="coffee"  size="2x"/>
            </div>
            </div>
        </div>

<!--        BANDEAUX-->
<div id="bandeau-container">

        <div class="bandeau-trois-photos">
            <div class="img3p-one">
                <p><a href=""> Notre restaurant </a></p>
            </div>
            <div class="img3p-two">
              <p><a href=""> Nos menus </a></p>
            </div>
            <div class="img3p-three">
              <p><a href=""> Nous trouver </a></p>
            </div>
        </div>

        <div class="bandeau-deux-photos">
            <div class="img2p-one">
            </div>
            <div class="img2p-two">
                <div class="texte-b2p"><h2>JAMES BUN C’EST VOTRE CANTINE
                    STREET FOOD FRANCO-VIETNAMIENNE</h2></div>
            </div>
        </div>

    <div class="bandeau-deux-photos">
        <div class="b2p-texte">
            <h2>JAMES BUN C’EST VOTRE CANTINE
                STREET FOOD FRANCO-VIETNAMIENNE</h2>
        </div>
        <div class="img2p-two">
        </div>
    </div>

</div>

<!--        EXPLICATION-->
        <div id="explication">
           <div class="texte-explication"> <p>JAMES BUN C’EST VOTRE CANTINE
               STREET FOOD FRANCO-VIETNAMIENNE</p>
               <p>JAMES BUN C’EST VOTRE CANTINE
                   STREET FOOD FRANCO-VIETNAMIENNE</p>
               <p>JAMES BUN C’EST VOTRE CANTINE
                   STREET FOOD FRANCO-VIETNAMIENNE</p>
           </div>
        </div>

          <div id="caroussel-avis">
              <h1>Carroussel Avis</h1>
          </div>


<!--        FOOTER-->
        <div id="footer" :class="{ opacitos : animFooterStatus }">
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
          animStatus: '',
          animFooterStatus:''
      }
  },
    methods: {
        handleScroll () {
            this.navbarStatus = !!(window.scrollY << 18);
            this.animStatus = !!(window.scrollY <<  document.getElementById('carousel').offsetHeight);
            this.animFooterStatus = !!(window.scrollY <<  document.getElementById('carousel').offsetHeight +
                document.getElementById('presentation').offsetHeight +
                document.getElementById('bandeau-trois-photos').offsetHeight +
                document.getElementById('bandeau-deux-photos').offsetHeight  +
                document.getElementById('explication').offsetHeight);
        }
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
        z-index: 1;
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

    /*#nav ul li a  {*/
    /*    color: white;*/
    /*    font-size: 12px;*/
    /*    line-height: 80px;*/
    /*    padding: 5px 20px;*/
    /*    text-decoration: none;*/
    /*    text-transform: uppercase;*/
    /*    transition: .5s;*/
    /*}*/

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
        background-position: 50% 50%;
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
        height: 210px;
    }

    .presentation-anim{
        display: flex;
        margin: 5px;
        width: 100%;
        height: 60px;
    }

    .opacitos {
        transition: 0.5s;
        opacity: 0.5;
    }


    #bandeau-container{
        margin: 5px;
    }

    /*BANDEAU 3P*/

    .bandeau-trois-photos{
        margin-bottom: 5px;
        width: 100%;
        display: flex;
        flex-direction: row;
        min-height:200px;
        height: 20vw;
        font-size: 2vw;
        color: white;
        line-height: 15vw;
    }

    .img3p-one{
        background-position: 50% 50%;
        width: 100%;
        margin-right: 5px;
        background-image: url("../assets/food-one.jpg");
        background-size: cover;
    }

    .bandeau-trois-photos a {
        color: white;
    }

    .img3p-two{
        background-position: 50% 50%;
        width: 100%;
        margin-right: 5px;
        background-image: url("../assets/food-two.jpg");
        background-size: cover;
    }

    .img3p-three{
        background-position: 50% 50%;
        width: 100%;
        background-image: url("../assets/food-three.jpg");
        background-size: cover;
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

    .texte-b2p{
        margin: auto;
    }

    /*EXPLICATION*/

#explication {
    display: flex;
    height: 300px;
    border: solid 2px Black;
}

.texte-explication{
    margin: auto;
}

    /*CAROUSEL AVIS*/

    #caroussel-avis {
        height: 300px;
        border: solid 2px Black;
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