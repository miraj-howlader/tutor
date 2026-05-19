'use client'

import DeleteDialog from '@/components/DeleteDialog'
import EditProduct from '@/components/EditProduct'
import { Button, Table } from '@heroui/react'

import React, { useEffect, useState } from 'react'


const MyTutors = () => {
  const [tutors, setTutors] = useState([])
  useEffect(() => {
    const fetchTutors = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/all`
      )
      const data = await res.json()
      setTutors(data)
    }

    fetchTutors()
  }, [])
  console.log(tutors)

  // OPEN EDIT
  // const handleEdit = (tutor) => {
  //   setSelectedTutor(tutor)
  //   setIsEditOpen(true)
  // }

  // // UPDATE tutor
  // const handleUpdate = async (e) => {
  //   e.preventDefault()

  //   const formData = new FormData(e.currentTarget)
  //   const updatedData = Object.fromEntries(formData.entries())

  //   const res = await fetch(
  //     `${process.env.NEXT_PUBLIC_SERVER_URL}/tutors/${selectedTutor._id}`,
  //     {
  //       method: 'PATCH',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(updatedData),
  //     }
  //   )

  //   const data = await res.json()

  //   if (data) {
  //     setTutors((prev) =>
  //       prev.map((t) =>
  //         t._id === selectedTutor._id ? data : t
  //       )
  //     )

  //     toast.success('Tutor updated successfully')
  //     setIsEditOpen(false)
  //   }
  // }

  // // DELETE tutor
  // const handleDelete = async () => {
  //   const res = await fetch(
  //     `${process.env.NEXT_PUBLIC_SERVER_URL}/tutors/${selectedTutor._id}`,
  //     {
  //       method: 'DELETE',
  //     }
  //   )

  //   const data = await res.json()

  //   if (data) {
  //     setTutors((prev) =>
  //       prev.filter((t) => t._id !== selectedTutor._id)
  //     )

  //     toast.success('Tutor deleted')
  //     setIsDeleteOpen(false)
  //   }
  // }

  return (
<div className="p-4 pb-80">
  <Table>
    <Table.Content aria-label="Team members">
      <Table.Header>
        <Table.Column isRowHeader className='font-bold text-sm text-black'>Name</Table.Column>
        <Table.Column className='font-bold text-sm text-black'>Category</Table.Column>
        <Table.Column className='font-bold text-sm text-black'>AvailableDays</Table.Column>
        <Table.Column className='font-bold text-sm text-black'>Hourly</Table.Column>
        <Table.Column className='font-bold text-sm text-black'>Experience</Table.Column>
        <Table.Column className='font-bold text-sm text-black'>Location</Table.Column>
        <Table.Column className='font-bold text-sm text-black'>TeachingMode</Table.Column>
        <Table.Column className='font-bold text-sm text-black'>Actions</Table.Column>
      </Table.Header>

      <Table.Body>
        {tutors.length > 0 ? (
          tutors.map((tutor) => (
            <Table.Row key={tutor._id}>
              <Table.Cell>{tutor.name}</Table.Cell>
              <Table.Cell>{tutor.category}</Table.Cell>
              <Table.Cell>{tutor.availableDays}</Table.Cell>
              <Table.Cell>${tutor.hourly}</Table.Cell>
              <Table.Cell>{tutor.experience} years</Table.Cell>
              <Table.Cell>{tutor.location}</Table.Cell>
              <Table.Cell>{tutor.teachingmode}</Table.Cell>

              <Table.Cell>
                <div className="flex gap-2">
                 
                   <EditProduct singleProduct={tutor}/>
                 

                 <DeleteDialog tutors={tutor}/>
                </div>
              </Table.Cell>
            </Table.Row>
          ))
        ) : (
          <Table.Row>
            <Table.Cell className={'text-2xl font-bold flex items-center justify-center'}>Opps No tutors found 😒😒</Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
        )}
      </Table.Body>
    </Table.Content>
  </Table>
</div>
  )
}

export default MyTutors