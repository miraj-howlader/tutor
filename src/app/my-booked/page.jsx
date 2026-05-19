import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import React from 'react'
import { Table, Button } from '@heroui/react'
import CancelBooking from '@/components/CancelBooking'

const MyBookedPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  const user = session?.user

  if (!user) {
    return (
      <div className="p-6 text-red-500">
        Please login to see your bookings.
      </div>
    )
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user.id}`
  )

  const bookingData = await res.json()
 

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        My Booked Sessions
      </h1>

      <Table>
        <Table.Content aria-label="My Bookings">
          <Table.Header>
            <Table.Column>Tutor Name</Table.Column>
            <Table.Column>Student Name</Table.Column>
            <Table.Column>Email</Table.Column>
            <Table.Column>Actions</Table.Column>
          </Table.Header>

          <Table.Body>
            {bookingData?.length > 0 ? (
              bookingData.map((booking) => (
                <Table.Row key={booking._id}>
                  <Table.Cell>{booking.tutorname}</Table.Cell>
                  <Table.Cell>{booking.studentName}</Table.Cell>
                  <Table.Cell>{booking.email}</Table.Cell>
               
                 

                  <Table.Cell>
                    
                      <CancelBooking booking={booking}/>
                   
                  </Table.Cell>
                </Table.Row>
              ))
            ) : (
              <Table.Row>
                <Table.Cell>No bookings found  😒😒</Table.Cell>
                <Table.Cell />
                <Table.Cell />
                <Table.Cell />
                <Table.Cell />
                <Table.Cell />
                <Table.Cell />
              </Table.Row>
            )}
          </Table.Body>
        </Table.Content>
      </Table>
    </div>
  )
}

export default MyBookedPage