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
  Loader2,
} from 'lucide-react'
import toast from 'react-hot-toast'

const CreateTutors = () => {
  const [loading, setLoading] = useState(false)

  const handleTutor = async (e) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const tutorData = Object.fromEntries(formData.entries())

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/create`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(tutorData),
        }
      )

      const data = await res.json()

      if (data) {
        toast.success('Tutor created successfully')
      }
    } catch (error) {
      toast.error(`Create tutor error: ${error}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-100 via-white to-pink-100 px-4 py-10">
      <div className="w-full max-w-5xl grid lg:grid-cols-2 bg-white shadow-2xl rounded-3xl overflow-hidden">

        {/* LEFT SIDE */}
        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-violet-600 to-fuchsia-500 text-white p-10">
          <h1 className="text-4xl font-bold mb-4">
            Create Tutor Profile
          </h1>
          <p className="text-white/80">
            Add tutors with subject, schedule, and availability easily.
          </p>
        </div>

        {/* RIGHT FORM */}
        <div className="p-8 sm:p-10">
          <Form onSubmit={handleTutor} className="space-y-5">

            <h2 className="text-3xl font-bold text-gray-800">
              Add Tutor
            </h2>

            {/* NAME */}
            <TextField isRequired name="name">
              <Label>Tutor Name</Label>
              <Input placeholder="Enter tutor name" />
              <FieldError />
            </TextField>

            {/* IMAGE */}
            <TextField isRequired name="image">
              <Label>Image URL</Label>
              <Input placeholder="Paste image link" />
              <FieldError />
            </TextField>

            {/* CATEGORY */}
            <div>
              <Label>Subject / Category</Label>
              <Select name="category" placeholder="Select subject">
                <Select.Trigger>
                  <Select.Value />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="bangla">Bangla</ListBox.Item>
                    <ListBox.Item id="english">English</ListBox.Item>
                    <ListBox.Item id="math">Math</ListBox.Item>
                    <ListBox.Item id="physics">Physics</ListBox.Item>
                    <ListBox.Item id="chemistry">Chemistry</ListBox.Item>
                    <ListBox.Item id="biology">Biology</ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            {/* AVAILABLE DAYS */}
            <TextField isRequired name="availableDays">
              <Label>Available Days</Label>
              <Input placeholder="Sun - Thu" />
              <FieldError />
            </TextField>

            {/* TIME SLOT */}
            <TextField isRequired name="timeSlot">
              <Label>Time Slot</Label>
              <Input placeholder="5:00 PM - 8:00 PM" />
              <FieldError />
            </TextField>

            {/* HOURLY */}
            <TextField isRequired name="hourly">
              <Label>Hourly Fee</Label>
              <Input type="number" placeholder="Enter hourly fee" />
              <FieldError />
            </TextField>

            {/* SLOT */}
            <TextField isRequired name="slot">
              <Label>Total Slot</Label>
              <Input type="number" placeholder="Enter slot" />
              <FieldError />
            </TextField>

            {/* SESSION */}
            <TextField isRequired name="session">
              <Label>Session Start Date</Label>
              <Input type="date" />
              <FieldError />
            </TextField>

            {/* EXPERIENCE */}
            <TextField isRequired name="experience">
              <Label>Institution & Experience</Label>
              <Input placeholder="Example: BUET, 4 years experience" />
              <FieldError />
            </TextField>

            {/* LOCATION */}
            <TextField isRequired name="location">
              <Label>Area / City</Label>
              <Input placeholder="Dhaka, Bangladesh" />
              <FieldError />
            </TextField>

            {/* Mobile */}
            <TextField isRequired name="mobile">
              <Label>Mobile</Label>
              <Input placeholder="+880" type='number' />
              <FieldError />
            </TextField>

            {/* Status */}
            <TextField isRequired name="status">
              <Label>Status</Label>
              <Input placeholder="Status" />
              <FieldError />
            </TextField>

            {/* TEACHING MODE */}
            <div>
              <Label>Teaching Mode</Label>
              <Select name="teachingmode" placeholder="Select mode">
                <Select.Trigger>
                  <Select.Value />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="online">Online</ListBox.Item>
                    <ListBox.Item id="offline">Offline</ListBox.Item>
                    <ListBox.Item id="both">Both</ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            {/* BUTTON */}
            <Button
              type="submit"
              isDisabled={loading}
              className="w-full h-12 bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white font-semibold rounded-xl"
            >
              {loading ? <Loader2 className="animate-spin" /> : 'Add Tutor'}
            </Button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default CreateTutors