import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { Heading } from '.'

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
      borderLeft: '0.7rem solid #3CD31'
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
})
