import HeroSection from '@/components/modules/FindFacilityDetailPage/HeroSection'
import BodySection from '@/components/modules/FindFacilityDetailPage/BodySection'
import getFacilities from '@/utils/actions/getFacilities'

export default async function Fasilitas({ params }: { params: { id: string } }) {
  const facility = await getFacilities({ id: Number(params.id) })
  return (
    <>
      <HeroSection facility={facility[0]} />
      <BodySection facility={facility[0]} />
    </>
  )
}