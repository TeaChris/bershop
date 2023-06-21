'use client'

import Image from 'next/image'

import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/context/rootState'
import { prevSlide, nextSlide } from '@/context/slide/slideSlice'

import header1 from '@/assets/header1.png'
import header2 from '@/assets/header2.png'
import header3 from '@/assets/header3.png'

export default function Header() {
  // grabbing from store
  const currentSlide = useSelector(
    (state: RootState) => state.carousel.currentSlide
  )

  // dispatching the function from store
  const dispatch = useDispatch()

  const handlePrevSlide = () => {
    dispatch(prevSlide())
  }

  const handleNextSlide = () => {
    dispatch(nextSlide())
  }

  return (
    <header className="w-screen h-[40rem] relative mt-0">
      <div
        className="w-full h-full flex items-center transition duration-1000"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <Image src={header1} alt="" />
        <Image src={header2} alt="" />
        <Image src={header3} alt="" />
      </div>
      <div className="flex items-center gap-4 bottom-20 left-1/2 absolute">
        <button
          className="w-12 aspect-square rounded-md grid place-items-center border border-zinc-800 hover:bg-zinc-600 transition duration-300"
          onClick={handlePrevSlide}
        >
          <BsArrowLeft size={25} />
        </button>
        <button
          className="w-12 aspect-square rounded-md grid place-items-center border border-zinc-800 hover:bg-zinc-600 transition duration-300"
          onClick={handleNextSlide}
        >
          <BsArrowRight size={25} />
        </button>
      </div>
    </header>
  )
}
