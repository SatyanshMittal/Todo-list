"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Checkbox } from "@/components/ui/checkbox";
// import { MdOpacity } from "react-icons/md";

export default function task({ string, id, onRemove }: any) {
  return (
    <motion.div className="w-full flex gap-2 items-center text-white/80 text-base border-b-white/30 border border-x-0 border-t-0 py-2">
      <Checkbox
        onCheckedChange={() => {
          onRemove(id);
        }}
      />
      <p>{string}</p>
    </motion.div>
  );
}
