const content = [
 
  {
    headsix: "LANGUAGE EXCHANGE",
    headone: "Mutually Beneficial Learning",
    paraone:
      "Native speakers teach you their language, while you teach them yours. It's that simple!",
    paratwo:
      "Built-in aids for translation, pronunciation, and corrections make conversations run smoothly.",
    image: "./welcome/feature-connect.avif",
     imgWidth: "500px", 
    
  },
   {
    headsix: "LANGUAGE EXCHANGE",
    headone: "Mutually Beneficial Learning",
    paraone:
      "Native speakers teach you their language, while you teach them yours. It's that simple!",
    paratwo:
      "Built-in aids for translation, pronunciation, and corrections make conversations run smoothly.",
    image: "./welcome/feature-exchange.avif",
     imgWidth: "500px", 

  },
  {
    headsix: "LANGUAGE EXCHANGE",
    headone: "Mutually Beneficial Learning",
    paraone:
      "Native speakers teach you their language, while you teach them yours. It's that simple!",
    paratwo:
      "Built-in aids for translation, pronunciation, and corrections make conversations run smoothly.",
    image: "./welcome/feature-moments.avif",
     imgWidth: "500px", 
   
  },
  {
    headsix: "LANGUAGE EXCHANGE",
    headone: "Mutually Beneficial Learning",
    paraone:
      "Native speakers teach you their language, while you teach them yours. It's that simple!",
    paratwo:
      "Built-in aids for translation, pronunciation, and corrections make conversations run smoothly.",
    image:
      "./welcome/assets_3512af747f4c4611bb1ad1bd0f2c1a3c_616edb6282f04a8a88d05563c556a7b2.avif",
       imgWidth: "500px", 
       imgHeight:"0px"
    
  },
];

export default function LR() {
  return (
    <>
      <div className="mb-5 flex justify-center items-center flex-col mt-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6 text-center">
          The <span className="text-violet-700">Global</span> Language and Cultural Exchange
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
          Learn a language, explore new cultures, and make friends abroad
        </p>
      </div>
      <div className="flex justify-center items-center w-full py-10">
        <div className="w-full max-w-7xl mx-auto px-4 space-y-20">
          {content.map((item, index) => (
            <div
              className={`md:flex md:justify-between justify-center items-center gap-10  ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              key={index}
            >
              <div className="flex flex-col md:w-1/2">
                <h6 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-violet-600/80 mb-2.5">
                  {item.headsix}
                </h6>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2">
                  {item.headone}
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-1.5">
                  {item.paraone}
                </p>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {item.paratwo}
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center mt-5 md:mt-0">
                <img
                  src={item.image}
                  alt="Feature"
                  className="rounded-lg"
                  width={item.imgWidth}
                  height={item.imgHeight}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
