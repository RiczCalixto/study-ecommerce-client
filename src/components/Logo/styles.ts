import { Color, Size } from 'model/common-style-types'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

interface WrapperProps {
  color: Color
  size: Size
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
  ${({ color, size, hideOnMobile, theme }) => css`
    color: ${theme.colors[color]};
    ${!!size && wrapperModifies[size]}
    ${!!hideOnMobile && wrapperModifies.hideOnMobile}
  `}
`
