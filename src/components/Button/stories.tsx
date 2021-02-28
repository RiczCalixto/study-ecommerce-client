import { Story, Meta } from '@storybook/react/types-6-0'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import { Button, ButtonProps } from 'components/Button'

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

export const Component: Story<ButtonProps> = (args) => <Button {...args} />

Component.args = {
  children: 'Buy now'
}

export const ComponentWithIcon: Story<ButtonProps> = (args) => (
  <Button {...args} />
)

ComponentWithIcon.args = {
  children: 'Buy now',
  size: 'small',
  icon: <AddShoppingCart />
}
export const ComponentAsLink: Story<ButtonProps> = (args) => (
  <Button {...args} />
)

ComponentAsLink.args = {
  children: 'Buy now',
  as: 'a',
  href: '/link',
  size: 'small'
}
