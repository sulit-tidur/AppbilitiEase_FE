import AboutUsModule from "@/components/modules/LandingPage/AboutUsModule";
import DescriptionModule from "@/components/modules/LandingPage/DescriptionModule";
import EducationModule from "@/components/modules/LandingPage/EducationModule";
import NearestFacilityModule from "@/components/modules/LandingPage/NearestFacilityModule";

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
