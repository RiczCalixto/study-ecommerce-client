import { ButtonSize } from 'model/common-style-types'
import * as S from './styles'

export interface ButtonProps {
  size?: ButtonSize
  fullWidth?: boolean
  icon?: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

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
