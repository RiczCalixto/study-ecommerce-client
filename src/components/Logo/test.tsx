import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

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
})
