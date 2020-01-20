<template>
    <div id="Home">
        <div id="nav" :class="{ black : navbarStatus }">
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
            <div id="presentation-haut" :class="{ opacitos : animStatus }">
                <font-awesome-icon icon="coffee"  size="2x"/>
                <button @click="hauteurTest">Rafraichir la Hauteur</button>
                <p> {{ hauteur }} </p>
            </div>
            <div id="texte-presentation">
                <p>Texte</p>
            </div>
            <div>
                <font-awesome-icon icon="coffee"  size="2x"/>
                <font-awesome-icon icon="coffee"  size="2x"/>
                <font-awesome-icon icon="coffee"  size="2x"/>
                <font-awesome-icon icon="coffee"  size="2x"/>
                <font-awesome-icon icon="coffee"  size="2x"/>
            </div>
        </div>
<div id="test">
        <div class="bandeau-trois-photos">
            <div class="img3p-one">
              <p> Test </p>
            </div>
            <div class="img3p-two">
              <p> Test </p>
            </div>
            <div class="img3p-three">
              <p> Test </p>
            </div>
        </div>

        <div class="bandeau-deux-photos">
            <div class="img2p-one">
                <p> Test </p>
            </div>
            <div class="img2p-two">
                <p> Test </p>
            </div>
        </div>

    <div class="bandeau-deux-photos">
        <div class="img2p-one">
            <p> Test </p>
        </div>
        <div class="img2p-two">
            <p> Test </p>
        </div>
    </div>

</div>

        <div id="explication">
            <h1>Texte</h1>
          <div id="caroussel-avis">
              <h1>Carroussel Avis</h1>
          </div>
        </div>

        <div id="footer" :class="{ opacitos : animFooterStatus }">
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
          navbarStatus: '',
          animStatus: '',
          animFooterStatus:'',
          hauteur: ''
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
        },
        hauteurTest () {
            return  this.hauteur = document.getElementById('carousel').offsetHeight;
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
        border: 1px solid black;
        width: 100%;
        height: 200px;
        text-align: center;
    }

    #texte-presentation {
        border: 1px solid black;
        width: 100%;
        height: 40px;

    }

    .opacitos {
        transition: 0.5s;
        opacity: 0.5;
    }


    #test{
        margin: 5px;
    }

    /*BANDEAU 3P*/

    .bandeau-trois-photos{
        margin-bottom: 10px;
        width: 100%;
        display: flex;
        flex-direction: row;
        min-height:200px;
        height: 20vw;
    }

    .img3p-one{
        background-position: 50% 50%;
        width: 100%;
        margin-right: 5px;
        background-image: url("../assets/food-one.jpg");
        background-size: cover;
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
        margin-bottom: 10px;
        width: 100%;
        display: flex;
        flex-direction: row;
        min-height:300px;
        height: 30vw;
    }

    .img2p-one{
        background-position: 50% 50%;
        width: 100%;
        margin-right: 5px;
        background-image: url("../assets/food-one.jpg");
        background-size: cover;
    }

    .img2p-two{
        background-position: 50% 50%;
        width: 100%;
        background-image: url("../assets/food-two.jpg");
        background-size: cover;
    }

</style>