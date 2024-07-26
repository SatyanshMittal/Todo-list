import React from "react";
import Link from "next/link";

import { RiStickyNoteAddLine } from "react-icons/ri";
import { LuListTodo } from "react-icons/lu";


const menu = [
  {
    icon: <RiStickyNoteAddLine />,
    name: "Todo-List",
    Link: "/landing/todoList",
  },
  {
    icon: <RiStickyNoteAddLine />,
    name: "Global-LIst",
    Link: "/landing/globalList",
  },
  {
    icon: <RiStickyNoteAddLine />,
    name: "24hr-List",
    Link: "/landing/dayList",
  },
  {
    icon: <RiStickyNoteAddLine />,
    name: "AI List",
    Link: "/landing/aiList",
  },
];

export default function Navbar() {
  return (
    <div className="py-10 flex flex-col justify-start px-5 items-start  w-1/4 border bg-[#0d1117] border-r-white/30 h-screen">
      <div className="flex gap-2 justify-center items-center text-3xl font-semibold">
        <LuListTodo />
        <p>Better-List</p>
      </div>


      <div className="flex flex-col justify-start  gap-5 w-full mt-10">
        {menu.map((item, idx) => (
          <Link
            href={item.Link}
            key={idx}
            className="flex bg-white/10 rounded-md hover:bg-white/20  w-full pl-[25%] gap-3 items-center text-xl py-2"
          >
            {item.icon}
            <p>{item.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
