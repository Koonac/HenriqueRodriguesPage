<template>
  <div>
    <div class="row py-2">
      <div class="col text-center">
        <h2 class="titulo-secundario" v-scroll-reveal>{{ $t("section.projects.title") }}</h2>
        <div class="row">
          <!-- CYNTHIA MAGRINI -->
          <div class="col-md-4 py-2">
            <b-card
              title="Curso Cinthia Magrini - LP de vendas"
              :img-src="require(`@/assets/cinthia-magrini.jpg`)"
              img-alt="Image"
              img-top
              v-scroll-reveal
            >
              <b-card-text>
                {{ $t("section.projects.card6") }}
              </b-card-text>
              <b-card-footer footer-class="text-end">
                <b-btn
                  href="https://cinthiamagriniadvogada.henriquersantos.com"
                  class="btnSocial shadow"
                  target="_blank"
                  >{{ $t("section.projects.btnView") }}</b-btn
                >
              </b-card-footer>
            </b-card>
          </div>
          <!-- MONEY SAGE -->
          <div class="col-md-4 py-2">
            <b-card
              title="MoneySage - LP de vendas"
              :img-src="require(`@/assets/moneySage.jpg`)"
              img-alt="Image"
              img-top
              v-scroll-reveal
            >
              <b-card-text>
                {{ $t("section.projects.card5") }}
              </b-card-text>
              <b-card-footer footer-class="text-end">
                <b-btn
                  href="https://moneysage.henriquersantos.com"
                  class="btnSocial shadow"
                  target="_blank"
                  >{{ $t("section.projects.btnView") }}</b-btn
                >
              </b-card-footer>
            </b-card>
          </div>
          <!-- SAÚDE EM RIQUEZA -->
          <div class="col-md-4 py-2">
            <b-card
              title="Saúde em riqueza - LP com Quiz"
              :img-src="require(`@/assets/saude-em-riqueza.jpg`)"
              img-alt="Image"
              img-top
              v-scroll-reveal
            >
              <b-card-text>
                {{ $t("section.projects.card4") }}
              </b-card-text>
              <b-card-footer footer-class="text-end">
                <b-btn
                  href="https://saudeemriqueza.henriquersantos.com"
                  class="btnSocial shadow"
                  target="_blank"
                  >{{ $t("section.projects.btnView") }}</b-btn
                >
              </b-card-footer>
            </b-card>
          </div>
          <!-- SOLICARD SYS -->
          <div class="col-md-4 py-2">
            <b-card
              title="SolicardSys"
              :img-src="require(`@/assets/solicard-sys.png`)"
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
          </div>
          <!-- FAKE INSTA -->
          <div class="col-md-4 py-2">
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
          </div>
          <!-- TIC TAC TOE -->
          <div class="col-md-4 py-2">
            <b-card
              title="Tic-Tac-Toe"
              :img-src="require(`@/assets/jogo-da-velha.png`)"
              img-alt="Image"
              img-top
              v-scroll-reveal
              style="width: 100%"
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Projects",
};
</script>
