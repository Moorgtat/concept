<template>
    <div id="Home">

        <div id="navbar-container">
            <div id="logo">
                <h1>Logo</h1>
            </div>
            <div id="menu">
                <h1>Navbar</h1>
                <ul>
                    <li>Accueil</li>
                    <li>Menu</li>
                    <li>Nous contacter</li>
                </ul>
            </div>
        </div>



        <div id="caroussel-container">
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

        <div id="presentation-container">
            <div id="texte-presentation">
                <h1>Texte</h1>
            </div>
        </div>

        <div id="bandeau-3p-container">
            <h1>Photos-Trois</h1>
        </div>

        <div id="bandeau-2p1-container">
            <h1>Photos-Deux</h1>
        </div>

        <div id="bandeau-2p2-container">
            <h1>Photos-Deux</h1>
        </div>

        <div id="explication-container">
            <h1>Texte</h1>
        </div>

        <div id="caroussel-avis-container">
            <h1>Carroussel Avis</h1>
        </div>

        <div id="footer-container">
            <h1>Footer</h1>
            <h1>Adresse</h1>
            <h1>Divers</h1>
        </div>


    </div>
</template>

<script>
    import Carousel from "@/components/carousel/Carousel";
    import CarouselSlide from "@/components/carousel/CarouselSlide";
export default {
  name: 'Home',
    components: {
      Carousel,
      CarouselSlide
    }
}
</script>

<style scoped>

    #navbar-container {
        width: 100%;
        border: solid 2px black;
    }

    #caroussel-container {
        width: 100%;
    }

    .img-carousel {
        width: 100%;
        height: 100vh;
        background-position: 50% 50%;
        background-repeat: no-repeat;
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

    #presentation-container {
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

</style>