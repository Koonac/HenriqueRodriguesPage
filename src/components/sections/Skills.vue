<template>
  <b-row class="p-4 text-center">
    <h2 class="titulo-secundario" v-scroll-reveal>
      {{ $t("section.skills.title") }}
    </h2>
    <b-col md="5" lg="4" v-scroll-reveal>
      <img src="@/assets/skills.png" class="img-fluid rounded" alt="" srcset="" />
    </b-col>
    <b-col md="7" lg="8" class="mt-3 mt-md-0">
      <div class="text-start mt-2">
        <h4 v-scroll-reveal>
          {{ $t("section.skills.skill6.name") }}
          <span class="fs-6 fw-light fst-italic">
            ({{ $t("section.skills.skill6.experience") }})
          </span>
        </h4>
        <b-progress
          :value="70"
          variant="info"
          striped
          show-progress
          :animated="animate"
          class="mt-2"
          v-scroll-reveal
        ></b-progress>
      </div>
      <div class="text-start mt-2">
        <h4 v-scroll-reveal>
          {{ $t("section.skills.skill1.name") }}
          <span class="fs-6 fw-light fst-italic">
            ({{ $t("section.skills.skill1.experience") }})
          </span>
        </h4>
        <b-progress
          :value="70"
          variant="info"
          striped
          show-progress
          :animated="animate"
          class="mt-2"
          v-scroll-reveal
        ></b-progress>
      </div>
      <div class="text-start mt-2">
        <h4 v-scroll-reveal>
          {{ $t("section.skills.skill2.name") }}
          <span class="fs-6 fw-light fst-italic">
            ({{ $t("section.skills.skill2.experience") }})
          </span>
        </h4>
        <b-progress
          :value="60"
          variant="info"
          striped
          show-progress
          :animated="animate"
          class="mt-2"
          v-scroll-reveal
        ></b-progress>
      </div>
      <div class="text-start mt-2">
        <h4 v-scroll-reveal>
          {{ $t("section.skills.skill8.name") }}
          <span class="fs-6 fw-light fst-italic">
            ({{ $t("section.skills.skill8.experience") }})
          </span>
        </h4>
        <b-progress
          :value="60"
          variant="info"
          striped
          show-progress
          :animated="animate"
          class="mt-2"
          v-scroll-reveal
        ></b-progress>
      </div>
      <div class="text-start mt-2">
        <h4 v-scroll-reveal>
          {{ $t("section.skills.skill7.name") }}
          <span class="fs-6 fw-light fst-italic">
            ({{ $t("section.skills.skill7.experience") }})
          </span>
        </h4>
        <b-progress
          :value="40"
          variant="info"
          striped
          show-progress
          :animated="animate"
          class="mt-2"
          v-scroll-reveal
        ></b-progress>
      </div>
      <div class="text-start mt-2">
        <h4 v-scroll-reveal>
          {{ $t("section.skills.skill3.name") }}
          <span class="fs-6 fw-light fst-italic">
            ({{ $t("section.skills.skill3.experience") }})
          </span>
        </h4>
        <b-progress
          :value="40"
          variant="info"
          striped
          show-progress
          :animated="animate"
          class="mt-2"
          v-scroll-reveal
        ></b-progress>
      </div>
      <div class="text-start mt-2">
        <h4 v-scroll-reveal>
          {{ $t("section.skills.skill9.name") }}
          <span class="fs-6 fw-light fst-italic">
            ({{ $t("section.skills.skill9.experience") }})
          </span>
        </h4>
        <b-progress
          :value="30"
          variant="info"
          striped
          show-progress
          :animated="animate"
          class="mt-2"
          v-scroll-reveal
        ></b-progress>
      </div>

      <div class="text-start mt-2">
        <h4 v-scroll-reveal>
          {{ $t("section.skills.skill4.name") }}
          <span class="fs-6 fw-light fst-italic">
            ({{ $t("section.skills.skill4.experience") }})
          </span>
        </h4>
        <b-progress
          :value="30"
          variant="info"
          striped
          show-progress
          :animated="animate"
          class="mt-2"
          v-scroll-reveal
        ></b-progress>
      </div>
      <div class="text-start mt-2">
        <h4 v-scroll-reveal>
          {{ $t("section.skills.skill5.name") }}
          <span class="fs-6 fw-light fst-italic">
            ({{ $t("section.skills.skill5.experience") }})
          </span>
        </h4>
        <b-progress
          :value="15"
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
