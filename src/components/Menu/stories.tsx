import { Story, Meta } from '@storybook/react/types-6-0'
import { Menu, MenuProps } from 'components/Menu'

export default {
  title: 'Menu',
  component: Menu
} as Meta

export const Component: Story<MenuProps> = (args) => <Menu {...args} />

Component.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark'
  }
}
