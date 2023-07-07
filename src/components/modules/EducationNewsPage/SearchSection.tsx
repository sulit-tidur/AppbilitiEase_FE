'use client'

import { FormEvent, useRef, useState } from "react"
import { PiMagnifyingGlassBold } from "react-icons/pi"

const SearchSection = () => {
  const [value, setValue] = useState<string>('')
  const ref = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(value)
  }

  return (
    <section className="flex sm:px-14">
      <form onSubmit={handleSubmit} className="w-full">
        <div onClick={() => ref.current?.focus()}
          className="
            border-2 border-dark rounded-full py-[4px] h-[50px] xs:h-[68px] flex items-center justify-center
            transition hover:shadow-lg relative overflow-hidden hover:cursor-pointer isolate
          "
        >
          <PiMagnifyingGlassBold size={15} className="mx-4 xs:mx-0 xs:absolute xs:left-[20px]" />
          <input
            type="text" placeholder="Cari edukasi atau berita.." ref={ref}
            value={value} onChange={(e) => setValue(e.target.value)}
            className={`
            xs:focus:w-[calc(100%-102px)] cursor-pointer focus:cursor-text outline-none motion-reduce:w-[calc(100%-102px)] motion-reduce:pr-[107px] motion-reduce:md:pr-[157px]
            ${value === '' ? 'w-full xs:motion-safe:w-[195px] pr-0' : 'w-[calc(100%-102px)] pr-[107px] md:pr-[157px]'}
            motion-safe:transition-all motion-safe:duration-1000 ease-out peer
            `}
          />
          <button
            type="submit"
            className={`
              hidden xs:block bg-purple rounded-full transition-all delay-300 duration-1000 ease-out
              absolute right-[4px] ${value == '' ? 'motion-reduce:opacity-0 motion-safe:translate-x-[110%]' : 'motion-reduce:opacity-100 translate-x-0'} peer-focus:translate-x-0
              motion-reduce:peer-focus:opacity-100
            `}
          >
            <p className="p-4 px-14 md:px-20 text-white font-medium">
              Cari
            </p>
          </button>
        </div>
      </form>
    </section>
  )
}

export default SearchSection