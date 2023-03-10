import { addDecorator } from "@storybook/react";
import "../src/global.css";
import Layout from "./Layout";
addDecorator((storyFn) => <Layout>{storyFn()}</Layout>);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "dark",
    values: [
      {
        name: "dark",
        value: "#1e293b",
      },
      {
        name: "light",
        value: "#fefefe",
      },
    ],
  },
  options: {
    enableShortcuts: false,
  },
};
