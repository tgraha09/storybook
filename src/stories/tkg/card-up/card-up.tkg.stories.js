import React from 'react';
import {Button} from '../button/button.tkg.jsx';
import { CardUp } from './card-up.tkg';



export default {
    title: 'TKG/Card-Up',
    component: CardUp,
    //👇 Creates specific argTypes
    argTypes: {
      backgroundColor: { control: 'color' },
    },
    
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => CardUp(args)

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  backgroundColor: "red",
  children: Button({
    backgroundColor: null,
    primary: false,
    size: 'medium',
    label:"Card-Button"
  }),
};

//<h2>CardUp</h2>
/*Button({
    backgroundColor: null,
    primary: false,
    size: 'medium',
    label:"Card-Button"
  })*/