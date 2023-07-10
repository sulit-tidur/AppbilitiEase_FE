'use client'

import { usePathname } from 'next/navigation'
import { FormEvent, useMemo, useRef, useState } from "react"
import { PiMagnifyingGlassBold } from "react-icons/pi"

interface SearchSectionProps {
  placeholder: string
  action: (value: string) => void
}

const SearchSection: React.FC<SearchSectionProps> = ({
  placeholder, action
}) => {
  const [value, setValue] = useState<string>('')
  const ref = useRef<HTMLInputElement>(null)
  const pathname = usePathname()

  const long = useMemo(() => {
    if (pathname === '/edukasi-berita') {
      return true
    }
    return false
  }, [pathname])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    action(value)
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
          <PiMagnifyingGlassBold size={15} className="xs:absolute left-0 min-w-[15px] mx-4" />
          <input
            type="text" placeholder={placeholder} ref={ref}
            value={value} onChange={(e) => setValue(e.target.value)}
            className={`
              w-full xs:w-[calc(100%-96px)] cursor-pointer focus:cursor-text focus:translate-x-0 outline-none xs:pr-[107px] md:pr-[157px]
              ${value === '' ? `${long ? 'xs:motion-safe:translate-x-[calc(50%-87px)]' : 'xs:motion-safe:translate-x-[calc(50%-50px)]'}` : 'motion-safe:translate-x-0'}
              motion-safe:transition-all motion-safe:duration-1000 ease-out peer
            `}
          />
          <button
            type="submit"
            className={`
              absolute hidden xs:block bg-purple rounded-full transition-all delay-300 duration-1000
              right-[4px] ml-4 ${value == '' ? 'motion-reduce:opacity-0 motion-safe:translate-x-[110%]' : 'motion-reduce:opacity-100 translate-x-0'} peer-focus:translate-x-0
              motion-reduce:peer-focus:opacity-100
            `}
          >
            <p className="p-4 font-medium text-white px-14 md:px-20">
              Cari
            </p>
          </button>
        </div>
      </form>
    </section>
  )
}

export default SearchSection