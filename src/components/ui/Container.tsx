import clsx from "clsx";
import type { ContainerProps } from "@/types/components";

export default function Container({ children, className }: ContainerProps) {
  return <div className={clsx("container", className)}>{children}</div>;
}
