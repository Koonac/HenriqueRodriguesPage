<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top" class="ps-4 pe-4 p-2">
    <b-navbar-brand href="#">{{ titulo ?? "Henrique Rodrigues" }}</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#inicio" class="px-2" active>{{ $t("nav.home") }}</b-nav-item>
        <b-nav-item href="#sobre" class="px-2">{{ $t("nav.aboutMe") }}</b-nav-item>
        <b-nav-item href="#habilidades" class="px-2">{{ $t("nav.skills") }}</b-nav-item>
        <b-nav-item href="#portifolio" class="px-2">{{ $t("nav.projects") }}</b-nav-item>
        <b-nav-item href="#contato" class="px-2">{{ $t("nav.contact") }}</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="w-100 pe-4" align="right">
        <lang-switcher />
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
import LangSwitcher from "@/components/LangSwitcher.vue";

export default {
  name: "NavBar",
  components: { LangSwitcher },
  props: {
    titulo: String,
  },
};
</script>
