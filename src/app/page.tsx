import AboutUsModule from '@/components/modules/LandingPage/AboutUsModule'
import DescriptionModule from '@/components/modules/LandingPage/DescriptionModule'
import EducationModule from '@/components/modules/LandingPage/EducationModule'
import NearestFacilityModule from '@/components/modules/LandingPage/NearestFacilityModule'
import getFacilities from '@/utils/actions/getFacilities'

export default async function Home() {
  const facilities = await getFacilities()

  return (
    <>
      <DescriptionModule />
      <NearestFacilityModule facilities={facilities.slice(0, 3)} />
      <EducationModule />
      <AboutUsModule />
    </>

  )
}
