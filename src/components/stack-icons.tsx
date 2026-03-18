/* eslint-disable react-refresh/only-export-components */
import type { ReactNode } from "react";
import { SiReact } from "react-icons/si";
import { ICON_BY_STACK_NAME } from "./stack-icon-map";

type StackIconProps = {
  name: string;
  className?: string;
  size?: number;
};

export function StackIcon({ name, className, size = 22 }: StackIconProps) {
  const IconComponent = ICON_BY_STACK_NAME[name] ?? SiReact;

  return (
    <IconComponent
      size={size}
      className={className ?? "text-white"}
      aria-hidden
      focusable={false}
    />
  );
}

export function getStackIcon(name: string): ReactNode {
  return <StackIcon name={name} />;
}
