import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TopbarComponent } from './topbar.component';

export default {
  title: 'TopbarComponent',
  component: TopbarComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<TopbarComponent>;

const Template: Story<TopbarComponent> = (args: TopbarComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
