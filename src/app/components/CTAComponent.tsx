
export default function CTAComponent(){
    const words = "Building high performing ASX small cap stock portfolios.".split(" ");

    return(
        <section>
        <h1 className="text-white mb-4 duration-700 text-4xl">
          STOCKSDIGITAL
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-easyUp">
          {/* Wrap each word in a span with a Tailwind hover effect and larger font size */}
          {words.map((word, index) => (
            <span key={index} className="hover:text-cyan-500 inline-block mr-1">
              {word}
            </span>
          ))}
        </h2>
        <div className="text-xl text-gray-400 mb-8 overflow-hidden  animate-easyUp">
          We&#39;re interested in <span className="text-cyan-500">long-term returns</span>, sharing our journey, and helping others learn from our 20+ years of experience.
        </div>
      </section>
    )
}