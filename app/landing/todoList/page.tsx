import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Task from "./component/TodoTask";

export default function page() {
  const hmm = "something we don't talk about"
  return (
    <div className="w-full flex justify-center p-5 pt-6  h-screen  ">
      <div className="w-[70%] flex flex-col items-center gap-2    ">


        <p className="mx-auto text-4xl ">TODOLIST</p>

        <div className="w-full flex gap-2 pt-3">

          <Input
            type="text"
            placeholder="Enter your task"
            className="w-[80%] border-white/20"
          />

          <Button variant={"secondary"}>Add task</Button>
        </div>
        <div className="w-full h-auto  "></div>

        <Task string={hmm}/>
        <Task string={hmm}/>
        <Task string={hmm}/>
        <Task string={hmm}/>
        <Task string={hmm}/>
        <Task string={hmm}/>
      </div>
    </div>
  );

  z
}
