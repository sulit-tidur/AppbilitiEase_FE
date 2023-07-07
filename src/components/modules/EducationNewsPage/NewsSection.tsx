import { poppins } from "@/utils/fonts"
import NewsCard from "./NewsCard"
import { news } from "@/utils/constants"

const NewsSection = () => {
  return (
    <section className={`${poppins.className} sm:px-14 flex flex-col gap-14 items-center`}>
      <h1 className="text-5xl text-center font-semibold text-dark">
        Berita
      </h1>
      <div className="
        flex flex-col items-center w-full gap-6 pb-[30px] overflow-x-auto isolate rounded-[30px]
        scrollbar-thin scrollbar-thumb-purple scrollbar-track-neutral-200 scrollbar-thumb-rounded-full scrollbar-track-rounded-full
      "
      >
        {news.map((news, index) => (
          <NewsCard
            key={index}
            news={news}
            type={index % 3}
          />
        ))}
      </div>
    </section>
  )
}

export default NewsSection