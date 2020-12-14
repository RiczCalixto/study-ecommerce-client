import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

export type Color = 'white' | 'black'
export type Size = 'normal' | 'large'

interface WrapperProps {
  color: Color
  size: Size
  theme: DefaultTheme
  hideOnMobile: boolean
}

const wrapperModifies = {
  normal: () => css`
    width: 11rem;
    height: 3.3rem;
  `,
  large: () => css`
    width: 20rem;
    height: 5.9rem;
  `,
  hideOnMobile: () => css`
    ${media.lessThan('medium')`
     width: 5.8rem;
     height: 4.5rem;

     svg {
       height: 4.5rem;
       pointer-events: none;
     }

     .text{
       display: none;
     }
    `}
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ color, theme, size, hideOnMobile }) => css`
    color: ${theme.colors[color]};
    ${!!size && wrapperModifies[size]}
    ${!!hideOnMobile && wrapperModifies.hideOnMobile}
  `}
`
