import styled, { css, DefaultTheme } from 'styled-components'

interface WrapperProps {
  color: 'white' | 'black'
  theme: DefaultTheme
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ color, theme }) => css`
    color: ${theme.colors[color]};
  `}
`
