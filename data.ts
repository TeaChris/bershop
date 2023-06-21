import img1 from '@/assets/fratured1.webp'
import img2 from '@/assets/featured2.webp'
import img3 from '@/assets/featured3.webp'
import img4 from '@/assets/featured4.webp'
import img5 from '@/assets/v1.png'
import img6 from '@/assets/v1.webp'
import img7 from '@/assets/v3.webp'
import img8 from '@/assets/v4.webp'

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

export interface Featured {
  id: number
  img: any
  img2: any
  link: string
  name: string
  category: string
  oldPrice: string
  currentPrice: string
}

export const featured: Featured[] = [
  {
    id: 1,
    img: img1,
    img2: img6,
    link: '/virtual',
    name: 'See the future',
    category: 'virtual reality',
    oldPrice: '$500',
    currentPrice: '$100',
  },
  {
    id: 2,
    img: img2,
    img2: img5,
    link: '/airpods',
    name: 'Listen to the waves',
    category: 'air pods',
    oldPrice: '$300',
    currentPrice: '$200',
  },
  {
    id: 3,
    img: img3,
    img2: img7,
    link: '/headset',
    name: 'Hear cool sound',
    category: 'headset',
    oldPrice: '$900',
    currentPrice: '$600',
  },
  {
    id: 4,
    img: img4,
    img2: img8,
    link: '/virtual',
    name: 'See inner & deeper',
    category: 'virtual reality',
    oldPrice: '$1,234',
    currentPrice: '$1000',
  },
]
