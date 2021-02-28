interface FooterColumn {
  id: number
  title: string
  ariaLabelledBy: string
  links: FooterColumnLink[]
}

interface FooterColumnLink {
  id: number
  href: string
  title: string
}

export const footerColumnData: FooterColumn[] = [
  {
    id: 1,
    title: 'Contact us',
    ariaLabelledBy: 'email',
    links: [
      {
        id: 1,
        href: 'mailto:sac@wongames.com',
        title: 'sac@wongames.com'
      }
    ]
  },
  {
    id: 2,
    title: 'Follow us',
    ariaLabelledBy: 'social media',
    links: [
      {
        id: 1,
        href: 'https://www.instagram.com/won-games',
        title: 'Instagram'
      },
      {
        id: 2,
        href: 'https://www.twitter.com/won-games',
        title: 'Twitter'
      },
      {
        id: 3,
        href: 'https://www.youtube.com/won-games',
        title: 'Youtube'
      },
      {
        id: 4,
        href: 'https://www.facebook.com/won-games',
        title: 'Facebook'
      }
    ]
  },
  {
    id: 3,
    title: 'Links',
    ariaLabelledBy: 'footer resources',
    links: [
      {
        id: 1,
        href: '/',
        title: 'Home'
      },
      {
        id: 2,
        href: '/games',
        title: 'Store'
      },
      {
        id: 3,
        href: '/search',
        title: 'Buscar'
      }
    ]
  }
]
