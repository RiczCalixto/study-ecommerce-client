import { Size3 } from 'model/common-style-types'
import * as S from './styles'

type ButtonTypes =
  | React.AnchorHTMLAttributes<HTMLAnchorElement>
  | React.ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: Size3
  fullWidth?: boolean
  icon?: React.ReactNode
  as?: React.ElementType
} & ButtonTypes

export const Button: React.FC<ButtonProps> = ({
  children,
  size = 'medium',
  fullWidth = false,
  icon,
  ...props
}) => (
  <S.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon} {...props}>
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)
