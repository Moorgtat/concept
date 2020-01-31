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
                    <li><a class="white-nav-li-a" :class="{ 'black-nav-li-a' : navbarStatus }" href="/menu">Menu</a></li>
                    <li><a class="white-nav-li-a" :class="{ 'black-nav-li-a' : navbarStatus }" href="/lequipe">L'équipe</a></li>
                    <li><a class="white-nav-li-a" :class="{ 'black-nav-li-a' : navbarStatus }" href="/contact">Nous trouver</a></li>
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
        <div id="carousel" @click.prevent="resetAcaAnim">
            <Carousel>
                <Carousel-slide>
                    <div class="img-carousel bg-one"></div>
                </Carousel-slide>
                <Carousel-slide>
                    <div class="img-carousel bg-two"></div>
                </Carousel-slide>
                <Carousel-slide>
                    <div class="img-carousel bg-three"></div>
                </Carousel-slide>
            </Carousel>
        </div>

<!--        PRESENTATION-->
        <div id="presentation">

            <div class="presentation-anim" :class="{ 'run-slide30FromBottom' : animPresentationStatus }">
            <div class="marge-auto">
               <div class="startline">
                   <font-awesome-icon icon="star"/>
               </div>
            </div>
            </div>

            <div id="texte-presentation">
               <div class="marge-auto">
                   <p><strong>LE SITE DE VOTRE RESTAURANT C'EST</strong></p>
                   <p><strong>NOTRE METIER DE VOUS EN RENDRE FIER</strong></p>
               </div>
            </div>

            <div class="presentation-anim" :class="{ 'run-slide30FromBottom' : animPresentationStatus }">
                <div class="marge-auto">
                    <div class="startline">
                        <font-awesome-icon icon="star"/>
                    </div>
                </div>
            </div>
        </div>

    <!--    BANDEAUX-->
<div id="bandeau-container">

    <!--    BANDEAU TROIS PHOTOS-->
    <div class="bandeau-3p tercio" :class="{'run-slide30FromBottom' : animTercioStatus}">
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

     <!--    BANDEAU DEUX PHOTOS-->
        <div class="bandeau-deux-photos uno" :class="{'run-slide30FromBottom' : animUnoStatus}">
            <div class="img2p-one bg-one">
            </div>
            <div class="img2p-two bg-two-dark text-white">
                <div class="marge-auto">
                    <p style="font-size: 20px; padding: 20px;">
                        Le site de votre restaurant, comme vous ne l'avez jamais vu.
                        Le site de votre restaurant, comme vous ne l'avez jamais vu.
                        Le site de votre restaurant, comme vous ne l'avez jamais vu.
                    </p></div>
            </div>
        </div>

    <!--    BANDEAU DEUX PHOTOS-->
    <div class="bandeau-deux-photos deuxio" :class="{'run-slide30FromBottom' : animDeuxioStatus}">
        <div class="b2p-texte">
            <p class="marge-auto pad25 ft32">Le site de votre restaurant, c'est à nous de vous en rendre fier.</p>
        </div>
        <div class="img2p-two bg-three">
        </div>
    </div>
</div>

<!--        EXPLICATION-->
        <div id="explication" :class="{'run-slide30FromBottom' : animExplicationStatus}">
            <div class="biglogo">
               <div class="marge-auto">
                   <a href="/"><biglogo></biglogo></a>
               </div>
            </div>
            <div class="expli-texte marge-auto">
                <div style="text-align: center">
                    <h2>
                    Un concept de site pour votre restaurant !
                    </h2>
                    <p>
                    Le numero, l'adresse ainsi que la ville de mon restaurant!
                    </p>
                    <p>
                    Les horaires que je pratique.
                    </p>
                    <p>
                    Au menu votre cuisine, vos saveurs, votre univers!
                    Sur place, à emporter ou livré !
                    </p>

                    <div class="presentation-anim restore-opacity">
                        <div class="marge-auto">
                            <div class="startline">
                                <font-awesome-icon icon="star" size="m"/>
                            </div>
                        </div>
                    </div>

                    <h1>
                    ILS PARLENT DE NOUS !
                    </h1>
                </div>
            </div>
        </div>

<!--        CAROUSEL AVIS-->
          <div id="carousel-avis" :class="{ 'run-slide30FromBottom' : animCarAvisStatus }">
              <div class="carousel-avis-container">

                  <div id="slider">
                      <figure>
                          <img src="../assets/carousel-avis-one.svg" alt="p1 alt"/>
                          <img src="../assets/carousel-avis-two.svg" alt="p1 alt"/>
                          <img src="../assets/carousel-avis-three.svg" alt="p1 alt"/>
                          <img src="../assets/carousel-avis-for.svg" alt="p1 alt"/>
                          <img src="../assets/carousel-avis-five.svg" alt="p1 alt"/>
                      </figure>

                  </div>
              </div>
          </div>


<!--        FOOTER-->
        <div id="footer">
            <div id="contacts">
            <h2>  NOTRE RESTAURANT </h2>
                 <p>
                Notre Adresse
                 </p>
                <p>
                 Contactez-nous par mail!
                </p>
                <p>
                 ENVIE DE NOUS REJOINDRE ?
                 C'EST ICI : manager@concept-one.fr
                </p>
            </div>
            <div id="livraison">
                <h2>Livraison</h2>
                <p>LES SAVEURS DE NOTRE RESTAURANT</p>
                <p>DIRECTEMENT CHEZ VOUS !</p>
                <button class="btn-newsletter">Me livrer</button>
            </div>
            <div id="divers">
                <h2>Restons en contact !</h2>
                <p>On vous envoie les offres du moment, des recettes et des nouvelles de l’équipe</p>
                <h3>Newsletter</h3>
                <div>
                <input placeholder="Votre adresse mail"/>
                </div>
                <button class="btn-newsletter">Envoyer</button>
            </div>
        </div>

        <div class="surplus">
<div class="surplus-content">
   <a href="#carousel"><button class="btn-footer">Haut</button></a>
</div>
        </div>

    </div>
</template>

<script>
    import logo from "@/components/svg/logo";
    import biglogo from "@/components/svg/biglogo";
    import Carousel from "@/components/carousel/Carousel";
    import CarouselSlide from "@/components/carousel/CarouselSlide";
export default {
  name: 'Concept',
    components: {
      Carousel,
      CarouselSlide,
      logo,
      biglogo
    },
    data () {
      return {
          navbarStatus: '',
          animPresentationStatus: '',
          animUnoStatus: '',
          animDeuxioStatus:'',
          animTercioStatus:'',
          animExplicationStatus:'',
          animCarAvisStatus: ''
      }
  },
    methods: {
        handleScroll () {
            this.navbarStatus = !!(window.scrollY << 18);
        },
        resetAcaAnim: function () {
            let element = document.getElementById('bigtest');
            element.classList.remove("run-animation");
            setTimeout(() => element.classList.add("run-animation"), 0);
        }
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    mounted (){
        let observer = new IntersectionObserver( entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animPresentationStatus = true;
                    observer.unobserve(presentationAnim);
                }
            });
        });

        let observer2 = new IntersectionObserver( entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animExplicationStatus =true;
                    observer.unobserve(animExplication);
                }
            });
        });

        let observer3 = new IntersectionObserver( entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animUnoStatus = true;
                    observer.unobserve(unoAnim);
                }
            });
        });

        let observer4 = new IntersectionObserver( entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animDeuxioStatus =true;
                    observer.unobserve(deuxioAnim);
                }
            });
        });

        let observer5 = new IntersectionObserver( entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animTercioStatus =true;
                    observer.unobserve(tercioAnim);
                }
            });
        });

        let observer6 = new IntersectionObserver( entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animCarAvisStatus =true;
                    observer.unobserve(carAvisAnim);
                }
            });
        });

        const presentationAnim = document.querySelector('.presentation-anim');
        const animExplication = document.getElementById('explication');
        const unoAnim = document.querySelector('.uno');
        const deuxioAnim = document.querySelector('.deuxio');
        const tercioAnim = document.querySelector('.tercio');
        const carAvisAnim = document.getElementById('carousel-avis');
        observer.observe(presentationAnim);
        observer2.observe(animExplication);
        observer3.observe(unoAnim);
        observer4.observe(deuxioAnim);
        observer5.observe(tercioAnim);
        observer6.observe(carAvisAnim);
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

    /*BACKGROUND*/
    .bg-one {
        background-image: url("../assets/food-one.jpg");
    }

    .bg-two {
        background-image: url("../assets/food-two.jpg");
    }

    .bg-three {
        background-image: url("../assets/food-three.jpg");
    }

    .bg-two-dark {
        background-image: url("../assets/food-two-dark.jpg");
    }

    /*CLASS STYLE*/
    .marge-auto {
        margin: auto;
    }

    .text-white {
        color: white;
    }

    .pad25 {
        padding: 25px;
    }

    .ft32 {
        font-size: 32px;
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
        padding: 0 calc(20px + 5vw);
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
        opacity: 0;
        display: flex;
        margin: 5px;
        width: 100%;
        height: 80px;
    }

    .startline {
        position: relative;
        width: 50px;
    }

    .startline::before {
        content:'';
        display: block;
        width: 180px;
        height: 2px;
        background: black;
        position: absolute;
        right: 110%;
        top: 50%;
        z-index: -2;
    }

    .startline::after {
        content:'';
        display: block;
        width: 180px;
        height: 2px;
        background: black;
        position: absolute;
        left: 110%;
        top: 50%;
        z-index: -2;
    }

    /*BANDEAUX*/

    #bandeau-container{
        margin: 5px;
    }

    /*BANDEAU 3P*/

    .tercio{
        opacity: 0;
    }

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

    .parent:hover .img3p, .parent:focus .img3p {
        transform: scale(1.02);
    }

    .parent:hover a, .parent:focus a {
        text-decoration: underline;
    }


    /*BANDEAU 2P*/

    .uno{
        opacity: 0;
    }
    .deuxio{
        opacity: 0;
    }
    .bandeau-deux-photos{
        margin-bottom: 5px;
        width: 100%;
        display: flex;
        flex-direction: row;
        min-height:300px;
        max-height: 450px;
        height: 28vw;
    }

    .b2p-texte{
        display: flex;
        background-position: 50% 50%;
        width: 100%;
        margin-right: 5px;
    }

    .img2p-one{
        background-position: 50% 50%;
        width: 100%;
        margin-right: 5px;
        background-size: cover;
    }

    .img2p-two{
        display: flex;
        background-position: 50% 50%;
        width: 100%;
        background-size: cover;
    }

    /*EXPLICATION*/

    #explication {
        opacity: 0;
        display: flex;
        flex-direction: column;
        height: 450px;
    }

    .biglogo{
        display: flex;
        height: 150px;
        padding-top: 25px;
    }

    .expli-texte{
        display: flex;
        height: 300px;
    }

    /*CAROUSEL AVIS*/
    #carousel-avis {
        opacity: 0;
        display: flex;
        height: 400px;
    }
    .carousel-avis-container {
        margin: auto;
        width: 600px;
        height: 350px;
        display: flex;
        justify-content: center;
    }

    div#slider {
        width:600px;
        height: 350px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }

    figure img {
        width: 600px;
        height: 350px;
        float: left;
    }

   figure {
        position: relative;
        width: 3600px;
        margin: 0;
        left: 0;
        animation: 30s slidy infinite;
    }

    @keyframes slidy {
        0% { left: 0; opacity: 1}
        19% { left: 0; opacity: 1}
        20% { left: -100%; opacity: 1 }
        39% { left: -100%; opacity: 1 }
        40% { left: -200%; opacity: 1 }
        59% { left: -200%; opacity: 1 }
        60% { left: -300%; opacity: 1 }
        79% { left: -300%; opacity: 1 }
        80% { left: -400%; opacity: 1 }
        99% { left: -400%; opacity: 1 }
        100% { left: 0; opacity: 1}
    }

    /*FOOTER*/
    #footer{
        background-color: #12171b;
        display: flex;
        flex-direction: row;
        padding: 60px 10px;
        color: white;
    }
    #contacts {
        min-width: 280px;
        width: 100%;
        padding: 20px;
    }
    #livraison {
        min-width: 280px;
        padding: 20px;
        border-right: dashed 1px rgba(191, 191, 191, .3);
        border-left: dashed 1px rgba(191, 191, 191, .3);
        width: 100%;
    }
    #divers {
        min-width: 280px;
        width: 100%;
        padding: 20px;
    }

    .surplus {
        height: 100px;
        background-color: black;
        display: flex;
        flex-direction: row-reverse;
    }
    .surplus-content{
        padding: 30px;
    }
    .btn-footer{
        outline-style:none;
        -webkit-transition-duration: 0.4s; /* Safari */
        transition-duration: 0.4s;
        background-color: #12171b;
        height: 45px;
        width: 45px;
        border-radius: 5px;
        color: white;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 10px;
        opacity: 0.4;
    }

    .btn-footer:hover {
        transform: scale(1.2);
        opacity: 0.8;
    }

    .btn-newsletter {
        outline-style:none;
        transition: ease .5s;
        background-color: transparent;
        height: 35px;
        width: 65px;
        border: white 2px solid;
        border-radius: 8px;
        color: white;
        text-align: center;
        font-size: 10px;
    }

    .btn-newsletter:hover {
        color: #12171b;
        background-color: white;
        font-weight: bold;
        font-size: 11px;
    }

    input{
        height: 25px;
        width: 220px;
        border-radius: 15px;
        margin-bottom: 10px;
    }

    .restore-opacity {
        opacity: 1;
    }

    /*ANIMATION*/

    .run-slide30FromBottom {
        animation: slide30FromBottom ease-out 1s forwards;
        animation-delay: 0.4s;
    }

    @keyframes slide30FromBottom {
       from    {transform: translateY(160px); opacity: 0;}
       to  { transform: translateY(0px); opacity: 1;}
    }
</style>