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
        },
    ],
} as ComponentMeta<typeof Dropdown>;

const HideableTemplate: ComponentStory<typeof Dropdown> = (args) => {
    return <Dropdown {...args} />;
};

export const BasicExample = HideableTemplate.bind({});
// @ts-ignore
BasicExample.args = {
    dropdownLabel: "Basic Dropdown",
    contentList: [
        {
            optionName: "option1",
        },
        {
            optionName: "option1",
        }
    ],
    rounded: false
} as DropdownProps;
BasicExample.parameters = { backgrounds: { default: "dark" } };

