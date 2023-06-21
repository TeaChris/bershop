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
