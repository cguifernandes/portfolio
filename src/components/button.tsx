import React from "react";
import { tv, VariantProps } from "tailwind-variants";
import { animated } from "@react-spring/web";
import { useDefaultAnimation } from "../utils/utils";
import Spinner from "./spinner";

const button = tv({
	base: "rounded-lg px-3 h-10 py-2 text-sm text-white cursor-pointer duration-300 ease-in-out",
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
		delay?: number;
		icon?: React.ReactNode;
		isLoading?: boolean;
		isSubmitted?: boolean;
	};

const Button = ({
	theme,
	className,
	isLoading,
	isSubmitted,
	children,
	icon,
	delay,
	href,
}: Props) => {
	const { animation, ref } = useDefaultAnimation(delay);

	if (href) {
		if (delay) {
			return (
				<animated.a
					className="w-full"
					ref={ref}
					style={isSubmitted ? {} : animation}
					href={href}
				>
					<button
						className={button({ theme, className: `w-full h-10 ${className}` })}
					>
						{isLoading ? (
							<Spinner />
						) : (
							<>
								{icon} {children}
							</>
						)}
					</button>
				</animated.a>
			);
		}

		return (
			<a className="w-full" href={href}>
				<button
					className={button({ theme, className: `w-full h-10 ${className}` })}
				>
					{isLoading ? (
						<Spinner />
					) : (
						<>
							{icon} {children}
						</>
					)}
				</button>
			</a>
		);
	}

	if (delay) {
		return (
			<animated.div ref={ref} style={isSubmitted ? {} : animation}>
				<button className={button({ theme, className })}>
					{isLoading ? (
						<Spinner />
					) : (
						<>
							{icon} {children}
						</>
					)}
				</button>
			</animated.div>
		);
	}

	return (
		<button className={button({ theme, className })}>
			{isLoading ? (
				<Spinner />
			) : (
				<>
					{icon} {children}
				</>
			)}
		</button>
	);
};

export default Button;
