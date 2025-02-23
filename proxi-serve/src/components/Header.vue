<template>
    <header class="header">
      <div class="container">
        <div class="header-content">
          <div class="header-text">
            <h1>Trouvez l'artisan idéal pour votre projet</h1>
            <p class="header-subtitle">
              Des milliers d'artisans qualifiés prêts à vous aider. Trouvez le bon professionnel en quelques clics.
            </p>
          </div>
          <div class="search-container">
            <div class="search-box">
              <div class="search-input-group">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                <input 
                  type="text" 
                  id="searchInput"
                  placeholder="Rechercher par métier ou service"
                >
              </div>
              <div class="search-input-group">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <input 
                  type="text" 
                  id="locationInput"
                  placeholder="Votre ville"
                >
              </div>
              <button class="btn-search">Rechercher</button>
            </div>
            <div class="popular-searches">
              <span>Recherches populaires:</span>
              <a href="#" class="tag">Plombier</a>
              <a href="#" class="tag">Électricien</a>
              <a href="#" class="tag">Menuisier</a>
              <a href="#" class="tag">Peintre</a>
            </div>
          </div>
        </div>
      </div>
      <div class="header-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fill-opacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'AppHeader'
  }
  </script>
  
  <style scoped>
  /* Add your CSS here */
  </style>