import React from "react";
import { Facebook, Twitter, Youtube, Instagram } from "lucide-react";
const Footer = () => {
  return (
    <div className="h-32 bg-gray-800">
      <div div id="icons section" className="flex justify-center gap-9">
        <Facebook
          size={35}
          className="rounded shadow-md hover:bg-blue-600 duration-500 cursor-pointer"
        />

        <Instagram
          size={35}
          className="rounded shadow-md hover:bg-pink-400 duration-500 cursor-pointer"
        />

        <Twitter
          className="rounded shadow-md hover:bg-blue-400 duration-500 cursor-pointer"
          size={35}
        />

        <Youtube
          className="rounded shadow-md hover:bg-red-500 duration-500 cursor-pointer "
          size={35}
        />
      </div>
      <div className="mt-8">
        <section id="copyrights" className="flex justify-center">
          <p className="text-sky-50">
            {" "}
            &copy; Copyright 2025. All Rights Reserved.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Footer;
