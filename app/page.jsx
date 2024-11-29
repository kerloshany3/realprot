
import React from "react";
import { LampDemo } from './components/Banner'
import ButtonMagic from "./components/ButtonMagic";
import { IoPersonSharp } from "react-icons/io5";
import Leog from "./components/Leog";
import { BiSolidBadgeCheck } from "react-icons/bi";
import {FloatingNav} from './components/ui/FloatingNav'
import { IconWaveSawTool } from "@tabler/icons-react";

export default function Home() {



  return (
    <>
      <div>

        {/*  <div className=" relative">

          <div className="relative inset-14 flex flex-col items-center justify-center z-10">
            <div className="m-auto gap-10 flex justify-center my-6">
              <ButtonMagic
                title="My Social"
                icon={<IoPersonSharp className="text-2xl ml-3" />}
              />
              <ButtonMagic
                title="Projects"
                icon={<BiSolidBadgeCheck className="text-2xl ml-2" />}
              />
            </div>
          </div>


          <div className=" inset-0 z-0">
            <LampDemo />
          </div>
        </div> */}


        <LampDemo></LampDemo>

        
        
        <FloatingNav navItems={[
          { name: "My Projects", link: "www.google.com" },
          { name: "About Me ", link: "www.google.com" },
          { name: "Contact", link: "www.google.com" },
        
        ]}></FloatingNav>



        
        <ButtonMagic title="hello to every one"></ButtonMagic>


      </div>
    </>


  );
}
