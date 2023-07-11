'use client'

import { usePathname } from 'next/navigation'
import { FormEvent, useMemo, useRef, useState } from "react"
import { PiMagnifyingGlassBold } from "react-icons/pi"
import { BeatLoader } from 'react-spinners'

interface SearchSectionProps {
  placeholder: string
  action: (value: string) => Promise<void>
}

const SearchSection: React.FC<SearchSectionProps> = ({
  placeholder, action
}) => {
  const [value, setValue] = useState<string>('')
  const ref = useRef<HTMLInputElement>(null)
  const pathname = usePathname()
  const [loading, setLoading] = useState(false)

  const long = useMemo(() => {
    if (pathname === '/edukasi-berita') {
      return true
    }
    return false
  }, [pathname])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true)

    e.preventDefault()
    await action(value)

    setLoading(false)
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
          <PiMagnifyingGlassBold size={15} className="xxs:absolute left-0 min-w-[15px] mx-4" />
          <input
            type="text" placeholder={placeholder} ref={ref}
            value={value} onChange={(e) => setValue(e.target.value)}
            className={`
              w-full xxs:w-[calc(100%-96px)] cursor-pointer focus:cursor-text focus:translate-x-0 outline-none xxs:pr-[107px] md:pr-[157px]
              ${value === '' ? `${long ? 'xxs:motion-safe:translate-x-[calc(50%-87px)]' : 'xxs:motion-safe:translate-x-[calc(50%-50px)]'}` : 'motion-safe:translate-x-0'}
              motion-safe:transition-all motion-safe:duration-1000 ease-out peer
            `}
          />
          <button
            type="submit"
            className={`
              absolute hidden xxs:flex items-center justify-center w-[100px] xs:w-[142px] md:w-[190px] h-[41px] xs:h-[56px] bg-purple rounded-full transition-all delay-300 duration-1000
              right-[4px] ml-4 ${value == '' ? 'motion-reduce:opacity-0 motion-safe:translate-x-[110%]' : 'motion-reduce:opacity-100 translate-x-0'} peer-focus:translate-x-0
              motion-reduce:peer-focus:opacity-100
            `}
          >
            {loading ? (
              <BeatLoader color='#fff' size={12} />
            ) : (
              <p className="p-4 font-medium text-white xs:px-14 md:px-20">
                Cari
              </p>
            )}
          </button>
        </div>
      </form>
    </section>
  )
}

export default SearchSection