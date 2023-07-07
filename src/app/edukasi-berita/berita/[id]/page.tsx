import BodySection from "@/components/modules/NewsPage/BodySection";
import HeroSection from "@/components/modules/NewsPage/HeroSection";
import { news } from "@/utils/constants";

export default function Berita({ params }: { params: { id: string } }) {
  return (
    <>
      <HeroSection news={news[Number(params.id) - 1]} />
      <BodySection news={news[Number(params.id) - 1]} />
    </>
  )
}