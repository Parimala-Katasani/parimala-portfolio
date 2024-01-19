import React from "react";
import "tailwindcss/tailwind.css";
import Navbar from "@/app/components/Navbar";

function skills() {
  const data = [
    {
      image: `https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png`,
      name: "C++",
      desc: "My go-to language for conquering DSA",
    },

    {
      image: `https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png`,
      name: "Python",
      desc: "The language that makes the data analysts swoon!",
    },

    {
      image: `https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/926px-C_Programming_Language.svg.png`,
      name: "C",
      desc: "I never used this since first sem :(",
    },

    {
      image: `https://cdn.iconscout.com/icon/free/png-256/free-java-60-1174953.png`,
      name: "Java",
      desc: "Every time OOPS crosses my mind Java nudges its way in.",
    },

    {
      image: `https://cdn-icons-png.flaticon.com/512/732/732212.png`,
      name: "HTML",
      desc: "Where kids start their coding adventure, but I am in MERN league now.",
    },

    {
      image: `https://cdn4.iconfinder.com/data/icons/iconsimple-programming/512/css-512.png`,
      name: "CSS",
      desc: "Codes therapy issue: 'justify' and 'align' - a constant confusion!",
    },

    {
      image: `https://cdn-icons-png.flaticon.com/512/5968/5968292.png`,
      name: "JavaScript",
      desc: "Callbacks and Promises haunting every async step.",
    },

    {
      image: `https://static-00.iconduck.com/assets.00/database-mysql-icon-462x512-6itsq0zm.png`,
      name: "SQL",
      desc: "Saviour for data analytics and making trending insights."
    }
  ];

    const datafw = [
    {
      imagefw: `https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png`,
      namefw: "React",
      descfw: "Asleep, I murmur 'npm-run-dev' - my code lullaby",
    },

    {
      imagefw: `https://static-00.iconduck.com/assets.00/node-js-icon-227x256-913nazt0.png`,
      namefw: "Nodejs",
      descfw: "npm - Code magic in three letters",
    },

    {
      imagefw: `https://awesomejs.dev/img/project-types/express.png`,
      namefw: "Express",
      descfw: "Choosing between 'GET' and 'POST' - a coder's romantic dilemma",
    },

    {
      imagefw: `https://static-00.iconduck.com/assets.00/next-js-icon-2048x2048-5dqjgeku.png`,
      namefw: "Nextjs",
      descfw: "Gave born to my amazing portfolio!"
    },

    {
      imagefw: `https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png`,
      namefw: "Tailwind CSS",
      descfw: "Not just a library, but a CSS fashion icon.",
    },

    {
      imagefw: `https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/768px-Bootstrap_logo.svg.png`,
      namefw: "Bootstrap",
      descfw: "Make your styling easy without stress."
    }
  ];

  const datadb = [
    {
      imagedb: `https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Antu_mongodb.svg/768px-Antu_mongodb.svg.png`,
      namedb: "MongoDB",
      descdb: "MERN:The 'M' is for Magic in every code snippet!"
    },

    {
      imagedb: `https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Mysql.svg/120px-Mysql.svg.png`,
      namedb: "MySQL"
    }
  ]
  return (
    <div className="w-full absolute top-0 left-0 h-auto bg-[#121212] flex ">
      <Navbar />
      <div className="flex-1 mt-[5.4rem] py-4 pl-4 md:mt-0 h-screen overflow-y-auto md:pt-8 md:pl-6 lg:pt-12 lg:pl-8 xl:pl-14 xl:pt-24 scrollbar-thin scrollbar-thumb-purple-700 scrollbar-rounded">
        <div className="w-full h-full pr-4 md:pr-6 lg:pl-8 xl:pr-14 scroll-smooth">
          <div className="intro w-full md:pr-[6rem]   lg:pr-[8rem] xl:pr-[12rem] ">
            <h1 className="text-white poppins font-semibold text-4xl md:text-5xl md:mt-[6.5rem] sm:mt-[2rem] mt-10 ">
              My
              <span className="text-transparent font-bold bg-clip-text mr-4 ml-4 bg-gradient-to-b to-purple-700 from-purple-200">
                Technological
              </span>
              Array.
            </h1>
            <p className="text-[#c2c2c2] font-medium monto mt-6 md:mt-8 lg:mt-10 xl:mt-12 text-xl ">
            Here&#39;s a peek into my tech toolkit, the magic behind creating awesome projects - 
            the secret sauce behind crafting projects so stunning, it&#39;s leaving everyone in awe!
            </p>
          </div>

          <div className="languages-section text-white mt-20">
            <h3 className="text-3xl poppins mb-12">Languages</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 gap-y-4 opacity-1 ">
              {data.map(({ image, name, desc }) => {
                return (
                  <>
                    <div className="box3 w-full pr-10  lg:pr-[1.0rem] xl:pr-20 min-h-fit max-h-full py-5 items-center justify-start text-white flex border border-none rounded-md hover:-translate-y-1 shadow-lg hover:shadow-purple-400/50 bg-[#1A1A1A]">
                        <div className="relative left-7">
                          <img className=" w-12 h-auto" src={image} alt="logo" />
                        </div>
                        <div className="relative left-8 flex flex-col justify-center pl-2">
                          <h4 className="monto font-semibold text-lg lg:text-xl xl:text-2xl leading-tight">{name}</h4>                        
                          <p className="raleway text-lg text-[#c2c2c2] leading-tight pr-12 xl:pr-10">{desc}</p>                                                 
                        </div>
                    </div>
                  </>
                );
              })}
            </div>             
          </div>

          <div className="frameworks-section text-white mt-20">
            <h3 className="text-3xl poppins mb-12">FrameWorks</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 gap-y-4 opacity-1 ">
              {datafw.map(({ imagefw, namefw, descfw }) => {
                return (
                  <>
                    <div className="box3 w-full pr-10  lg:pr-[1.0rem] xl:pr-20 min-h-fit max-h-full py-5 items-center justify-start text-white flex border border-none rounded-md hover:-translate-y-1 shadow-lg hover:shadow-yellow-500/50 bg-[#1A1A1A]">
                        <div className="relative left-7">
                          <img className=" w-12 h-auto" src={imagefw} alt="logo"/>
                        </div>
                        <div className="relative left-8 flex flex-col justify-center pl-2">
                          <h4 className="monto font-semibold text-lg lg:text-xl xl:text-2xl leading-tight">{namefw}</h4>                        
                          <p className="raleway text-lg text-[#c2c2c2] leading-tight pr-12 xl:pr-10">{descfw}</p>                                                 
                        </div>
                    </div>
                  </>
                );
              })}
            </div>             
          </div>

          <div className="databases-section text-white mt-20">
            <h3 className="text-3xl poppins mb-12">Databases</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 gap-y-4 opacity-1 ">
              {datadb.map(({ imagedb, namedb, descdb }) => {
                return (
                  <>
                    <div className="box3 w-full pr-10  lg:pr-[1.0rem] xl:pr-20 min-h-fit max-h-full py-5 items-center justify-start text-white flex border border-none rounded-md hover:-translate-y-1 shadow-lg hover:shadow-green-400/50 bg-[#1A1A1A]">
                        <div className="relative left-7">
                          <img className=" w-12 h-auto" src={imagedb} alt="logo"/>
                        </div>
                        <div className="relative left-8 flex flex-col justify-center pl-2">
                          <h4 className="monto font-semibold text-lg lg:text-xl xl:text-2xl leading-tight">{namedb}</h4>                        
                          <p className="raleway text-lg text-[#c2c2c2] leading-tight pr-12 xl:pr-10">{descdb}</p>                                                 
                        </div>
                    </div>
                  </>
                );
              })}
            </div>             
          </div>

          <div className="w-full h-10"></div>
        </div>
      </div>
    </div>
  );
}

export default skills;
