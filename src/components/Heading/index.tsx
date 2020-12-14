import { Color } from 'model/common-style-types'
import * as S from './styles'

export interface HeadingProps {
  color?: Color
  lineLeft?: boolean
  lineBottom?: boolean
  children: React.ReactNode
}

export const Heading: React.FC<HeadingProps> = ({
  color = 'black',
  lineLeft = false,
  lineBottom = false,
  children
}) => (
  <S.Wrapper color={color} lineLeft={lineLeft} lineBottom={lineBottom}>
    {children}
  </S.Wrapper>
)