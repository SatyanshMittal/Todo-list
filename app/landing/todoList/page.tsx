import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Task from "./component/TodoTask";

interface Todo {
  task: string;
}

interface operation {
  remove: (todos: Todo[] ) => Todo[],
}

const todos: Todo[] = [
  { task: "do homework and do some problems" },
  { task: "clean the house and organize the closet" },
  { task: "prepare for the presentation and review notes" },
  { task: "buy groceries and cook dinner" },
  { task: "exercise and take a walk in the park" },
  { task: "read a book and write a summary" },
  { task: "work on the project and submit the report" },
  { task: "call family and catch up with friends" },
  { task: "study for exams and complete assignments" },
  { task: "plan the trip and book tickets" },
];

const operations: operation= {
  remove: (todos: Todo[]) => {
      const Todos = todos.splice(1,1)
    return Todos
  }
 }

export default function page() {

 console.log(operations.remove(todos))
 console.log(todos)

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

        {todos.map((todos) => (
          <Task string={todos.task} />
        ))}

      </div>
    </div>
  );
}
