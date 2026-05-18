'use client'

import React, { useState } from 'react'
import {
  Button,
  Select,
  FieldError,
  Input,
  Label,
  TextField,
  ListBox,
  Form,
} from '@heroui/react'
import {
  Package,
  ImageIcon,
  BadgeDollarSign,
  AlignLeft,
  Sparkles,
  Loader2,
} from 'lucide-react'
import toast from 'react-hot-toast'

const CreateProducts = () => {
  const [loading, setLoading] = useState(false)

  const handleProduct = async (e) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)

    const productData = Object.fromEntries(formData.entries())
    
     try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/create`,{
        method:"POST",
        headers:{
          "Content-Type":'application/json'
        },
        body:JSON.stringify(productData)
      })
      const data = await res.json()
      if(data){
        toast.success("Product created successfully")
        
      }
      

       setLoading(false)
     } catch (error) {
       setLoading(false)
      toast.error(`Create product error ${error}`)
     }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-100 via-white to-pink-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl grid lg:grid-cols-2 overflow-hidden rounded-3xl shadow-2xl bg-white">
        
        {/* Left Side */}
        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-violet-600 to-fuchsia-500 p-10 text-white relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
          <div className="absolute bottom-0 left-0 w-52 h-52 bg-white/10 rounded-full" />

          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6 backdrop-blur-md">
              <Sparkles className="w-8 h-8" />
            </div>

            <h1 className="text-4xl font-bold leading-tight mb-4">
              Create Your <br /> Product Easily
            </h1>

            <p className="text-white/80 text-lg leading-relaxed">
              Add beautiful products with images, prices, and categories.
              Make your store look modern and professional.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                  <Package size={20} />
                </div>
                <p>Easy Product Management</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                  <ImageIcon size={20} />
                </div>
                <p>Beautiful Product Gallery</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                  <BadgeDollarSign size={20} />
                </div>
                <p>Quick Price Setup</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="p-6 sm:p-10 flex items-center justify-center">
          <Form
            className="w-full space-y-5"
            onSubmit={handleProduct}
          >
            <div className="mb-4">
              <h2 className="text-3xl font-bold text-gray-800">
                Add Tutors
              </h2>
              <p className="text-gray-500 mt-2">
                Fill all information carefully
              </p>
            </div>

            {/* Tutor Name */}
            <TextField isRequired name="name" type="text">
              <Label className="text-sm font-medium text-gray-700">
                Tutor Name
              </Label>

              <div className="relative">
                <Package className="absolute left-3 top-1/2 -translate-y-1/2 text-violet-500 w-5 h-5" />

                <Input
                  placeholder="Enter product name"
                  className="pl-11 h-14 w-110 rounded-2xl border border-gray-200 focus:border-violet-500"
                />
              </div>

              <FieldError />
            </TextField>
             
            <TextField isRequired name="image" type="url">
              <Label className="text-sm font-medium text-gray-700">
                Tutor Image
              </Label>

              <div className="relative">
                <ImageIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-violet-500 w-5 h-5" />

                <Input
                  placeholder="Paste image URL"
                  className="pl-11 h-14 w-110 rounded-2xl border border-gray-200"
                />
              </div>

              <FieldError />
            </TextField>

            <div>
              <Label className="text-sm font-medium text-gray-700 mb-2">
                Subject/Category
              </Label>

              <Select
                name="category"
                className="w-full"
                placeholder="Select category"
              >
                <Select.Trigger className="h-14 rounded-2xl border border-gray-200 px-4">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>

                <Select.Popover>
                  <ListBox className="p-2">
                    <ListBox.Item
                      id="bangla"
                      textValue="Bangla"
                      className="rounded-xl"
                    >
                      Bangla
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item
                      id="english"
                      textValue="English"
                      className="rounded-xl"
                    >
                      English
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item
                      id="math"
                      textValue="Math"
                      className="rounded-xl"
                    >
                      Math
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item
                      id="physics"
                      textValue="Physics"
                      className="rounded-xl"
                    >
                      Physics
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item
                      id="chemisty"
                      textValue="Chemisty"
                      className="rounded-xl"
                    >
                      Chemisty
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item
                      id="biology"
                      textValue="biology"
                      className="rounded-xl"
                    >
                      Biology
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            {/* Available Days */}
            <TextField isRequired name="availableDays" type="date">
              <Label className="text-sm font-medium text-gray-700">
                Available Days
              </Label>

              <div className="relative">
                <AlignLeft className="absolute left-3 top-1/2 -translate-y-1/2 text-violet-500 w-5 h-5" />

                <Input
                  placeholder="Write product description"
                  className="pl-11 h-14 w-110 rounded-2xl border border-gray-200"
                />
              </div>

              <FieldError />
            </TextField>

            {/* Hourly fee */}
            <TextField isRequired name="hourly" type="number">
              <Label className="text-sm font-medium text-gray-700">
                Hourly fee
              </Label>

              <div className="relative">
                <BadgeDollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-violet-500 w-5 h-5" />

                <Input
                  placeholder="Hourly fee"
                  className="pl-11 h-14 w-110 rounded-2xl border border-gray-200"
                />
              </div>

              <FieldError />
            </TextField>

             {/* Total slot */}
            <TextField isRequired name="slot" type="number">
              <Label className="text-sm font-medium text-gray-700">
                Total slot
              </Label>

              <div className="relative">
                <BadgeDollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-violet-500 w-5 h-5" />

                <Input
                  placeholder="Total slot"
                  className="pl-11 h-14 w-110 rounded-2xl border border-gray-200"
                />
              </div>

              <FieldError />
            </TextField>

               {/* Session Start Date */}
            <TextField isRequired name="session" type="date">
              <Label className="text-sm font-medium text-gray-700">
                Session Start Date
              </Label>

              <div className="relative">
                <BadgeDollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-violet-500 w-5 h-5" />

                <Input
                  placeholder="Total slot"
                  className="pl-11 h-14 w-110 rounded-2xl border border-gray-200"
                />
              </div>

              <FieldError />
            </TextField>

            
               {/* Institution & Experience */}
            <TextField isRequired name="experience" type="number">
              <Label className="text-sm font-medium text-gray-700">
               Institution & Experience
              </Label>

              <div className="relative">
                <BadgeDollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-violet-500 w-5 h-5" />

                <Input
                  placeholder="4 Years Experience"
                  className="pl-11 h-14 w-110 rounded-2xl border border-gray-200"
                />
              </div>

              <FieldError />
            </TextField>

             
               {/* Area & City */}
            <TextField isRequired name="experience" type="text">
              <Label className="text-sm font-medium text-gray-700">
               Area / City 
              </Label>

              <div className="relative">
                <BadgeDollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-violet-500 w-5 h-5" />

                <Input
                  placeholder="area & city "
                  className="pl-11 h-14 w-110 rounded-2xl border border-gray-200"
                />
              </div>

              <FieldError />
            </TextField>


            {/* Teaching Mode */}
            <div>
              <Label className="text-sm font-medium text-gray-700 mb-2">
                Teaching Mode
              </Label>

              <Select
                name="teachingmode"
                className="w-full"
                placeholder="Select Mode"
              >
                <Select.Trigger className="h-14 rounded-2xl border border-gray-200 px-4">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>

                <Select.Popover>
                  <ListBox className="p-2">
                    <ListBox.Item
                      id="online"
                      textValue="Online"
                      className="rounded-xl"
                    >
                      Online
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item
                      id="offline"
                      textValue="offline"
                      className="rounded-xl"
                    >
                      Offline
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item
                      id="both"
                      textValue="Both"
                      className="rounded-xl"
                    >
                      Both
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

          

            {/* Button */}
            <Button
              type="submit"
              isDisabled={loading}
              className="w-full h-14 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white font-semibold text-lg shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              {loading ? <Loader2 className='animate-spin'/> : 'Create Product'}
            </Button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default CreateProducts