'use client'
import { authClient } from '@/lib/auth-client'
import { Button } from '@heroui/react'
import React from 'react'
import toast from 'react-hot-toast'

const BookingCard = ({singleProduct}) => {
  const {data:session} = authClient.useSession()
  const user = session?.user
  

  const {tutorname,studentName,email}=singleProduct

  const handleBooking =async ()=>{
    const bookingData  = {userId:user._id,email:user.email,studentName:user.name,tutorname:singleProduct.name}
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(bookingData)
    })
    const data = await res.json()
    console.log(data)
    if(data){
      toast.success('Booking successfully')
    }
  }
  return (
    <div>
        <Button onClick={handleBooking}>
          Add To Book
        </Button>
    </div>
  )
}

export default BookingCard