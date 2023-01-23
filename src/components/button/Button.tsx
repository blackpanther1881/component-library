import React from "react";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { CSType } from "../../types/Colors";
import { SizeType } from "../../types/Sizes";
import { ButtonVariants } from "../../types/Variants";
import { forwardRef } from "../../utils/forwardRef";

export interface CustomButtonProps {
  color?: CSType;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  variant?: ButtonVariants;
  focusEffect?: boolean;
  scale?: SizeType;
  isDisabled?: boolean;
}

const ENABLED_STYLES:  Record<"solid" | "ghost", any> = {
  solid: {
    primary: "hover:bg-red-light",
  },
  ghost: {
    primary: "hover:bg-red"
  },
};

const COLORS = (
  variant: ButtonVariants,
  color: CSType,
) => {
  const colors = {
    solid: {
        primary: `bg-red text-light-high`,
    },
    ghost: {
        primary: "text-light-high",
    },
    outline: {
        primary: "border-red",
    },
  };
  return colors[variant][color];
};

const SIZES: Record<SizeType, string> = {
  lg: "px-5 py-3 gap-2",
  md: "px-4 py-2 gap-2",
  sm: "px-2 py-2 gap-1 text-xs",
  xl: "px-6 py-3 gap-3 text-lg",
};

const BASE_BUTTON = "rounded-md flex items-center";

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  CustomButtonProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      isDisabled = false,
      leftIcon,
      rightIcon,
      variant = "solid",
      color,
      className,
      focusEffect = true,
      scale = "md",
      ...props
    },
    ref
  ) => {

    return (
      <button
        ref={ref}
        className={`${
          className || ""
        } font-medium transition-all duration-200 ease-in-out ${
          SIZES[scale]
        } min-w-fit ${
          isDisabled
            ? `cursor-not-allowed text-opacity-70`
            : `${
                variant === "ghost" || variant === "solid"
                  ? ENABLED_STYLES[variant][color]
                  : variant === "outline"
                  ? ENABLED_STYLES["ghost"][color]
                  : ""
              }`
        } ${
          leftIcon === undefined && rightIcon === undefined
            ? "justify-center"
            : "justify-start"
        } ${BASE_BUTTON} ${
          variant === "solid"
            ? `${COLORS("solid", "primary")} ${
                focusEffect
                  ? "focus:outline-offset-2 focus:outline focus:outline-2 focus:outline-blue-600"
                  : "focus:outline-none"
              }`
            : variant === "link"
            ? `${COLORS("ghost", "primary")} ${
                !isDisabled && "hover:underline"
              } no-underline bg-transparent border-none outline-none`
            : variant === "ghost"
            ? `hover:bg-opacity-50 bg-transparent  ${COLORS(
                "ghost",
                "primary",
              )}`
            : `border hover:outline-none bg-transparent ${COLORS(
                "ghost",
                "primary",
              )} ${COLORS("outline", "primary")}`
        }`}
        disabled={isDisabled}
        {...props}
      >
        {leftIcon ? (
          <div
            className={`w-4 h-4 flex justify-center items-center ${
              variant === "solid"
                ?  "text-white"
                : COLORS("ghost", "primary")
            }`}
          >
            {leftIcon}
          </div>
        ) : null}
        {children}
        {rightIcon ? (
          <div
            className={`w-4 h-4 flex justify-center items-center ${
              variant === "solid"
                ? "text-white"
                : COLORS("ghost", "primary")
            }`}
          >
            {rightIcon}
          </div>
        ) : null}
      </button>
    );
  }
);
