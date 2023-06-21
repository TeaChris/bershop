import Image from 'next/image'

import img1 from '@/assets/cat1.webp'
import img2 from '@/assets/catlong.webp'
import img3 from '@/assets/cat3.jpeg'
import img4 from '@/assets/cat4.webp'
import img5 from '@/assets/cat5.webp'
import img6 from '@/assets/cate.webp'

export default function Categories() {
  return (
    <section className="w-full h-fit mt-20 py-2">
      <div className="w-sm mx-auto h-full md:w-md lg:w-lg flex items-start gap-2">
        <div className="flex flex-col items-start gap-1">
          <div className="w-16rem relative">
            <Image
              src={img1}
              alt=""
              className="w-[16rem] h-[16.3rem] object-cover"
            />
            <div className="w-fit h-fit p-1 bg-slate-200 top-1/2 left-24 absolute rounded-md">
              <span className="text-xs text-zinc-800 capitalize">headset</span>
            </div>
          </div>
          <div className="w-[16rem] relative">
            <Image
              src={img3}
              alt=""
              className="w-[16rem] h-[16.3rem] object-cover"
            />
            <div className="w-fit h-fit p-1 bg-slate-200 top-1/2 left-24 absolute rounded-md">
              <span className="text-xs text-zinc-800 capitalize">airpod</span>
            </div>
          </div>
        </div>
        <div className="w-[18rem] h-fit relative">
          <Image src={img2} alt="" className="w-full h-[33rem] object-cover" />
          <div className="w-fit h-fit p-1 bg-slate-200 top-1/2 left-24 absolute rounded-md">
            <span className="text-xs text-zinc-800 capitalize">
              virtual reality
            </span>
          </div>
        </div>
        <div className="w-[33rem] flex flex-col items-start gap-1">
          <div className="flex items-start gap-1">
            <div className="w-[16rem] relative">
              <Image
                src={img4}
                alt=""
                className="w-[16rem] aspect-square object-cover"
              />
              <div className="w-fit h-fit p-1 bg-slate-200 top-1/2 left-24 absolute rounded-md">
                <span className="text-xs text-zinc-800 capitalize">
                  headset
                </span>
              </div>
            </div>
            <div className="w-[16rem] relative">
              <Image
                src={img5}
                alt=""
                className="w-[16rem] aspect-square object-cover"
              />
              <div className="w-fit h-fit p-1 bg-slate-200 top-1/2 left-24 absolute rounded-md">
                <span className="text-xs text-zinc-800 capitalize">airpod</span>
              </div>
            </div>
          </div>
          {/* bottom */}
          <div className="w-full h-fit relative">
            <Image
              src={img6}
              alt=""
              className="w-full h-[17rem] object-cover"
            />
            <div className="w-fit h-fit p-1 bg-slate-200 top-1/2 left-24 absolute rounded-md">
              <span className="text-xs text-zinc-800 capitalize">
                virtual reality
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
