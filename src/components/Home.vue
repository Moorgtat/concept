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

      <div id="carroussel-container">
          <h1>Carroussel Top</h1>
      </div>

      <div id="presentation-container">
          <h1>Texte</h1>
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

      <div id="carroussel-avis-container">
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
export default {
  name: 'Home',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #Home {
        border: solid 2px black;
        width: 100%;
    }

    #navbar-container {
        border: solid 2px black;
    
    }

    #carroussel-container {
        border: solid 2px black;
        width: 100%;
        height: 100vh;
        background-color: darkgrey;
    }

    #presentation-container {

    }

    #bandeau-3p-container {

    }

    #bandeau-2p1-container {

    }

    #bandeau-2p2-container {

    }

    #explication-container {

    }

    #carroussel-avis-container {

    }

    #footer-container {

    }

</style>
