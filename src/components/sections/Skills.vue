<template>
  <b-row class="p-4 text-center">
    <h2 class="titulo-secundario" v-scroll-reveal>
      {{ $t("section.skills.title") }}
    </h2>
    <b-col md="5" lg="4" v-scroll-reveal>
      <img src="@/assets/skills.jpg" class="img-fluid rounded" alt="" srcset="" />
    </b-col>
    <b-col md="7" lg="8" class="mt-3 mt-md-0">
      <div class="text-start mt-2">
        <h4 v-scroll-reveal>{{ $t("section.skills.skill1") }}</h4>
        <b-progress
          :value="88"
          variant="info"
          striped
          show-progress
          :animated="animate"
          class="mt-2"
          v-scroll-reveal
        ></b-progress>
      </div>
      <div class="text-start mt-2">
        <h4 v-scroll-reveal>{{ $t("section.skills.skill2") }}</h4>
        <b-progress
          :value="62"
          variant="info"
          striped
          show-progress
          :animated="animate"
          class="mt-2"
          v-scroll-reveal
        ></b-progress>
      </div>
      <div class="text-start mt-2">
        <h4 v-scroll-reveal>{{ $t("section.skills.skill3") }}</h4>
        <b-progress
          :value="75"
          variant="info"
          striped
          show-progress
          :animated="animate"
          class="mt-2"
          v-scroll-reveal
        ></b-progress>
      </div>
      <div class="text-start mt-2">
        <h4 v-scroll-reveal>{{ $t("section.skills.skill4") }}</h4>
        <b-progress
          :value="38"
          variant="info"
          striped
          show-progress
          :animated="animate"
          class="mt-2"
          v-scroll-reveal
        ></b-progress>
      </div>
      <div class="text-start mt-2">
        <h4 v-scroll-reveal>{{ $t("section.skills.skill5") }}</h4>
        <b-progress
          :value="24"
          variant="info"
          striped
          show-progress
          :animated="animate"
          class="mt-2"
          v-scroll-reveal
        ></b-progress>
      </div>
      <div class="text-start mt-2">
        <h4 v-scroll-reveal>{{ $t("section.skills.skill6") }}</h4>
        <b-progress
          :value="22"
          variant="info"
          striped
          show-progress
          :animated="animate"
          class="mt-2"
          v-scroll-reveal
        ></b-progress>
      </div>
      <div class="text-start mt-2">
        <h4 v-scroll-reveal>{{ $t("section.skills.skill7") }}</h4>
        <b-progress
          :value="65"
          variant="info"
          striped
          show-progress
          :animated="animate"
          class="mt-2"
          v-scroll-reveal
        ></b-progress>
      </div>
    </b-col>
  </b-row>
</template>
<script>
export default {
  name: "Skills",
  data: () => ({
    animate: true,
  }),
};
</script>
