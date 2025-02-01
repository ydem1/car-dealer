"use client";

import React, { FC, memo, MouseEventHandler, ReactNode } from "react";
import cn from "classnames";
import { BUTTON_STYLE_VARIANTS } from "./constants";
import { ButtonVariants } from "./types";

interface Props {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariants;
  type?: "button" | "submit" | "reset";
  isDisabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const ButtonComponent: FC<Props> = ({
  children,
  className,
  variant = ButtonVariants.PRIMARY,
  type = "button",
  isDisabled,
  onClick,
}) => {
  const combinedClassNames = cn(
    "flex justify-center items-center outline-0 transition ease-in-out duration-200 active:translate-y-0.5 active:duration-150 active:brightness-95 disabled:opacity-50 disabled:active:translate-y-0 disabled:brightness-100",
    BUTTON_STYLE_VARIANTS[variant],
    className
  );

  return (
    <button
      className={combinedClassNames}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export const Button = memo(ButtonComponent);
