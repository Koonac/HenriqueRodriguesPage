<template>
  <b-row class="p-4">
    <b-col class="text-center">
      <h2 class="titulo-secundario" v-scroll-reveal>{{ $t("section.projects.title") }}</h2>
      <b-card-group>
        <b-card
          title="InstaFake"
          img-src="http://www.inforpress.cv/wp-content/uploads/2020/05/empty.jpg"
          img-alt="Image"
          img-top
          v-scroll-reveal
        >
          <b-card-text>
            {{ $t("section.projects.card1") }}
          </b-card-text>
          <b-card-footer footer-class="text-end">
            <b-btn
              href="https://fakeinsta.henriquersantos.com"
              class="btnSocial shadow"
              target="_blank"
              >{{ $t("section.projects.btnView") }}</b-btn
            >
          </b-card-footer>
        </b-card>
        <b-card
          title="SolicardSys"
          img-src="https://user-images.githubusercontent.com/98482410/198423490-ac3f9582-a877-4259-a038-b1c9eed1c7fd.png"
          img-alt="Image"
          img-top
          v-scroll-reveal
        >
          <b-card-text>
            {{ $t("section.projects.card2") }}
          </b-card-text>
          <b-card-footer footer-class="text-end">
            <b-btn
              href="https://sysgalaxpay.henriquersantos.com"
              class="btnSocial shadow"
              target="_blank"
              >{{ $t("section.projects.btnView") }}</b-btn
            >
          </b-card-footer>
        </b-card>
        <b-card
          title="Tic-Tac-Toe"
          img-src="http://www.inforpress.cv/wp-content/uploads/2020/05/empty.jpg"
          img-alt="Image"
          img-top
          v-scroll-reveal
        >
          <b-card-text v-html="$t('section.projects.card3')" />
          <b-card-footer footer-class="text-end">
            <b-btn
              href="https://tictactoe.henriquersantos.com"
              class="btnSocial shadow"
              target="_blank"
              >{{ $t("section.projects.btnView") }}</b-btn
            >
          </b-card-footer>
        </b-card>
      </b-card-group>
    </b-col>
  </b-row>
</template>
<script>
export default {
  name: "Projects",
};
</script>
