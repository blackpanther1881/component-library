import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { Dropdown, DropdownProps } from "./Dropdown";

export default {
  title: "Dropdown",
  component: Dropdown,
  decorators: [
    (Story) => {
      return (
        <div className="w-80">
          <Story />
        </div>
      );
    }
  ]
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => {
  return <Dropdown {...args} />;
};

export const BasicExample = Template.bind({});
// @ts-ignore
BasicExample.args = {
  dropdownLabel: "Basic Dropdown",
  contentList: [
    {
      optionName: "option1"
    },
    {
      optionName: "option1"
    }
  ],
  rounded: false
} as DropdownProps;

export const customDropdownButton = Template.bind({});
// @ts-ignore
customDropdownButton.args = {
  dropdownLabel: "Custom Dropdown",
  contentList: [
    {
      optionName: "option1"
    },
    {
      optionName: "option1"
    }
  ],
  dropDownVariant: "custom",
  dropDownVariantBg: "bg-black-full text-light-high",
  rounded: false
} as DropdownProps;

export const hoverDropdownButton = Template.bind({});
// @ts-ignore
hoverDropdownButton.args = {
  dropdownLabel: "Hover Dropdown",
  contentList: [
    {
      optionName: "option1"
    },
    {
      optionName: "option1"
    }
  ],
  dropDownVariant: "custom",
  DropdownType: "hover",
  dropDownVariantBg: "bg-black-full text-light-high",
  rounded: false
} as DropdownProps;
