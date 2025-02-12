import React from "react";
import { tv, VariantProps } from "tailwind-variants";
import { animated } from "@react-spring/web";
import { useDefaultAnimation } from "../utils/utils";
import Spinner from "./spinner";
import clsx from "clsx";

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
		patternClassName?: string;
		target?: string;
	};

const Button = ({
	theme,
	className,
	isLoading,
	isSubmitted,
	children,
	icon,
	patternClassName,
	delay,
	href,
	target,
}: Props) => {
	const { animation, ref } = useDefaultAnimation(delay);

	if (href) {
		if (delay) {
			return (
				<animated.a
					target={target}
					className={clsx("w-full", patternClassName)}
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
			<animated.div
				className={patternClassName}
				ref={ref}
				style={isSubmitted ? {} : animation}
			>
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
