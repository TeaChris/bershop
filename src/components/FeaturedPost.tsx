import Image from 'next/image'
import { Featured, featured } from '../../data'
import Link from 'next/link'

export default function FeaturedPost() {
  return (
    <section className="w-full h-96 mt-32 py-2">
      <div className="w-sm mx-auto h-fit md:w-md lg:w-lg flex flex-col items-center gap-12">
        {/* top */}
        <div className="w-full h-fit flex flex-col items-start gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="w-fit">
            <h2 className="text-zinc-700 capitalize text-2xl font-medium">
              featured products
            </h2>
          </div>

          <div className="w-full lg:w-[35rem]">
            <span className="text-xs text-zinc-700 first-letter:capitalize">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              iusto veritatis, sint ullam a illum natus tempore officiis
              doloribus necessitatibus cumque fugit enim id modi quidem,
              perferendis quo a mollitia ipsam! perferendis quo a mollitia
              ipsam!
            </span>
          </div>
        </div>

        {/* bottom */}
        <div className="w-full lg:w-[65%] h-fit">
          <ul className="w-full h-fit flex flex-warp gap-4 items-center">
            {featured.map((item: Featured) => {
              const {
                id,
                img,
                img2,
                name,
                link,
                category,
                oldPrice,
                currentPrice,
              } = item
              return (
                <li
                  key={id}
                  className="w-60 h-fit flex flex-col items-start gap-2 relative rounded-sm group"
                >
                  <Link href={link} className="w-full h-fit relative group">
                    <Image
                      src={img}
                      className="w-full h-52 object-cover"
                      alt={name}
                    />

                    <span className="text-zinc-800 text-sm font-medium">
                      {name}
                    </span>
                    <div className="w-full flex items-center gap-6">
                      <span className="text-sm text-zinc-500 line-through strike">
                        {oldPrice}
                      </span>
                      <span className="text-sm text-zinc-900 font-bold">
                        {currentPrice}
                      </span>
                    </div>
                    <div className="w-full h-fit top-0 left-0 absolute invisible group-hover:visible">
                      <Image
                        src={img2}
                        className="w-full h-52 object-cover "
                        alt={name}
                      />
                    </div>
                  </Link>

                  {/*  */}
                  <div className="w-fit h-fit p-1 grid place-items-center bg-white rounded-md top-1 left-1 absolute invisible group-hover:visible z-10">
                    <span className="text-xs first-letter:capitalize text-zinc-800">
                      {category}
                    </span>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
