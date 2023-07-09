import BodyModule from '@/components/modules/BodyModule'
import HeroModule from '@/components/modules/HeroModule'
import SearchSection from '@/components/modules/SearchSection'

export default async function FindFacility() {

  const handleSearch = async (value: string) => {
    'use server'
    console.log(value)
  }

  return (
    <>
      <HeroModule title='Cari Fasilitas' bg='bg-[url(/images/bg/bg-cari-fasilitas.svg)]' />
      <BodyModule>
        <SearchSection placeholder='Cari fasilitas..' action={handleSearch} />
        <hr />

      </BodyModule>
    </>
  )
}