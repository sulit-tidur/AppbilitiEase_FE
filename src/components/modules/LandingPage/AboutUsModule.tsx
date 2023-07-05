import { developers } from "@/utils/constants"
import { jost, poppins } from "@/utils/fonts"
import DeveloperCard from "./DeveloperCard"

const AboutUsModule = () => {
  return (
    <section className="h-fit bg-[url(/images/bg/bg-kami.svg)] bg-center bg-cover bg-no-repeat">
      <div className="container mx-auto px-4 py-14 md:max-w-[calc(100%-100px)]">
        <div className="flex flex-col items-center gap-14">
          {/* Header */}
          <div className="flex flex-col items-center gap-2 text-center">
            <div className={`${jost.className}`}>
              <h1 className="font-semibold text-5xl">
                Tentang <span className="text-purple">Kami</span>
              </h1>
            </div>
            <div className={`${poppins.className}`}>
              <p className="font-medium text-lg text-neutral-400">
                Lorem Ipsum is simply dummy text of the printing.
              </p>
            </div>
          </div>

          {/* The People */}
          <div className="flex flex-wrap justify-center gap-8">
            {developers.map((developer, key) => (
              <DeveloperCard key={key} developer={developer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsModule