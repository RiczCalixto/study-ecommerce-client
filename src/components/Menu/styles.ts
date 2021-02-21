import styled, { css } from 'styled-components'

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.small} 0;
    position: relative;
  `}
`

export const LogoWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    width: ${theme.spacings.small};
    height: ${theme.spacings.small};
    cursor: pointer;
  `}
`

export const MenuGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    > div {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`