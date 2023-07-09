import BodyModule from '@/components/modules/BodyModule'
import FacilitiesSection from '@/components/modules/FindFacilityPage/FacilitiesSection'
import HeroModule from '@/components/modules/HeroModule'
import SearchSection from '@/components/modules/SearchSection'
import getFacilities from '@/utils/actions/getFacilities'

export default async function FindFacility() {
  const facilities = await getFacilities()

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
        <FacilitiesSection facilities={facilities} />
      </BodyModule>
    </>
  )
}