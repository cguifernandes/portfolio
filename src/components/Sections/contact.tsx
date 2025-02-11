import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDefaultAnimation } from "../../utils/utils";
import { animated } from "@react-spring/web";
import Input from "../input";
import Textarea from "../textarea";
import Button from "../button";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import toast from "react-hot-toast";

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
		<section className="py-20 flex justify-center w-full bg-neutral-900">
			<div className="flex flex-col gap-y-10">
				<animated.h1
					style={useDefaultAnimation(300)}
					className="text-white text-center text-xl"
				>
					Contato
				</animated.h1>
				<form
					onSubmit={handleSubmit(handlerSubmitMessage)}
					className="flex w-3xl flex-col gap-y-4"
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
					/>
					<Button
						className="flex justify-center items-center"
						isLoading={isLoading}
						type="submit"
					>
						Enviar
					</Button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
