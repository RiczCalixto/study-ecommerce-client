import * as S from './styles'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Logo } from 'components/Logo'

export const Menu: React.FC = () => (
  <S.Wrapper>
    <S.IconWrapper>
      <MenuIcon />
    </S.IconWrapper>
    <S.LogoWrapper>
      <Logo hideOnMobile />
    </S.LogoWrapper>
    <S.MenuGroup>
      <S.IconWrapper>
        <ShoppingCartIcon />
      </S.IconWrapper>
      <S.IconWrapper>
        <SearchIcon />
      </S.IconWrapper>
    </S.MenuGroup>
  </S.Wrapper>
)
