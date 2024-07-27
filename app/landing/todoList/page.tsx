"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Task from "./component/TodoTask";

interface Todo {
  task: string;
  id: number;
}

interface operation {
  remove: (todos: Todo[], removes: number) => Todo[];
  add: (todos: Todo[], newTask: string) => Todo[];
}

const operations: operation = {
  remove: (todos: Todo[], removes: number) => {
    const Todos = todos.filter((todo) => todo.id !== removes);
    return Todos;
  },

  add: (todos: Todo[], newTask: string) => {
    const maxId = todos.reduce(
      (max, todo) => (todo.id > max ? todo.id : max),
      0
    );
    const newTodo: Todo = { task: newTask.toString(), id: maxId + 1 };
    todos.unshift(newTodo);
    return todos;
  },
};

export default function page() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, task: "do homework and do some problems" },
    { id: 2, task: "clean the house and organize the closet" },
    { id: 3, task: "prepare for the presentation and review notes" },
    { id: 4, task: "buy groceries and cook dinner" },
    { id: 5, task: "exercise and take a walk in the park" },
    { id: 6, task: "read a book and write a summary" },
    { id: 7, task: "work on the project and submit the report" },
    { id: 8, task: "call family and catch up with friends" },
    { id: 9, task: "study for exams and complete assignments" },
    { id: 10, task: "plan the trip and book tickets" },
  ]);

  const [addTodo, setAddTodo] = useState("");

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const updatedTodos = operations.add(todos, addTodo);
      setTodos(updatedTodos);
      setAddTodo("");
    } catch (err) {
      console.log("something bad happened", err);
    }
  };

  const handleRemove = (removeId: number) => {
    const JustRemoveIt = operations.remove(todos, removeId);
    setTodos(JustRemoveIt);
  };

  return (
    <div className="w-full flex justify-center p-5 pt-6  h-screen  ">
      <div className="w-[70%] flex flex-col items-center gap-2    ">
        <p className="mx-auto text-4xl ">TODOLIST</p>

        <div className="w-full">
          <form onSubmit={handleAdd} className="w-full flex gap-2 pt-3">
            <Input
              type="text"
              placeholder="Enter your task"
              className="w-[80%] border-white/20"
              value={addTodo}
              onChange={(e: any) => {
                setAddTodo(e.target.value);
              }}
            />

            <Button variant={"secondary"} type="submit">
              Add task
            </Button>
          </form>
        </div>
        <div className="h-full overflow-y-scroll w-full no-scrollbar">
          {todos.map((todo) => (
            <Task
              onRemove={handleRemove}
              id={todo.id}
              key={todo.id}
              string={todo.task}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
