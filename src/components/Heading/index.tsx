import { Color } from 'model/common-style-types'
import * as S from './styles'

export interface HeadingProps {
  color?: Color
  lineLeft?: boolean
  children: React.ReactNode
}

export const Heading: React.FC<HeadingProps> = ({
  color = 'black',
  lineLeft = false,
  children
}) => (
  <S.Wrapper color={color} lineLeft={lineLeft}>
    {children}
  </S.Wrapper>
)
