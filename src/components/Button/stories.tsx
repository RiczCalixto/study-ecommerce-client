import { Story, Meta } from '@storybook/react/types-6-0'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import { Button } from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
} as Meta

export const Component: Story = (args) => <Button {...args} />

Component.args = {
  children: 'Buy now'
}

export const ComponentWithIcon: Story = (args) => <Button {...args} />

ComponentWithIcon.args = {
  children: 'Buy now',
  size: 'small',
  icon: <AddShoppingCart />
}
