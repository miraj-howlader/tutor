'use client'

import { Table } from '@heroui/react'

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
     <div className="max-w-6xl mx-auto p-4">

       <Table>
      <Table.ScrollContainer>
        <Table.Content aria-label="Team members" className="min-w-400 overflow-hidden">
          <Table.Header>
            <Table.Column isRowHeader>Name</Table.Column>
            <Table.Column>Role</Table.Column>
            <Table.Column>Status</Table.Column>
            <Table.Column>Email</Table.Column>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Kate Moore</Table.Cell>
              <Table.Cell>CEO</Table.Cell>
              <Table.Cell>Active</Table.Cell>
              <Table.Cell>kate@acme.com</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>John Smith</Table.Cell>
              <Table.Cell>CTO</Table.Cell>
              <Table.Cell>Active</Table.Cell>
              <Table.Cell>john@acme.com</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Sara Johnson</Table.Cell>
              <Table.Cell>CMO</Table.Cell>
              <Table.Cell>On Leave</Table.Cell>
              <Table.Cell>sara@acme.com</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Michael Brown</Table.Cell>
              <Table.Cell>CFO</Table.Cell>
              <Table.Cell>Active</Table.Cell>
              <Table.Cell>michael@acme.com</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
    </div>
  )
}

export default MyTutors