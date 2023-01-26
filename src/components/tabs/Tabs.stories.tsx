import { Tabs, TabsProps } from "./Tabs";
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Tab } from "./Tab";

const BASE = () => {
  return (
    <Tabs>
      <Tab title="Lemon">Lemon is yellow</Tab>
      <Tab title="Strawberry">Strawberry is red</Tab>
      <Tab title="Pear" disable={true}>
        Pear is green
      </Tab>
    </Tabs>
  );
};

export default {
  title: "Tab",
  component: Tabs
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof BASE> = (args) => <BASE />;

export const BasciTabs = Template.bind({});
BasciTabs.args = {} as TabsProps;
