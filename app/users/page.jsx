import BlurImage from '@/components/BlurImage'
import React from 'react'
import img from "@/assets/img.jpg"

const Users = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <BlurImage image={img} />
    </div>
  )
}

export default Users
