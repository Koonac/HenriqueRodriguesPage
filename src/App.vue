<template>
  <div id="app" class="bg-light">
    <!-- IMPORTANDO TOPO -->
    <nav-bar />
    <!-- CONTEÚDO DA PAGINA -->
    <b-container>
      <!-- DIV DA ABA "Início" -->
      <section id="inicio" class="bg-warning border rounded-3">
        <home />
      </section>
      <!-- DIV DA ABA "Sobre" -->
      <section id="sobre">
        <about-me />
      </section>
      <!-- DIV DA ABA "Habilidades" -->
      <section id="habilidades" class="bg-warning border rounded-3">
        <skills />
      </section>
      <!-- DIV DA ABA "Portifólio" -->
      <section id="portifolio">
        <projects />
      </section>
      <!-- SECTION DE CONTATO -->
      <section id="contato" class="bg-warning border rounded-3">
        <contact />
      </section>
    </b-container>
  </div>
</template>

<script>
// IMPORTANDO COMPONENTE LAYOUT
import NavBar from "@/components/layout/NavBar.vue";
import Contact from "@/components/sections/Contact.vue";
import Projects from "@/components/sections/Projects.vue";
import Skills from "@/components/sections/Skills.vue";
import AboutMe from "@/components/sections/AboutMe.vue";
import Home from "@/components/sections/Home.vue";

export default {
  name: "App",
  head: {
    script: [
      {
        type: "text/javascript",
        src: "https://kit.fontawesome.com/dd928c7064.js",
        async: true,
        body: true,
      },
    ],
  },
  components: {
    NavBar,
    Contact,
    Projects,
    Skills,
    AboutMe,
    Home,
  },
};
</script>

<!-- STYLE DA PÁGINA -->
<style>
/* IMPORTANDO GOOGLE FONTS */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap");

/* CONTAINER */
:root {
  --header-height: 50px;
  --container-width: 80vw;
}

/* FONTE DE TIPOGRÁFIA */
:root {
  --body-font: "Poppins", sans-serif;
  --big-font-size: 1.5rem;
  --h2-font-size: 1.25rem;
  --normal-font-size: 0.75rem;
  --font-weight: 600;
  --first-color: #421361;
  --second-color: #140d14;
}

/*===== MARGENS =====*/
:root {
  --mb-1: 0.5rem;
  --mb-2: 1rem;
  --mb-3: 1.5rem;
  --mb-4: 2rem;
  --mb-5: 2.5rem;
  --mb-6: 3rem;
}

@media screen and (min-width: 768px) {
  :root {
    --big-font-size: 2.5rem;
    --h2-font-size: 1.5rem;
    --normal-font-size: 0.9rem;
  }
}

@media screen and (min-width: 992px) {
  :root {
    --big-font-size: 3.5rem;
    --h2-font-size: 2rem;
    --normal-font-size: 1rem;
  }
}

#app {
  margin: var(--header-height) 0 0 0;
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  font-weight: var(--font-weight);
  color: var(--second-color);
}

.titulo {
  font-size: var(--big-font-size);
  font-weight: var(--font-weight);
  color: var(--second-color);
}

.titulo-secundario {
  position: relative;
  font-size: var(--h2-font-size);
  font-weight: var(--font-weight);
  color: var(--first-color);
  margin-top: var(--mb-2);
  margin-bottom: var(--mb-4);
}

.titulo-secundario::after {
  position: absolute;
  content: "";
  width: 64px;
  height: 0.18rem;
  left: 0;
  right: 0;
  margin: auto;
  top: 2rem;
  background-color: var(--first-color);
}

.btnSocial {
  height: min-content;
  background-color: var(--first-color);
}

.btnSocial:hover {
  background-color: var(--second-color);
}

.titulo > span {
  color: var(--first-color);
}

.socialIcons {
  color: var(--first-color);
}

.socialIcons:hover {
  color: var(--second-color);
}

.firstColor {
  background-color: var(--first-color);
}

.secondaryColor {
  color: var(--second-color);
}

.container {
  width: var(--container-width);
}

.bgAlternative {
  background-color: rgba(109, 100, 59, 0.404);
}
</style>
