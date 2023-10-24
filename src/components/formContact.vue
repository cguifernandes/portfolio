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
        {{ errors.email !== 'Required' ? errors.email : '' }}
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
        {{ errors.message !== 'Required' ? errors.message : '' }}
      </span>
    </div>

    <ButtonComponent class-name="w-8/12 m-auto hover:w-9/12">
      Enviar
    </ButtonComponent>
  </form>
</template>

<script setup lang="ts">
import ButtonComponent from './buttonComponent.vue'
import { useField, useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

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

const { handleSubmit, errors } = useForm({ validationSchema: schema })

const { value: name } = useField('name')
const { value: email } = useField('email')
const { value: message } = useField<string>('message')

const handlerSubmitForm = handleSubmit((props) => {
  console.log(props)
})

</script>
