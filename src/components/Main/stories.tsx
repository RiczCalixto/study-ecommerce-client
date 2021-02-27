import { Story, Meta } from '@storybook/react/types-6-0'
import { Main } from 'components/Main'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'title default',
    description: 'description default'
  }
} as Meta

export const Component: Story = (args) => <Main {...args} />

Component.args = {
  title: 'title basic',
  description: 'description basic'
}
