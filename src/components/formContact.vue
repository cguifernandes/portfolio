<template>
  <form
    class="flex flex-col relative gap-y-6 w-11/12 md:w-9/12 lg:w-4/12"
    @submit.prevent="handlerSubmitForm"
  >
    <div class="blur-top-form" />
    <div class="text-white space-y-2">
      <label for="name">{{ $t("Nome") }}</label>
      <input
        id="name"
        v-model="name"
        class="px-4 py-3 w-full glass-effect duration-200 placeholder:text-white/50 rounded-md focus:bg-grey-600"
        :placeholder="$t('Nome')"
        type="text"
      >
    </div>
    <div class="text-white space-y-2">
      <label for="email">E-mail</label>
      <input
        v-model="email"
        class="px-4 py-3 w-full glass-effect text-white duration-200 placeholder:text-white/50 rounded-md focus:bg-grey-600"
        placeholder="E-mail"
        type="text"
      >
    </div>
    <div class="text-white space-y-2">
      <label for="message">{{ $t("Mensagem para contato") }}</label>
      <textarea
        id="message"
        v-model="message"
        class="px-4 py-3 w-full h-32 glass-effect text-white duration-200 placeholder:text-white/50 rounded-md focus:bg-grey-600"
        :placeholder="$t('Mensagem*')"
      />
    </div>
    <span
      v-if="errorMessage !== ''"
      class="text-red-600 text-center"
    >{{ $t(`${errorMessage}`) }}</span>
    <ButtonComponent
      :disabled="loading"
      class-name="w-8/12 m-auto hover:w-9/12"
    >
      <template v-if="loading">
        <loadingComponent class-name="w-6 h-6 m-auto" />
      </template>
      <template v-else>
        {{ $t("Enviar") }}
      </template>
    </ButtonComponent>
    <div class="blur-bottom-form" />
  </form>
</template>

<script setup lang="ts">
import ButtonComponent from "./buttonComponent.vue";
import loadingComponent from "./loadingComponent.vue";
import emailjs from "@emailjs/browser";
import { ref } from "vue";
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-default.css";
const $toast = useToast();

const errorMessage = ref<string>("");
const name = ref<string>("");
const email = ref<string>("");
const message = ref<string>("");
const loading = ref<boolean>(false);

const handlerSubmitForm = (): void => {
	if (email.value === "") {
		errorMessage.value = "Por favor preencha o campo 'E-mail'";
	} else if (message.value === "") {
		errorMessage.value = "Por favor preencha o campo 'Mensagem'";
	} else {
		loading.value = true;
		errorMessage.value = "";

		const props = {
			name: name.value === "" ? "Sem nome" : name.value,
			email: email.value,
			message: message.value,
		};

		emailjs
			.send("service_0nqll4p", "template_7i63fdf", props, "6H4tRi_ZPt2FimCS5")
			.then(() => {
				name.value = "";
				email.value = "";
				message.value = "";

				$toast.default("O e-mail foi enviado com sucesso!", {
					position: "top",
				});
			})
			.catch((error) => {
				console.log(error);
				errorMessage.value = error;
			})
			.finally(() => {
				loading.value = false;
			});
	}
};
</script>
