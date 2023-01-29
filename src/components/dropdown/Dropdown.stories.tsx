import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { Dropdown, DropdownProps } from "./Dropdown";
import { DropdownItem } from "./DropdownItem";
import { DropdownHrefItem } from "./DropdownHrefItem";
// import { Button } from "../button";
//
// export default {
//   title: "Dropdown",
//   component: Dropdown,
//   decorators: [
//     (Story) => {
//       return (
//         <div className="w-80">
//           <Story />
//         </div>
//       );
//     }
//   ]
// } as ComponentMeta<typeof Dropdown>;
//
//

export default {
  title: "Dropdown",
  component: Dropdown
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const customDropdownButton = Template.bind({});
// @ts-ignore
customDropdownButton.args = {
  dropdownLabel: "Custom Dropdown",
  dropDownVariant: "custom",
  dropDownVariantBg: "bg-black-full text-light-high",
  rounded: false,
  children: [
    <DropdownHrefItem
      index={1}
      href="www.google.com"
      optionName="google"
      target="_blank"
    />
  ]
} as DropdownProps;

export const hoverDropdownButton = Template.bind({});
// @ts-ignore
hoverDropdownButton.args = {
  dropdownLabel: "Hover Dropdown",
  dropDownVariant: "custom",
  dropdownType: "hover",
  dropDownVariantBg: "bg-black-full text-light-high",
  rounded: false,
  children: [
    <DropdownHrefItem
      index={1}
      href="www.google.com"
      optionName="google"
      target="_blank"
    />,
    <DropdownItem
      index={2}
      onClick={() => {
        alert("clicked");
      }}
      optionName="google"
    />
  ]
} as DropdownProps;
