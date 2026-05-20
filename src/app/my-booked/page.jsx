import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import React from 'react'
import { Table } from '@heroui/react'
import CancelBooking from '@/components/CancelBooking'

const MyBookedPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  const user = session?.user

  const {token} = await auth.api.getToken({
    headers: await headers()
  })

  if (!user) {
    return (
      <div className="p-6 text-red-500">
        Please login to see your bookings.
      </div>
    )
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user?.id}`,
    {
      headers:{
        authorization: `Bearer ${token}`
      }
    }
  )

  const result = await res.json()
  console.log(result)

  // 🔥 FIX: ensure array
  const bookingData = Array.isArray(result)
    ? result
    : result?.data || []

  return (
    <div className="p-6 pb-144">
      <h1 className="text-2xl font-bold mb-4">
        My Booked Sessions
      </h1>

      <Table>
        <Table.Content aria-label="My Bookings">
          <Table.Header>
            <Table.Column>Tutor Name</Table.Column>
            <Table.Column>Student Name</Table.Column>
            <Table.Column>Email</Table.Column>
            <Table.Column>Mobile</Table.Column>
            <Table.Column>Status</Table.Column>
            <Table.Column>Actions</Table.Column>
          </Table.Header>

          <Table.Body>
            {bookingData.length > 0 ? (
              bookingData.map((booking) => (
                <Table.Row key={booking._id}>
                  <Table.Cell>
                    {booking.tutorname}
                  </Table.Cell>

                  <Table.Cell>
                    {booking.studentName}
                  </Table.Cell>

                  <Table.Cell>
                    {booking.email}
                  </Table.Cell>
                  <Table.Cell>
                    {booking.mobile}
                  </Table.Cell>
                  <Table.Cell >
                     <button
        className={`px-3 py-1 rounded-full text-sm font-bold transition-all duration-300 ${
      booking.status === 'true'
        ? 'bg-green-100 text-green-600 border border-green-500'
        : 'bg-red-100 text-red-500 border border-red-400'
    }`}
  >
    {booking.status === 'true' ? 'Approved' : 'Pending'}
  </button>
                  </Table.Cell>

                  <Table.Cell>
                    <CancelBooking booking={booking} />
                  </Table.Cell>
                </Table.Row>
              ))
            ) : (
              <Table.Row>
                <Table.Cell className={'text-3xl font-bold items-center justify-center flex'}>No bookings found 😒 Add booked first</Table.Cell>
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