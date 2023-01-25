import { ComponentStory, ComponentMeta } from "@storybook/react";
import { EmailIcon } from "../../stories-utils/EmailIcon";
import { Button, CustomButtonProps } from "./Button";
import { CSTypeValues } from "../../types/Colors";
import { ButtonVariantsValues } from "../../types/Variants";
import React from "react";
import {buttonSizes} from "../../types/Sizes";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;


const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

const ColorsTemplate: ComponentStory<typeof Button> = ({ color, ...args }) => (
  <div className="flex w-full justify-evenly flex-wrap">
    {ButtonVariantsValues.map((variant) => (
      <div key={variant} className="flex flex-col gap-3 min-w-[120px]">
        {CSTypeValues.map((each) => (
            buttonSizes.map((size) => (
                  <Button {...args} variant={variant} color={each} scale={size}>
                    {each}
                  </Button>
              ))
        ))}
      </div>
    ))}
  </div>
);

export const SolidButton = Template.bind({});
SolidButton.args = {
  children: "Solid",
  color: "primary",
} as CustomButtonProps;

export const SolidButtonWithIcon = Template.bind({});
SolidButtonWithIcon.args = {
  children: "Send",
  color: "primary",
  leftIcon: <EmailIcon />,
} as CustomButtonProps;

export const GhostButton = Template.bind({});
GhostButton.args = {
  color: "primary",
  children: "Ghost Button",
  variant: "ghost",
} as CustomButtonProps;

export const GhostButtonWithIcon = Template.bind({});
GhostButtonWithIcon.args = {
  color: "primary",
  children: "Email Me",
  variant: "ghost",
  leftIcon: <EmailIcon />,
} as CustomButtonProps;

export const OutlineButton = Template.bind({});
OutlineButton.args = {
  color: "primary",
  children: "Outline button",
  variant: "outline",
} as CustomButtonProps;

export const OutlineButtonWithIcon = Template.bind({});
OutlineButtonWithIcon.args = {
  color: "primary",
  children: "Send",
  variant: "outline",
  leftIcon: <EmailIcon />,
} as CustomButtonProps;

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  isDisabled: true,
  children: "Disabled",
} as CustomButtonProps;

export const AllColors = ColorsTemplate.bind({});
