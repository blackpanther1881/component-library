import React from "react";

type Props = {
  index: number;
  onClick?: () => void;
  optionName: React.ReactNode | string;
  image?: React.ReactNode | string;
};

export const DropdownItem: React.FC<Props> = ({
  onClick,
  index,
  image,
  optionName
}) => {
  return (
    <div
      key={index}
      className="px-4 py-2 flex items-center md:py-3 hover:cursor-pointer"
      onClick={onClick}
    >
      {image ? image : null}
      <span className="ml-4 text-light-high text-sm font-medium leading-normal md:text-xsm md:ml-2">
        {optionName}
      </span>
    </div>
  );
};
