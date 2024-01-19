import 'tailwindcss/tailwind.css';
import Navbar from '@/app/components/Navbar';
import { FaLocationDot } from "react-icons/fa6";
import { RiGraduationCapLine } from "react-icons/ri";
import { LuSchool } from "react-icons/lu";
import { FaBookOpen } from "react-icons/fa6";
import React from 'react';

const education = () => {
  return (
    <div  className="flex-1 py-4 pl-4 md:mt-0 h-screen scrollbar-thin scrollbar-thumb-purple-900  scrollbar-track-white overflow-y-auto md:pt-8 md:pl-6 lg:mt-0 lg:pl-8 lg:pt-12 xl:pl-14 xl:pt-24 xl:mt-5 bg-[#121212] ">
      <Navbar />
      <div  className="w-full h-full pr-4 md:pr-6 lg:pl-8 xl:pr-14 ">
        <div  className="introS w-full md:pr-[6rem]   lg:pr-[8rem] xl:pr-[12rem]">
          <h1  className="text-white poppins font-semibold sm:mt-[5rem] md:mt-[4rem] text-4xl md:text-7xl ml-2">
            Get to
            <span  className="text-transparent font-bold bg-clip-text bg-gradient-to-b to-purple-700 from-purple-200 ml-2 mr-2">Know</span>
            Me.
          </h1>
          <p  className="text-[#c2c2c2] text-xl font-medium monto mt-6 md:mt-8 lg:mt-10 xl:mt-12  ">
            Hey, I'm a
            <span  className="bg-[#9A7CF8] color-change text-white rounded-sm px-2">computer science engineer</span>
            undergrad from RGMCET, rocking the MERN stack with Node.js and React experience!

          </p>
          <p className="text-[#c2c2c2] font-medium monto mt-2 text-xl ">Throughout my academic journey, 
          I have excelled in subjects such as Data Structures and Algorithms, OOPS Concepts, SQL, OS 
          Fundamentals, Networking Fundamentals. I am particularly skilled in leveraging these theoretical 
          concepts to solve complex problems and develop efficient software solutions. </p>
          <p className="text-[#c2c2c2] font-medium monto mt-2  text-xl">I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications.</p>
        </div>
        <div className="location flex gap-4 mt-14 my-auto items-center justify-between w-full">
          <div className=" text-[#c2c2c2] flex gap-1 monto font-medium monto text-xl">
           <FaLocationDot />
            <p>Andhra Pradesh,India</p>
          </div>
          <hr className='flex-1 h-[0.01rem] my-3 bg-[#c2c2c2] border-none rounded-sm items-start'/>
        </div>
        <div className="education-section text-white mt-20">
          <h3 className="text-3xl poppins mb-8">Education</h3>
          <div className="show-projects mt-12">
            <div className="pl-2">
              <ol className="relative border-s border-[#c2c2c2]">

                {/* Btech */}
                <li classname="mb-10 ms-7 ">
                  <span className="absolute flex items-center justify-center w-7 h-7 bg-[#100F11] border-white border ring-tr rounded-full -start-3 ring-8 ring-[#100F11] ">
                    <RiGraduationCapLine />
                  </span>
                  <h3 className="flex items-center mb-1 ml-8 font-semibold text-white monto text-xl ">
                    B.Tech - Rajeev Gandhi Memorial College of Engineering and Technology
                    <span className="bg-[#9A7CF8] text-white  text-xs md:text-sm font-medium poppins ml-8 me-2 px-2.5 py-0.5 rounded ms-3">Currently Pursuing</span>
                  </h3>
                  <time className="block raleway mb-1 ml-8 text-base font-normal leading-none text-[#c2c2c2]  ">October 2020 - May 2024</time>
                   <p className="mb-1 ml-8 text-base raleway font-semibold text-[#9A7CF8]">Computer Science & Engineering</p>
                   <p className='ml-8 mb-4 raleway text-base'>CGPA : 8.7</p>
                </li>

                {/* Intermediate */}
                <li classname="mb-10 ms-7 ">
                  <span className="absolute flex items-center justify-center w-7 h-7 bg-[#100F11] border-white border ring-tr rounded-full -start-3 ring-8 ring-[#100F11] ">
                    <LuSchool />
                  </span>
                  <h3 className="flex items-center mb-1 ml-8 font-semibold text-white monto text-xl ">
                    Intermediate - Rao's Junior College, Nandyal
                  </h3>
                  <time className="block raleway mb-1 ml-8 text-base font-normal leading-none text-[#c2c2c2]  ">2020</time>
                   <p className="mb-1 ml-8 text-base raleway font-semibold text-[#9A7CF8]">Mathematics,Physics,Chemistry (MPC)</p>
                   <p className='ml-8 mb-4 raleway text-base'>CGPA : 9.3</p>
                </li>

                {/* School */}
                <li classname="mb-10 ms-7 ">
                  <span className="absolute flex items-center justify-center w-7 h-7 bg-[#100F11] border-white border ring-tr rounded-full -start-3 ring-8 ring-[#100F11] ">
                    <FaBookOpen />
                  </span>
                  <h3 className="flex items-center mb-1 ml-8 font-semibold text-white monto text-xl ">
                    Good Shepherd English Medium School,Nandyal
                  </h3>
                  <time className="block raleway mb-1 ml-8 text-base font-normal leading-none text-[#c2c2c2]  ">2020</time>
                   <p className="mb-1 ml-8 text-base raleway font-semibold text-[#9A7CF8]">Mathematics,Physics,Chemistry (MPC)</p>
                   <p className='ml-8 mb-4 raleway text-base'>CGPA : 10</p>
                </li>              
              </ol>
            </div>
          </div>
          <div className="flex mt- my-auto mt-16 items-center justify-between w-full">
            <hr className="w-full h-[0.01rem] my-3 bg-[#c2c2c2] border-none rounded-sm items-start"/>
          </div>
        </div>

        {/* More about me */}
        {/* <div className="stacks-section text-white mt-20 pr-8 lg:pr-28">
          <h3 className="text-4xl poppins font-semibold md:text-5xl ml-2 mb-5">More I Own!</h3>
          <p className="text-[#c2c2c2] font-medium monto mt-6 md:mt-8 lg:mt-10 xl:mt-12 ">
            I navigate the tech realm with a robust toolkit, specializing in the
            <span className="bg-[#9A7CF8] text-white font-semibold rounded-sm px-1">MERN</span>
            stack—React, Express, Node.js, and MongoDB. HTML, CSS, and JavaScript are my playground, and I add flavor to them with CSS Frameworks like Tailwind and Bootstrap.
          </p>
          <p className="text-[#c2c2c2] font-medium monto mt-6 md:mt-8 lg:mt-10 xl:mt-12 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam provident nostrum deleniti vel, aut libero porro magnam officiis? Odit exercitationem animi ducimus perspiciatis illo dolorem laboriosam enim, accusamus eligendi velit!
          </p>
          <p className="text-[#c2c2c2] font-medium monto mt-6 mb-7 md:mt-8 md:mb-5 lg:mt-10 lg:mb-7 xl:mt-12 xl:mb-8 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium similique fuga quo. Impedit, ex hic ut atque praesentium fuga nesciunt cupiditate quisquam animi similique, dolor molestiae? Incidunt fuga impedit voluptatum!
          </p>
        </div> */}
        {/* <div className="flex mt- my-auto mt-16 items-center justify-between w-full">
          <hr className="w-full h-[0.01rem] my-3 bg-[#c2c2c2] border-none rounded-sm items-start"/>
        </div> */}

        {/* Lets connect  */}
        <div class="arrow contact-section min-w-max items-center justify-center text-center flex w-full0 text-white mt-20 ">
          <a class="text-center text-[2.3rem] sm:text-[5rem] md:text-[4.43rem] lg:text-[4rem] xl:text-[5rem] 2xl:text-[6rem] w-full poppins">Let's Connect!</a>
        </div>
        <div class="w-full h-10"></div>



      </div>
    </div>
  );
};

export default education;