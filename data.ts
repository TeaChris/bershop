export interface Navlinks {
  id: number
  name: string
  path: string
}

export const navLinks: Navlinks[] = [
  {
    id: 1,
    name: 'about',
    path: '/about',
  },
  {
    id: 2,
    name: 'store',
    path: '/store',
  },
  {
    id: 3,
    name: 'contact',
    path: '/contact',
  },
]

// footer links
export interface Footerlinks {
  id: number
  name: string
  path: string
}

export const footerLinks: Footerlinks[] = [
  {
    id: 1,
    name: 'about',
    path: '/about',
  },
  {
    id: 2,
    name: 'store',
    path: '/store',
  },
  {
    id: 3,
    name: 'contact',
    path: '/contact',
  },
  {
    id: 4,
    name: 'homepage',
    path: '/',
  },
  {
    id: 5,
    name: 'virtual reality',
    path: '/',
  },
]
