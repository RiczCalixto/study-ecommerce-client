import { ButtonSize } from 'model/common-style-types'
import * as S from './styles'

export interface ButtonProps {
  size?: ButtonSize
}

export const Button: React.FC<ButtonProps> = ({
  children,
  size = 'medium'
}) => <S.Wrapper size={size}>{!!children && <span>{children}</span>}</S.Wrapper>
