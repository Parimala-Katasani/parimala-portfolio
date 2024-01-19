import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-5 flex justify-between">
        <span>
        <Image src="/images/logopk.png" width={70} height={50} alt="logo"/>
        </span>
        <p className="text-slate-600 mt-4">Created by Parimala Katasani@All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
