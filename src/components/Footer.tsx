import Link from 'next/link'
import Image from 'next/image'

import { BsSend } from 'react-icons/bs'
import { 
  AiFillYoutube,
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram 
} from 'react-icons/ai'

import { Footerlinks, footerLinks } from '../../data'

import payment from '@/assets/payment.jpeg'

export default function Footer() {
  return (
    <footer className="w-full h-[32rem] bg-white mt-48 flex flex-col items-center gap-0">
      <div className="w-full h-16 grid place-items-center bg-blue-800">
        <div className="w-fit flex items-center gap-16">
          {/* left */}
          <div className="w-fit">
            <h4 className="text-lg first-letter:capitalize text-white">
              no one shopping site
            </h4>
          </div>

          {/* middle */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="enter your mail"
              className="w-48 h-10 bg-white p-2 rounded-md focus:outline-0"
            />
            <div className="w-12 h-8 grid place-items-center bg-slate-900 rounded-md cursor-pointer hover:bg-slate-700 duration-300">
              <BsSend size={17} className="text-white" />
            </div>
          </div>

          {/* icons */}
          <div className="flex items-center gap-2">
            <AiFillYoutube size={25} className="text-white cursor-pointer" />
            <AiFillFacebook size={25} className="text-white cursor-pointer" />
            <AiOutlineTwitter size={25} className="text-white cursor-pointer" />
            <AiOutlineInstagram
              size={25}
              className="text-white cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="w-sm mx-auto h-fit md:w-md lg:w-lg flex flex-col items-start gap-16 pt-16">
        <div className="w-full h-fit flex flex-col lg:flex-row items-start justify-between">
          {/* first */}
          <div className="flex flex-col items-center lg:items-start gap-8">
            <h5 className="text-2xl text-zinc-900 capitalize">category</h5>
            <ul className="flex flex-col items-center lg:items-start gap-4">
              {footerLinks.map((link: Footerlinks) => {
                const { id, name, path } = link
                return (
                  <li key={id} className="">
                    <Link
                      href={path}
                      className="text-sm capitalize text-zinc-700"
                    >
                      {name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* second */}
          <div className="flex flex-col items-center lg:items-start gap-8">
            <h5 className="text-2xl text-zinc-900 capitalize">links</h5>
            <ul className="flex flex-col items-center lg:items-start gap-4">
              {footerLinks.map((link: Footerlinks) => {
                const { id, name, path } = link
                return (
                  <li key={id} className="">
                    <Link
                      href={path}
                      className="text-sm capitalize text-zinc-700"
                    >
                      {name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* third */}
          <div className="w-56 flex flex-col items-start gap-8">
            <h5 className="text-2xl text-zinc-900 capitalize">about</h5>
            <span className="text-sm first-letter:capitalize text-zinc-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
              eveniet quasi reiciendis quis, facilis alias vero similique
              maiores, quidem doloremque excepturi culpa quas nesciunt
              architecto cumque quo!
            </span>
          </div>

          {/* fourth */}
          <div className="w-56 flex flex-col items-start gap-8">
            <h5 className="text-2xl text-zinc-900 capitalize">contact</h5>
            <span className="text-sm first-letter:capitalize text-zinc-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
              eveniet quasi reiciendis quis, facilis alias vero similique
              maiores, quidem doloremque excepturi culpa quas nesciunt
              architecto cumque quo!
            </span>
          </div>
        </div>

        {/* bottom */}
        <div className="w-full flex items-center justify-between">
          <h2 className="text-zinc-700 uppercase text-2xl font-bold">
            bershop
          </h2>
          <Image
            src={payment}
            alt="payment"
            className="w-[30rem] h-10 object-cover"
          />
        </div>
      </div>
    </footer>
  )
}
