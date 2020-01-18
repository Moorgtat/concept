<template>
    <div id="Home">
        <div id="nav" :class="{black : navbarStatus}">
            <div class="logo">
                <a href="/"><logo></logo></a>
            </div>
            <div class="menu">
                <ul>
                    <li><a href="/">Accueil</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/contact">Nous trouver</a></li>
                </ul>
            </div>
        </div>

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

        <div id="presentation">
            <div id="presentation-haut">
                <font-awesome-icon icon="coffee"  size="2x"/>
            </div>
            <div id="texte-presentation">
                <h1>Texte</h1>
            </div>
            <div>

            </div>
        </div>

        <div id="bandeau-trois-photos">
            <h1>Photos-Trois</h1>
        </div>

        <div id="bandeau-deux-photos">
            <h1>Photos-Deux</h1>
        </div>


        <div id="explication">
            <h1>Texte</h1>
        </div>

        <div id="caroussel-avis">
            <h1>Carroussel Avis</h1>
        </div>

        <div id="footer">
            <h1>Footer</h1>
            <h1>Adresse</h1>
            <h1>Divers</h1>
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
          navbarStatus: ""
      }
  },
    methods: {
        handleScroll () {
            this.navbarStatus = !!(window.scrollY << 18);
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

    /*NAVBAR*/
    #nav {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 80px;
        padding: 0 100px;
        box-sizing: border-box;
        transition: 1s;
        z-index: 1;
    }
    .black{
        background: black;
    }
    #nav .logo {
        margin: 20px 40px;
        float: left;
        font-size: 15px;
        color: white;
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

    #nav ul li a  {
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 12px;
        line-height: 80px;
        color:white;
        padding: 5px 20px;
        text-decoration: none;
        text-transform: uppercase;
        transition: .5s;
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
        background-image: url("../assets/rest-one.jpg");
    }
    .img-carousel.img-two{
        background-image: url("../assets/rest-two.jpg");
    }
    .img-carousel.img-three{
        background-image: url("../assets/rest-three.jpg");
    }

    /*PRESENTATION*/
    #presentation {
        border: 1px solid black;
        width: 100%;
        height: 200px;
        line-height: 200px;
        text-align: center;
    }

    #texte-presentation {
        border: 1px solid black;
        vertical-align: middle;
        display: inline-block;
        line-height: 1.2;
    }

    #presentation-haut :hover {
        transition: 0.5s;
        opacity: 0.1;
    }
</style>