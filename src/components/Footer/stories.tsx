import { Story, Meta } from '@storybook/react/types-6-0'
import { Footer } from 'components/Footer'

export default {
  title: 'Footer',
  component: Footer
} as Meta

export const Component: Story = () => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Footer />
  </div>
)
