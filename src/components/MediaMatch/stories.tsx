import { Story, Meta } from '@storybook/react/types-6-0'
import { MediaMatch } from 'components/MediaMatch'

export default {
  title: 'MediaMatch',
  component: MediaMatch
} as Meta

export const DesktopComponent: Story = () => (
  <MediaMatch greaterThan="medium">Only on Desktop</MediaMatch>
)

export const MobileComponent: Story = () => (
  <MediaMatch lessThan="medium">Only on Mobile</MediaMatch>
)

MobileComponent.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
