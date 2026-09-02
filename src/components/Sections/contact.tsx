import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { useI18n } from "../../i18n/useI18n";
import { CONTACT_EMAIL, GITHUB_URL, LINKEDIN_URL } from "../../utils/utils";
import { GlowBackdrop } from "../backdrops";
import Button from "../button";
import Container from "../container";
import Input from "../input";
import Textarea from "../textarea";

const CHANNELS = [
  { id: "email", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { id: "linkedin", value: "/guilherme-fernandes", href: LINKEDIN_URL },
  { id: "github", value: "/cguifernandes", href: GITHUB_URL },
];

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
    <Container backdrop={<GlowBackdrop position="bottom-right" />} id="contact">
      <div className="grid grid-cols-1 items-stretch gap-10 md:gap-16 lg:grid-cols-2">
        <div className="relative flex h-full flex-col gap-y-6">
          <motion.span
            initial={{ opacity: 0, filter: "blur(4px)", y: -5 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-primary-500 text-xs uppercase tracking-[0.13em] text-center md:text-left lg:absolute lg:top-0 lg:left-0"
          >
            {t("contact.label")}
          </motion.span>

          <div className="flex flex-1 flex-col justify-center gap-y-6">
            <motion.h1
              initial={{ opacity: 0, filter: "blur(4px)", y: -5 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="md:max-w-[20ch] text-3xl text-white leading-[1.4] tracking-[-0.02em] text-center md:text-left"
            >
              {t("contact.title")}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, filter: "blur(4px)", y: -5 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              className="flex flex-col gap-px overflow-hidden rounded-lg border border-neutral-800 bg-neutral-800"
            >
              {CHANNELS.map(({ id, value, href }) => (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-x-4 bg-neutral-950 px-5 py-4 text-white duration-300 ease-in-out hover:bg-neutral-900 hover:text-primary-500"
                >
                  <span className="text-neutral-500 text-xs uppercase tracking-[0.1em]">
                    {t(`contact.channels.${id}`)}
                  </span>
                  <span className="truncate text-sm">{value}</span>
                </a>
              ))}
            </motion.div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(handlerSubmitMessage)}
          className="flex w-full flex-col gap-y-4 rounded-xl border border-neutral-800 bg-neutral-950 p-7"
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
            className="flex w-full items-center justify-center"
            isLoading={isLoading}
            type="submit"
            animated
          >
            {t("contact.form.submit")}
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Contact;
