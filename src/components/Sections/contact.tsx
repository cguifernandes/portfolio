import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { useI18n } from "../../i18n/useI18n";
import Button from "../button";
import Input from "../input";
import Textarea from "../textarea";

const Contact = () => {
  const { t } = useI18n();
  const [isLoading, setIsLoading] = useState(false);

  const schema = useMemo(
    () =>
      z.object({
        name: z.string().max(50, t("contact.validation.name.max")).optional(),
        email: z
          .string()
          .min(1, t("contact.validation.email.required"))
          .email(t("contact.validation.email.invalid"))
          .max(50, t("contact.validation.email.max")),
        message: z
          .string()
          .min(1, t("contact.validation.message.required"))
          .max(400, t("contact.validation.message.max")),
      }),
    [t],
  );

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
        toast.success(t("contact.toast.success"), {
          className:
            "!bg-neutral-900/60 !backdrop-blur-md !border !border-neutral-800 !text-white",
          position: "bottom-right",
          duration: 5000,
        });
        reset();
      })
      .catch((error) => {
        console.error("Erro ao enviar mensagem:", error);
        toast.error(t("contact.toast.error"), {
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
      className="py-20 scroll-mt-8 px-6 lg:px-4 flex justify-center w-full"
    >
      <div className="flex w-full items-center flex-col gap-y-10">
        <motion.h1
          initial={{ opacity: 0, filter: "blur(4px)", y: -5 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-white text-center text-xl"
        >
          {t("contact.title")}
        </motion.h1>
        <form
          onSubmit={handleSubmit(handlerSubmitMessage)}
          className="flex w-full max-w-3xl flex-col gap-y-4"
        >
          <Input
            id="name"
            maxLength={50}
            label={t("contact.form.name.label")}
            {...register("name")}
            patternClassName="w-full"
            placeholder={t("contact.form.name.placeholder")}
            error={errors.name?.message}
            disabled={isLoading}
            animated
          />
          <Input
            id="email"
            mandatory
            {...register("email")}
            label={t("contact.form.email.label")}
            maxLength={50}
            patternClassName="w-full"
            placeholder={t("contact.form.email.placeholder")}
            error={errors.email?.message}
            disabled={isLoading}
            animated
          />
          <Textarea
            id="message"
            mandatory
            {...register("message")}
            maxLength={400}
            label={t("contact.form.message.label")}
            patternClassName="w-full"
            placeholder={t("contact.form.message.placeholder")}
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
            {t("contact.form.submit")}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
