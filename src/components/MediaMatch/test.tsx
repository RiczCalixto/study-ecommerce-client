import { render, screen } from '@testing-library/react'
import { MediaMatch } from 'components/MediaMatch'

describe('<MediaMatch />', () => {
  let desktopMatch: Element
  let mobileMatch: Element

  beforeEach(() => {
    render(
      <>
        <MediaMatch greaterThan="medium">
          <h1 data-testid="desktop">Desktop</h1>
        </MediaMatch>
        <MediaMatch lessThan="medium">
          <h1 data-testid="mobile">Mobile</h1>
        </MediaMatch>
      </>
    )

    desktopMatch = screen.getByTestId('desktop')
    mobileMatch = screen.getByTestId('mobile')
  })
  it('Should render nothing if props are not passed', () => {
    expect(desktopMatch.parentElement).toHaveStyle({
      display: 'none'
    })
    expect(mobileMatch.parentElement).toHaveStyle({
      display: 'none'
    })
  })
  it('Should show or hide based on props passed', () => {
    expect(desktopMatch.parentElement).toHaveStyleRule('display', 'block', {
      media: '(min-width: 768px)'
    })
    expect(mobileMatch.parentElement).toHaveStyleRule('display', 'block', {
      media: '(max-width: 768px)'
    })
  })
})
