import React from 'react';

import { DisplayComponent } from './display.jsx';

export default {
  title: 'TKG/Display',
  component: DisplayComponent,
};

const Template = (args) => <DisplayComponent {...args} />;
export const Component = Template.bind({});
Component.args = {
    backgroundColor: "rgb(25, 25, 51)",
    content:"Display-Component"
};
/*export const LoggedIn = Template.bind({});
LoggedIn.args = {
  // More on composing args: https://storybook.js.org/docs/react/writing-stories/args#args-composition
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};*/