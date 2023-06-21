'use client'

import Image from 'next/image'
import Link from 'next/link'

import { useSelector } from 'react-redux'
import { RootState } from '@/context/rootState'

import nigeria from '@/assets/nigeria.png'

import { BiChevronDown } from 'react-icons/bi'
import { BsCart4 } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { CiSearch } from 'react-icons/ci'

import { navLinks, Navlinks } from '../../data'

export default function Navbar() {
  const { amount } = useSelector((state: RootState) => state.cart)

  return (
    <nav className="w-full h-12 grid place-items-center bg-zinc-200 border border-b-zinc-400 fixed left-0 top-0 z-50 shadow-md shadow-black">
      <div className="w-sm mx-auto h-full md:w-md lg:w-nav flex items-center justify-between relative">
        {/* right */}

        <div className="w-fit h-full flex items-center gap-4">
          <div className="w-fit h-full flex items-center gap-1">
            <Image src={nigeria} alt="flags" className="w-5 h-3 object-cover" />
            <BiChevronDown size={17} className="text-zinc-600" />
          </div>
          <div className="w-fit h-full flex items-center gap-1">
            <h3 className="text-zinc-600 uppercase text-sm">usd</h3>
            <BiChevronDown size={17} className="text-zinc-600" />
          </div>

          <div>
            <ul className="w-fit h-full flex items-center gap-3">
              <li className="text-zinc-600 text-sm capitalize">airpods</li>
              <li className="text-zinc-600 text-sm capitalize">headset</li>
              <li className="text-zinc-600 text-sm capitalize">
                virtual reality
              </li>
            </ul>
          </div>
        </div>

        {/* logo */}
        <div className="w-fit h-fit">
          <h2 className="text-zinc-700 uppercase text-2xl font-bold">
            bershop
          </h2>
        </div>

        {/* links */}
        <div className="w-fit h-full flex items-center gap-3">
          {/* links */}
          <ul className="w-fit h-full flex items-center gap-3">
            {navLinks.map((link: Navlinks) => {
              const { id, name, path } = link
              return (
                <li key={id} className="">
                  <Link
                    href={path}
                    className="text-zinc-600 text-sm capitalize"
                  >
                    {name}
                  </Link>
                </li>
              )
            })}
          </ul>
          {/* icons */}
          <div className="w-28 h-full flex items-center gap-3 relative">
            <CiSearch size={20} className="text-zinc-600 cursor-pointer" />
            <AiOutlineHeart
              size={20}
              className="text-zinc-600 cursor-pointer"
            />
            <BsCart4 size={20} className="text-zinc-600 cursor-pointer" />
            <div className="w-5 aspect-square rounded-full bg-rose-800 grid place-items-center top-1 right-5 absolute z-10">
              <span className="text-xs text-white">{amount}</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
