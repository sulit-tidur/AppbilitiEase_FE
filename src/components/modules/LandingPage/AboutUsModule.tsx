'use client'

import { developers } from "@/utils/constants"
import { jost, poppins } from "@/utils/fonts"
import DeveloperCard from "./DeveloperCard"
import { useRef } from "react"
import { useElementOnScreen } from "@/components/hooks/useElementOnScreen"

const AboutUsModule = () => {

  const hadziq = useRef(null)
  const hadziqOnScreen = useElementOnScreen({ ref: hadziq })
  const jihan = useRef(null)
  const jihanOnScreen = useElementOnScreen({ ref: jihan })
  const jason = useRef(null)
  const jasonOnScreen = useElementOnScreen({ ref: jason })

  return (
    <section className="h-fit bg-[url(/images/bg/bg-kami.svg)] bg-center bg-cover bg-no-repeat">
      <div className="container mx-auto px-4 py-14 md:max-w-[calc(100%-100px)]">
        <div className="flex flex-col items-center gap-14">
          {/* Header */}
          <div className="flex flex-col items-center gap-2 text-center">
            <div className={`${jost.className}`}>
              <h1 className="font-semibold text-5xl">
                Tentang <span className="text-purple">Kami</span>
              </h1>
            </div>
            <div className={`${poppins.className}`}>
              <p className="font-medium text-lg text-neutral-400">
                Lorem Ipsum is simply dummy text of the printing.
              </p>
            </div>
          </div>

          {/* The People */}
          <div className="flex flex-wrap justify-center gap-8">
            <div
              ref={hadziq}
              className={`transition duration-1000 ${hadziqOnScreen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
            >
              <DeveloperCard developer={developers[0]} />
            </div>
            <div
              ref={jihan}
              className={`transition delay-100 duration-1000 ${jihanOnScreen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
            >
              <DeveloperCard developer={developers[1]} />
            </div>
            <div
              ref={jason}
              className={`transition delay-200 duration-1000 ${jasonOnScreen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
            >
            <DeveloperCard developer={developers[2]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsModule