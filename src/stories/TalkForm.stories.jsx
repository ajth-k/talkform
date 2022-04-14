import React from "react";
import { TalkformContextProvider } from "../context/TalkFormContext";
import { TalkFormTest } from "./TalkFormTest";
import "../../style.css";

export default {
  title: "TalkForm/TalkForm",
  component: TalkFormTest,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <TalkformContextProvider>
        <Story />
      </TalkformContextProvider>
    ),
  ],
};

const Template = (args) => <TalkFormTest {...args} />;

export const primary = Template.bind({});
primary.args = {
  user: {
    name: "Jane Doe",
  },
};
