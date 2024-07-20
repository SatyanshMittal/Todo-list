import React from "react";
import Music from "../components/component/music-dashboard";
import { Button } from "@/components/ui/button";

const data = [
  { name: "Todo-List" },
  { name: "Global-List" },
  { name: "24hr-List" },
  { name: "AI-List" },
];

export default function page() {
  return (
    <div className="h-screen text-white">
      {/* <div className="w-full  px-5 py-3 ">
        <Button variant={"outline"} className="bg-purple-800 ">
          SignUp
        </Button>
      </div> */}

      

        
        <div className=" flex w-full h-full py-20  justify-around gap-2">
          <div className="space-y-5 pt-[5%]">
            <p className="text-8xl font-bold">Better-List</p>
            <div className="flex ">
              {data.map((item, idx) => (
                <div
                  key={idx}
                  className=" border-r-white/30 border pr-3 pl-4 hover:bg-white/5 py-1 border-l-0 border-y-0"
                >
                  {item.name}
                </div>
              ))}
            </div>

            <Button variant={"outline"}>Get Started!</Button>
          </div>
          <Music />
        </div>


      
    </div>
  );
}
