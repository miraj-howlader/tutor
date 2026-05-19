'use client'
import React from 'react'
import {AlertDialog, Button} from "@heroui/react";
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';


const CancelBooking = ({booking}) => {

    const cancelBooking = async ()=>{
    //   const {data:tokenData}= await authClient.token()
        const res =await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${booking._id}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json",
                // authorization: `Bearer ${tokenData?.token}`
            }
        })
        const data =await res.json()
        if(data){
            toast.success('Booked successfully Canceled')
        }
        window.location.reload()
    }

    if(!booking){
        <div className=' items-center justify-center flex'>
            <h1 className='text-4xl font-bold'>No Booking Found!</h1>
        </div>
    }
  return (
    <div>
    <AlertDialog>
      <Button variant="danger">Cancel</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete project permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>My Awesome Project</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button slot="close" variant="danger" onClick={cancelBooking}>
                Delete booking
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
    </div>
  )
}

export default CancelBooking