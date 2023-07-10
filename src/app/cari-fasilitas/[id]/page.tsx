import HeroSection from '@/components/modules/FindFacilityDetailPage/HeroSection'
import BodySection from '@/components/modules/FindFacilityDetailPage/BodySection'
import getFacilities from '@/utils/actions/getFacilities'
import NotFound from '@/app/not-found'

export default async function Fasilitas({ params }: { params: { id: string } }) {
  const facility = await getFacilities({ id: Number(params.id) })

  if (!facility[0]) {
    return (
      <NotFound message='Fasilitas' />
    )
  }

  return (
    <>
      <HeroSection facilityName={facility[0].name} />
      <BodySection facility={facility[0]} />
    </>
  )
}