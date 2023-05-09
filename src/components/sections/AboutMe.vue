<template>
  <b-row class="p-4 text-center">
    <h2 class="titulo-secundario" v-scroll-reveal>{{ $t("section.aboutMe.title") }}</h2>
    <b-col md="7" lg="8" class="mt-3 mt-md-0 text-center" v-scroll-reveal>
      <h3>{{ $t("section.aboutMe.message") }}</h3>
    </b-col>
    <b-col md="5" lg="4" v-scroll-reveal>
      <img src="@/assets/about.jpg" class="img-fluid rounded" alt="" srcset="" />
    </b-col>
  </b-row>
</template>
<script>
export default {
  name: "AboutMe",
};
</script>
