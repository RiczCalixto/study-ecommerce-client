import * as React from 'react'
import * as S from './styles'
import Link from 'next/link'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
import { Logo } from 'components/Logo'
import { Button } from 'components/Button'
import { MediaMatch } from 'components/MediaMatch'

export interface MenuProps {
  username?: string
}

export const Menu: React.FC<MenuProps> = ({ username }) => {
  const [isVisible, setIsVisible] = React.useState(false)
  const isLogged = !!username

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper>
          <MenuIcon aria-label="Open menu" onClick={() => setIsVisible(true)} />
        </S.IconWrapper>
      </MediaMatch>
      <S.LogoWrapper>
        <Logo hideOnMobile />
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <Link href="/" passHref>
            <S.MenuLink>Home</S.MenuLink>
          </Link>
          <Link href="/games" passHref>
            <S.MenuLink>Explore</S.MenuLink>
          </Link>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="Search" />
        </S.IconWrapper>
        <S.IconWrapper>
          <ShoppingCartIcon aria-label="Open Shopping Cart" />
        </S.IconWrapper>
        {!isLogged && (
          <MediaMatch greaterThan="medium">
            <Button>Sign in</Button>
          </MediaMatch>
        )}
      </S.MenuGroup>

      <MenuModal
        isVisible={isVisible}
        isLogged={isLogged}
        setIsVisible={setIsVisible}
      />
    </S.Wrapper>
  )
}

interface MenuModalProps {
  isVisible: boolean
  setIsVisible: (isOpen: boolean) => void
  isLogged: boolean
}

const MenuModal = ({ isVisible, setIsVisible, isLogged }: MenuModalProps) => (
  <S.MenuFull aria-hidden={!isVisible} isOpen={isVisible}>
    <CloseIcon aria-label="Close menu" onClick={() => setIsVisible(false)} />
    <S.MenuNav>
      <Link href="/" passHref>
        <S.MenuLink>Home</S.MenuLink>
      </Link>
      <Link href="/games" passHref>
        <S.MenuLink>Explore</S.MenuLink>
      </Link>
      {isLogged && (
        <>
          <Link href="/" passHref>
            <S.MenuLink>My account</S.MenuLink>
          </Link>
          <Link href="/games" passHref>
            <S.MenuLink>Wishlist</S.MenuLink>
          </Link>
        </>
      )}
    </S.MenuNav>
    {!isLogged && (
      <S.RegisterBox>
        <Button fullWidth size="large">
          Log in now
        </Button>
        <span>or</span>
        <Link href="#" passHref>
          <S.CreateAccount>Sign Up</S.CreateAccount>
        </Link>
      </S.RegisterBox>
    )}
  </S.MenuFull>
)
