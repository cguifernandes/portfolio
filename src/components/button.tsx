import React from "react";
import { tv, VariantProps } from "tailwind-variants";

const button = tv({
	base: "rounded-lg px-3 py-2 text-white cursor-pointer duration-300 ease-in-out",
	variants: {
		theme: {
			primary: "bg-gradient-primary",
			outline: "button-gradient-outline border border-neutral-800",
		},
	},
	defaultVariants: {
		theme: "primary",
	},
});

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof button> & {
		icon?: React.ReactNode;
		children: React.ReactNode;
	};

const Button = ({ theme, icon, className, children }: Props) => {
	return (
		<button
			className={button({
				theme,
				className,
			})}
		>
			{icon}
			{children}
		</button>
	);
};

export default Button;
