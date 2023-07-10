import BodyModule from '@/components/modules/BodyModule'
import FacilitiesSection from '@/components/modules/FindFacilityPage/FacilitiesSection'
import SearchFacility from '@/components/modules/FindFacilityPage/SearchFacility'
import HeroModule from '@/components/modules/HeroModule'
import getFacilities from '@/utils/actions/getFacilities'

export default async function FindFacility() {
  const facilities = await getFacilities()

  return (
    <>
      <HeroModule title='Cari Fasilitas' bg='bg-[url(/images/bg/bg-cari-fasilitas.svg)]' />
      <BodyModule>
        <SearchFacility />
        <hr />
        <FacilitiesSection facilities={facilities} />
      </BodyModule>
    </>
  )
}