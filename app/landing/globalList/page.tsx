import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function page() {
  return (
    <div className='w-full  flex flex-col items-center gap-5   h-screen p-5 '>
      <p className='mx-auto text-4xl'>GLOBAL LIST</p>

      <div className='w-[80%]  flex gap-2'>
      <Input type='text' placeholder='Enter your task' className='w-[80%] border-white/20'/>

      <Button variant={'secondary'}>
        Add task
      </Button>

      </div>
        
    </div>
  )
}
