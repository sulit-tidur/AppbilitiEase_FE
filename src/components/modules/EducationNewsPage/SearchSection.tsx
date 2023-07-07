'use client'

import { FormEvent, useState } from "react"
import { PiMagnifyingGlassBold } from "react-icons/pi"

const SearchSection = () => {
  const [value, setValue] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(value)
  }

  return (
    <div className="flex py-14 sm:px-14">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="
            border-2 border-dark rounded-full p-[4px] h-[50px] xs:h-[68px] flex items-center place-content-between
            transition hover:shadow-lg
          "
        >
          <PiMagnifyingGlassBold size={15} className="mx-4 min-w-[15px]" />
          <input
            type="text" placeholder="Cari edukasi atau berita.."
            value={value} onChange={(e) => setValue(e.target.value)}
            className={`
              mr-4 ${value === '' ? 'w-full sm:w-[222px]' : 'w-full'} focus:w-full cursor-default focus:cursor-text outline-none
              motion-safe:transition-all motion-safe:duration-1000 ease-out
            `}
          />
          <button
            type="submit"
            className="self-end hidden xs:block bg-purple p-4 px-14 md:px-20 rounded-full">
            <p className="text-white font-medium">
              Cari
            </p>
          </button>
        </div>
      </form>
    </div>
  )
}

export default SearchSection