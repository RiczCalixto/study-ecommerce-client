import { Color } from 'model/common-style-types'
import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

interface WrapperProps {
  color: Color
  lineLeft: boolean
}

const wrapperModifiers = {
  lineLeft: (theme: DefaultTheme) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors.secondary};
  `
}

export const Wrapper = styled.h2<WrapperProps>`
  ${({ theme, color, lineLeft }) => css`
    font-size: ${theme.font.sizes.xlarge};
    ${media.greaterThan('medium')`
    font-size: ${theme.font.sizes.xxlarge};
    `}
    color: ${theme.colors[color]}
    ${lineLeft && wrapperModifiers.lineLeft(theme)}
  `}
`
