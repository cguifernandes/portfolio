import React from "react";
import { tv, VariantProps } from "tailwind-variants";

const button = tv({
	base: "rounded-lg px-3 py-2 text-sm text-white cursor-pointer duration-300 ease-in-out",
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
		children: React.ReactNode;
		href?: string;
	};

const Button = ({ theme, className, children, href }: Props) => {
	if (href) {
		return (
			<a href={href} className={button({ theme, className })}>
				{children}
			</a>
		);
	}

	return <button className={button({ theme, className })}>{children}</button>;
};

export default Button;
