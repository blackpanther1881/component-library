import React, { HTMLAttributeAnchorTarget } from "react";
import { AnchorHTMLAttributes } from "react";

export interface CustomDropDownHrefProps {
  index: number;
  href?: string;
  optionName: React.ReactNode | string;
  image?: React.ReactNode | string;
  target?: HTMLAttributeAnchorTarget | undefined;
}

export type DropDownHrefProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  CustomDropDownHrefProps;

export const DropdownHrefItem = ({
  href,
  index,
  image,
  optionName,
  target = "_self"
}: DropDownHrefProps) => {
  return (
    <a
      key={index}
      className="px-4 py-2 flex items-center md:py-3 hover:cursor-pointer"
      href={href}
      target={target}
    >
      {image ? image : null}
      <span className="ml-4 text-light-high text-sm font-medium leading-normal md:text-xsm md:ml-2">
        {optionName}
      </span>
    </a>
  );
};
