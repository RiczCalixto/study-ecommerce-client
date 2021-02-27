import { Story, Meta } from '@storybook/react/types-6-0'
import { Heading } from 'components/Heading'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Component: Story = (args) => <Heading {...args} />

Component.args = {
  children: 'Most Populars'
}
