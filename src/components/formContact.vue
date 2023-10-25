<template>
  <form
    class="flex flex-col gap-y-6 w-11/12 md:w-9/12 lg:w-4/12"
    @submit.prevent="handlerSubmitForm"
  >
    <div class="text-white space-y-2">
      <label for="name">Nome</label>
      <input
        id="name"
        v-model="name"
        class="px-4 py-3 w-full bg-grey-700 duration-200 border border-grey-400 placeholder:text-white/50 rounded-md focus:bg-grey-600"
        placeholder="Nome"
        type="text"
      >
      <span class="text-red-600">
        {{ errors.name }}
      </span>
    </div>
    <div class="text-white space-y-2">
      <label for="email">E-mail</label>
      <input
        id="email"
        v-model="email"
        class="px-4 py-3 w-full bg-grey-700 text-white duration-200 border border-grey-400 placeholder:text-white/50 rounded-md focus:bg-grey-600"
        placeholder="exemplo@email.com*"
        type="text"
      >
      <span class="text-red-600">
        {{ errors.email !== 'Required' ? errors.email : 'Campo obrigatório' }}
      </span>
    </div>
    <div class="text-white space-y-2">
      <label for="message">Mensagem para contato</label>
      <textarea
        id="message"
        v-model="message"
        class="px-4 py-3 w-full h-32 bg-grey-700 text-white duration-200 border border-grey-400 placeholder:text-white/50 rounded-md focus:bg-grey-600"
        placeholder="Mensagem*"
      />
      <span class="text-red-600">
        {{ errors.message !== 'Required' ? errors.message : 'Campo obrigatório' }}
      </span>
    </div>
    <span
      v-if="errorMessage !== ''"
      class="text-red-600 text-center"
    >{{ errorMessage }}</span>
    <ButtonComponent
      class-name="w-8/12 m-auto hover:w-9/12"
    >
      <template v-if="loading">
        <loadingComponent class-name="w-7 h-7 m-auto" />
      </template>
      <template v-else>
        Enviar
      </template>
    </ButtonComponent>
  </form>
</template>

<script setup lang="ts">
import ButtonComponent from './buttonComponent.vue'
import loadingComponent from './loadingComponent.vue'
import { useField, useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import emailjs from '@emailjs/browser'
import { ref } from 'vue'

const errorMessage = ref<string>('')
const loading = ref<boolean>(false)

const schema = toTypedSchema(
  z.object({
    name: z.optional(z.string()),
    email: z
      .string()
      .email('O e-mail precisa ser válido.')
      .refine(
        (text) => text.length > 1,
        'Esse campo é obrigatório'
      ),
    message: z
      .string()
      .min(32, 'O campo descrição deve conter 32 caracteres.')
  })
)

const { handleSubmit, errors, resetForm } = useForm({ validationSchema: schema })

const { value: name } = useField('name')
const { value: email } = useField('email')
const { value: message } = useField<string>('message')

const handlerSubmitForm = handleSubmit((props) => {
  loading.value = true
  emailjs.send('service_0nqll4p', 'template_7i63fdf', props, '6H4tRi_ZPt2FimCS5')
    .then(() => {
      resetForm()
    }).catch((error) => {
      console.log(error)
      errorMessage.value = error
    }).finally(() => {
      loading.value = false
    })
})

</script>
