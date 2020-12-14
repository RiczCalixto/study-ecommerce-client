import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { Logo } from '.'

describe('<Logo />', () => {
  it('should render a white Logo by default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won Games Logo/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black Logo when color props is passed', () => {
    renderWithTheme(<Logo color={'black'} />)
    expect(screen.getByLabelText(/Won Games Logo/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a normal Logo by default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won Games Logo/i).parentElement).toHaveStyle({
      width: '11rem',
      height: '3.3rem'
    })
  })

  it('should render a bigger Logo', () => {
    renderWithTheme(<Logo size={'large'} />)
    expect(screen.getByLabelText(/Won Games Logo/i).parentElement).toHaveStyle({
      width: '20rem',
      height: '5.9rem'
    })
  })

  it('should render a bigger logo without text if hideOnMobile', () => {
    renderWithTheme(<Logo hideOnMobile />)
    expect(
      screen.getByLabelText(/Won Games Logo/i).parentElement
    ).toHaveStyleRule('width', '5.8rem', {
      media: '(max-width: 768px)'
    })
  })
})
