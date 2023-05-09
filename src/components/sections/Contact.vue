<template>
    <b-row class="p-4" align-h="center">
      <b-col md="6" class="text-center">
        <h2 class="titulo-secundario" v-if="showForm" v-scroll-reveal>
          {{ $t("section.contact.title") }}
        </h2>
        <b-form @submit.prevent="sendEmail" v-if="showForm">
          <b-form-group label-for="name" class="my-2" v-scroll-reveal>
            <b-form-input
              id="name"
              name="name"
              v-model="name"
              type="text"
              :placeholder="$t('section.contact.form.name')"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group label-for="email" class="my-2" v-scroll-reveal>
            <b-form-input
              id="email"
              name="email"
              v-model="email"
              type="email"
              :placeholder="$t('section.contact.form.email')"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group label-for="message" class="my-2" v-scroll-reveal>
            <b-form-textarea
              id="message"
              name="message"
              v-model="message"
              type="text"
              :placeholder="$t('section.contact.form.message')"
              rows="3"
              max-rows="6"
              required
            ></b-form-textarea>
          </b-form-group>
          <b-button type="submit" class="btnSocial shadow my-2" v-scroll-reveal
            ><b-spinner v-if="showSpinner" small label="Spinning"></b-spinner>
            {{ textBtnSend ?? $t("section.contact.form.btnSend") }}</b-button
          >
        </b-form>
        <b-alert :show="!showForm" :variant="colorAlert" v-scroll-reveal>{{ msgAlert }}</b-alert>
      </b-col>
    </b-row>
</template>
<script>
// IMPORTANDO EMAIL JS
import emailjs from "emailjs-com";

/* IMPORTANDO LANGS */
import i18n from "@/i18n";

export default {
  name: "Contact",
  data: () => ({
    email: "",
    name: "",
    message: "",
    showForm: true,
    colorAlert: "success",
    msgAlert: "",
    textBtnSend: null,
    showSpinner: false,
  }),
  methods: {
    sendEmail(e) {
      this.showSpinner = true;
      this.textBtnSend = i18n.t("section.contact.form.btnSending");
      emailjs.sendForm("service_eurd5to", "template_kwg513d", e.target, "yzpczPyFCkstjj0bv").then(
        () => {
          this.showForm = false;
          this.msgAlert = i18n.t("section.contact.msgAlert.successSendEmail");
        },
        (e) => {
          this.showForm = false;
          this.colorAlert = "danger";
          this.msgAlert = i18n.t("section.contact.msgAlert.errorSendEmail");
          e.console.error();
        }
      );
      // Reset form field
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>
