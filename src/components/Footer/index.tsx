import Link from 'next/link'
import * as S from './styles'
import { Logo } from 'components/Logo'
import { Heading } from 'components/Heading'
import { footerColumnData } from 'components/Footer/footer.data'

export const Footer: React.FC = () => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      {footerColumnData.map((item) => (
        <S.Column key={item.id}>
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            {item.title}
          </Heading>
          <nav aria-labelledby={item.ariaLabelledBy}>
            {item.links.map((link) => (
              <Link key={link.id} href={link.href}>
                <a>{link.title}</a>
              </Link>
            ))}
          </nav>
        </S.Column>
      ))}

      <S.Column aria-labelledby="footer-contact">
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Location
        </Heading>
        <span>Rua Edgar Werneck</span>
        <span>24 - 24230061</span>
        <span>Jacarepagua, Rio de Janeiro</span>
      </S.Column>
    </S.Content>

    <S.Copyright>Won Games 2020 © All rights reserved.</S.Copyright>
  </S.Wrapper>
)
