import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { Heading } from 'components/Heading'

describe('<Heading />', () => {
  it('should render a white Heading by default', () => {
    renderWithTheme(<Heading>New Feature</Heading>)
    expect(screen.getByRole('heading', { name: /New Feature/i })).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black Heading when color props is passed', () => {
    renderWithTheme(<Heading color={'black'}>New Feature</Heading>)
    expect(screen.getByRole('heading', { name: /New Feature/i })).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render Heading without line to the left side by default', () => {
    renderWithTheme(<Heading>New Feature</Heading>)
    expect(screen.getByRole('heading', { name: /New Feature/i })).toHaveStyle({
      paddingLeft: 'none',
      borderLeft: 'none'
    })
  })

  it('should render Heading with line to the left when lineLeft prop is passed', () => {
    renderWithTheme(<Heading lineLeft>New Feature</Heading>)
    expect(screen.getByRole('heading', { name: /New Feature/i })).toHaveStyle({
      paddingLeft: '0.8rem',
      borderLeft: '0.7rem solid #F231A5'
    })
  })

  it('should render Heading without line to the bottom by default', () => {
    renderWithTheme(<Heading>New Feature</Heading>)
    expect(screen.getByRole('heading', { name: /New Feature/i })).toHaveStyle({
      borderBottom: 'none'
    })
  })

  it('should render Heading with line to the bottom when lineBottom prop is passed', () => {
    renderWithTheme(<Heading lineBottom>New Feature</Heading>)
    expect(
      screen.getByRole('heading', { name: /New Feature/i })
    ).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: '::after'
    })
  })

  it('should render a heading with a small size', () => {
    renderWithTheme(<Heading size="small">Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'font-size': '1.6rem'
    })

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'width',
      '3.2rem',
      {
        modifier: '::after'
      }
    )
  })

  it('should render a Heading with a primary line color', () => {
    renderWithTheme(
      <Heading lineColor="primary" lineLeft lineBottom>
        Lorem Ipsum
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #F231A5' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: '::after'
    })
  })

  it('should render a Heading with a secondary line color', () => {
    renderWithTheme(
      <Heading lineColor="secondary" lineLeft lineBottom>
        Lorem Ipsum
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #3CD3C1' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #3CD3C1', {
      modifier: '::after'
    })
  })
})
