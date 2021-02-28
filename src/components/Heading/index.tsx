import { Color, LineColor, Size2 } from 'model/common-style-types'
import * as S from './styles'

export interface HeadingProps {
  color?: Color
  lineLeft?: boolean
  lineBottom?: boolean
  lineColor?: LineColor
  size?: Size2
}

export const Heading: React.FC<HeadingProps> = ({
  children,
  color = 'white',
  size = 'medium',
  lineColor = 'primary',
  lineLeft = false,
  lineBottom = false
}) => (
  <S.Wrapper
    color={color}
    lineLeft={lineLeft}
    lineBottom={lineBottom}
    lineColor={lineColor}
    size={size}
  >
    {children}
  </S.Wrapper>
)
