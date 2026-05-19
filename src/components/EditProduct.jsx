'use client'
import React, { useState } from 'react'
import {
  Button, FieldError, Select, Form, Input, Label,
  ListBox, Modal, Surface, TextField
} from "@heroui/react";

import {
  AlignLeft, BadgeDollarSign, Edit, ImageIcon,
  Loader2, Package
} from 'lucide-react';

import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const EditProduct = ({ singleProduct }) => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleUpdate = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)

      const formData = new FormData(e.currentTarget)
      const productData = Object.fromEntries(formData.entries())

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/update/${singleProduct._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(productData)
        }
      )

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data?.message || "Update failed")
      }

      toast.success("Tutors updated successfully")
      router.push('/tutors')

    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Modal>
      <Button className="bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white rounded-xl px-5 py-2 shadow-md hover:scale-[1.02] transition">
        <Edit/>
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto" className="flex items-center justify-center p-4">
          <Modal.Dialog className="sm:max-w-md w-full rounded-3xl shadow-2xl bg-white overflow-hidden">

            <Modal.CloseTrigger />

            <Modal.Header className="bg-gradient-to-r from-violet-600 to-fuchsia-500 p-5 text-white">
              <Modal.Icon className="bg-white/20 text-white rounded-full p-2" />
            </Modal.Header>

            <Modal.Body className="p-6 bg-gray-50">

              <Surface variant="default" className="bg-white p-5 rounded-2xl shadow-sm">

                <Form className="w-full space-y-5" onSubmit={handleUpdate}>

                  <div className="mb-4">
                    <h2 className="text-3xl font-bold text-gray-800">
                      Edit Tutors
                    </h2>
                    <p className="text-gray-500 mt-2">
                      Fill all information carefully
                    </p>
                  </div>

                  {/* Name */}
                  <TextField isRequired name="name" type="text" defaultValue={singleProduct.name}>
                    <Label className="text-sm font-semibold text-gray-700">
                      Tutor Name
                    </Label>

                    <div className="relative">
                      <Package className="absolute left-3 top-1/2 -translate-y-1/2 text-violet-500 w-5 h-5" />

                      <Input
                        defaultValue={singleProduct.name}
                        className="pl-11 h-12 w-full rounded-xl border border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition"
                      />
                    </div>

                    <FieldError />
                  </TextField>

                  {/* category */}
                  <TextField isRequired name="category" type="text" defaultValue={singleProduct.category}>
                    <Label className="text-sm font-semibold text-gray-700">
                      Category
                    </Label>

                    <div className="relative">
                      <AlignLeft className="absolute left-3 top-1/2 -translate-y-1/2 text-violet-500 w-5 h-5" />

                      <Input
                        defaultValue={singleProduct.description}
                        className="pl-11 h-12 w-full rounded-xl border border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition"
                      />
                    </div>

                    <FieldError />
                  </TextField>

                    {/* availableDays */}
                   <TextField isRequired name="availableDays" type="text" defaultValue={singleProduct.availableDays}>
                    <Label className="text-sm font-semibold text-gray-700">
                      AvailableDays
                    </Label>

                    <div className="relative">
                      <AlignLeft className="absolute left-3 top-1/2 -translate-y-1/2 text-violet-500 w-5 h-5" />

                      <Input
                        defaultValue={singleProduct.description}
                        className="pl-11 h-12 w-full rounded-xl border border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition"
                      />
                    </div>

                    <FieldError />
                  </TextField>

                       {/* timeslot */}
                   <TextField isRequired name="timeSlot" type="text" defaultValue={singleProduct.timeSlot}>
                    <Label className="text-sm font-semibold text-gray-700">
                      TimeSlot
                    </Label>

                    <div className="relative">
                      <AlignLeft className="absolute left-3 top-1/2 -translate-y-1/2 text-violet-500 w-5 h-5" />

                      <Input
                        defaultValue={singleProduct.description}
                        className="pl-11 h-12 w-full rounded-xl border border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition"
                      />
                    </div>

                    <FieldError />
                  </TextField>

                  {/* hurly */}
                  <TextField isRequired name="hourly" type="number" defaultValue={singleProduct.hourly}>
                    <Label className="text-sm font-semibold text-gray-700">
                      Hourly
                    </Label>

                    <div className="relative">
                      <BadgeDollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-violet-500 w-5 h-5" />

                      <Input
                        defaultValue={singleProduct.price}
                        className="pl-11 h-12 w-full rounded-xl border border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition"
                      />
                    </div>

                    <FieldError />
                  </TextField>

                  {/* slot */}
                  <TextField isRequired name="slot" type="number" defaultValue={singleProduct.slot}>
                    <Label className="text-sm font-semibold text-gray-700">
                      Slot
                    </Label>

                    <div className="relative">
                      <Package className="absolute left-3 top-1/2 -translate-y-1/2 text-violet-500 w-5 h-5" />

                      <Input
                        defaultValue={singleProduct.stock}
                        className="pl-11 h-12 w-full rounded-xl border border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition"
                      />
                    </div>

                    <FieldError />
                  </TextField>

                    {/* session */}
                  <TextField isRequired name="session" type="date" defaultValue={singleProduct.session}>
                    <Label className="text-sm font-semibold text-gray-700">
                      Session
                    </Label>

                    <div className="relative">
                      <Package className="absolute left-3 top-1/2 -translate-y-1/2 text-violet-500 w-5 h-5" />

                      <Input
                        defaultValue={singleProduct.stock}
                        className="pl-11 h-12 w-full rounded-xl border border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition"
                      />
                    </div>

                    <FieldError />
                  </TextField>

                    {/* experience */}
                  <TextField isRequired name="experience" type="number" defaultValue={singleProduct.experience}>
                    <Label className="text-sm font-semibold text-gray-700">
                      Experience
                    </Label>

                    <div className="relative">
                      <Package className="absolute left-3 top-1/2 -translate-y-1/2 text-violet-500 w-5 h-5" />

                      <Input
                        defaultValue={singleProduct.stock}
                        className="pl-11 h-12 w-full rounded-xl border border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition"
                      />
                    </div>

                    <FieldError />
                  </TextField>

                    {/* Location */}
                  <TextField isRequired name="location" type="text" defaultValue={singleProduct.location}>
                    <Label className="text-sm font-semibold text-gray-700">
                      Location
                    </Label>

                    <div className="relative">
                      <Package className="absolute left-3 top-1/2 -translate-y-1/2 text-violet-500 w-5 h-5" />

                      <Input
                        defaultValue={singleProduct.stock}
                        className="pl-11 h-12 w-full rounded-xl border border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition"
                      />
                    </div>

                    <FieldError />
                  </TextField>

                    {/* teachingmode */}
                  <TextField isRequired name="teachingmode" type="text" defaultValue={singleProduct.teachingmode}>
                    <Label className="text-sm font-semibold text-gray-700">
                     Teachingmode
                    </Label>

                    <div className="relative">
                      <Package className="absolute left-3 top-1/2 -translate-y-1/2 text-violet-500 w-5 h-5" />

                      <Input
                        defaultValue={singleProduct.stock}
                        className="pl-11 h-12 w-full rounded-xl border border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition"
                      />
                    </div>

                    <FieldError />
                  </TextField>

                  {/* Image */}
                  <TextField isRequired name="image" type="url" defaultValue={singleProduct.image}>
                    <Label className="text-sm font-semibold text-gray-700">
                      Image URL
                    </Label>

                    <div className="relative">
                      <ImageIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-violet-500 w-5 h-5" />

                      <Input
                        defaultValue={singleProduct.image}
                        className="pl-11 h-12 w-full rounded-xl border border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition"
                      />
                    </div>

                    <FieldError />
                  </TextField>

                  {/* Buttons */}
                  <Modal.Footer className="flex justify-end gap-3 pt-4">

                    <Button
                      slot="close"
                      variant="secondary"
                      className="rounded-xl px-5"
                    >
                      Cancel
                    </Button>

                    <Button
                      type="submit"
                      className="rounded-xl px-6 bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-md hover:opacity-90 transition"
                    >
                      {loading ? (
                        <Loader2 className="animate-spin w-4 h-4" />
                      ) : (
                        "Update"
                      )}
                    </Button>

                  </Modal.Footer>

                </Form>

              </Surface>
            </Modal.Body>

          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  )
}

export default EditProduct