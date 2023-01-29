import React, { ReactElement, useRef } from "react";
import { DetailedHTMLProps, forwardRef, HTMLAttributes, useState } from "react";
import { Button } from "../button";
import { useOnClickOutside } from "../../utils/useOnClickOutside";
import { DropdownItem } from "./DropdownItem";
import { emptyFunc } from "../../utils/helpers";
import { DropdownHrefItem } from "./DropdownHrefItem";

export interface optionList {
  optionName: React.ReactNode | string;
  handler?: () => void;
  image?: React.ReactNode | string;
  type: "anchor" | "onClick";
}

export type DropdownButtonVariants = "primary" | "custom";
export type DropdownType = "hover" | "click";

export type DropdownProps = {
  dropdownLabel: React.ReactNode | string;
  dropdownType?: DropdownType;
  children: ReactElement[];
  className?: string;
  rounded?: boolean;
  // optionList: optionList[];
  staticBackDrop?: boolean;
  dropDownVariant: DropdownButtonVariants;
  dropDownVariantBg?: string;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  ({
    children,
    dropdownLabel,
    className = "",
    rounded = false,
    staticBackDrop = true,
    dropDownVariant = "primary",
    dropDownVariantBg = "",
    dropdownType = "click"
  }) => {
    const [open, setOpen] = useState<boolean>(false);
    const topRounding = rounded ? "rounded-t-md" : "";

    const ref = useRef<HTMLDivElement>(null);

    useOnClickOutside(ref, () => {
      setOpen(false);
    });

    return (
      <div
        className={`${topRounding} ${className} text-white relative inline-block dropDown ${
          dropdownType === "click" ? "dropDownClick" : "dropDownHover"
        }`}
        ref={staticBackDrop ? null : ref}
      >
        <Button
          name={"buttonConnect"}
          className={`dropDownButton w-full md:py-2 md:text-sm`}
          variant={dropDownVariant === "primary" ? "solid" : "custom"}
          scale="lg"
          isDisabled={false}
          onClick={
            dropdownType === "click" ? () => setOpen((prev) => !prev) : () => {}
          }
          customButtonClass={
            dropDownVariant !== "primary"
              ? dropDownVariantBg
                ? `${dropDownVariantBg}`
                : "bg-black-800 text-light-high"
              : ""
          }
        >
          {dropdownLabel}
        </Button>
        <div
          className={`dropDownContent w-fit absolute opacity-0 transition-opacity transform ease duration-200 bg-dropDown left-0 right-0 ${
            open ? "visible translate-y-0 opacity-100" : "invisible"
          } text-light-high rounded-md`}
        >
          {children.map((item, index) =>
            item.props.href ? (
              <DropdownHrefItem
                href={item.props.href ? item.props.href : "#"}
                image={item.props.image}
                target={item.props.target}
                index={index}
                optionName={item.props.optionName}
              />
            ) : (
              <DropdownItem
                onClick={item.props.href ? emptyFunc : item.props.onClick}
                image={item.props.image}
                index={index}
                optionName={item.props.optionName}
              />
            )
          )}
        </div>
      </div>
    );
  }
);
