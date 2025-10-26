import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import Button from "../button";
import Input from "../input";
import Textarea from "../textarea";

const schema = z.object({
  name: z
    .string()
    .max(50, "Este campo deve ter no máximo 50 caracteres")
    .optional(),
  email: z
    .string()
    .min(1, "Este campo é obrigatório")
    .email("E-mail inválido, por favor digite um e-mail válido")
    .max(50, "Este campo deve ter no máximo 50 caracteres"),
  message: z
    .string()
    .min(1, "Este campo é obrigatório")
    .max(400, "Este campo deve ter no máximo 400 caracteres"),
});

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({
    reValidateMode: "onSubmit",
    resolver: zodResolver(schema),
  });

  const handlerSubmitMessage = (formData: z.infer<typeof schema>) => {
    setIsLoading(true);

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(() => {
        toast.success("Mensagem enviada com sucesso", {
          className:
            "!bg-neutral-900/60 !backdrop-blur-md !border !border-neutral-800 !text-white",
          position: "bottom-right",
          duration: 5000,
        });
        reset();
      })
      .catch((error) => {
        console.error("Erro ao enviar mensagem:", error);
        toast.error("Erro ao enviar mensagem. Tente novamente.", {
          className:
            "!bg-neutral-900/60 !backdrop-blur-md !border !border-neutral-800 !text-white",
          position: "bottom-right",
          duration: 5000,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="py-20 scroll-mt-8 px-6 lg:px-4 flex justify-center w-full bg-neutral-900"
    >
      <div className="flex w-full items-center flex-col gap-y-10">
        <motion.h1
          initial={{ opacity: 0, filter: "blur(4px)", y: -5 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-white text-center text-xl"
        >
          Contato
        </motion.h1>
        <form
          onSubmit={handleSubmit(handlerSubmitMessage)}
          className="flex w-full max-w-3xl flex-col gap-y-4"
        >
          <Input
            id="name"
            maxLength={50}
            label="Nome"
            {...register("name")}
            patternClassName="w-full"
            placeholder="João Silva"
            error={errors.name?.message}
            disabled={isLoading}
            animated
          />
          <Input
            id="email"
            mandatory
            {...register("email")}
            label="E-mail"
            maxLength={50}
            patternClassName="w-full"
            placeholder="joao.silva@example.com"
            error={errors.email?.message}
            disabled={isLoading}
            animated
          />
          <Textarea
            id="message"
            mandatory
            {...register("message")}
            maxLength={400}
            label="Mensagem"
            patternClassName="w-full"
            placeholder="Mensagem de contato"
            disabled={isLoading}
            error={errors.message?.message}
            animated
          />
          <Button
            className="flex w-full justify-center items-center"
            isLoading={isLoading}
            type="submit"
            animated
          >
            Enviar
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
