import AboutUsModule from "@/components/modules/landingPage/AboutUsModule";
import DescriptionModule from "@/components/modules/landingPage/DescriptionModule";
import EducationModule from "@/components/modules/landingPage/EducationModule";
import NearestFacilityModule from "@/components/modules/landingPage/NearestFacilityModule";

export default function Home() {
  return (
    <>
      <DescriptionModule />
      <NearestFacilityModule />
      <EducationModule />
      <AboutUsModule />
    </>

  )
}
