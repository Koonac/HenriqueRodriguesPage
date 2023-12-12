<template>
  <b-row class="p-4">
    <b-col md="5" lg="4" v-scroll-reveal>
      <img src="@/assets/eu-social.jpg" class="img-fluid rounded" alt="" srcset="" />
    </b-col>
    <b-col md="7" lg="8" class="mt-3 mt-md-0 p-0">
      <b-row v-scroll-reveal>
        <h1 class="titulo" v-html="$t('section.home.title', { name: 'Henrique' })" />
      </b-row>
      <b-row v-scroll-reveal>
        <div class="d-flex justify-content-between">
          <b-btn href="#contato" class="btnSocial shadow">{{ $t("section.home.contact") }}</b-btn>
          <div>
            <b-link
              class="px-2 socialIcons"
              href="https://api.whatsapp.com/send?phone=5514998617696&text=Olá, disponivel para um novo serviço ?"
              target="_blank"
            >
              <font-awesome-icon icon="fa-brands fa-whatsapp" size="3x" bounce />
            </b-link>
            <b-link class="px-2 socialIcons" href="https://github.com/Koonac" target="_blank">
              <font-awesome-icon icon="fa-brands fa-github" size="3x" bounce />
            </b-link>
            <b-link
              class="px-2 socialIcons"
              href="https://www.linkedin.com/in/ednilson-rodrigues/"
              target="_blank"
            >
              <font-awesome-icon icon="fa-brands fa-linkedin-in" size="3x" bounce />
            </b-link>
          </div>
        </div>
      </b-row>
    </b-col>
  </b-row>
</template>
<script>
export default {
  name: "Home",
};
</script>
