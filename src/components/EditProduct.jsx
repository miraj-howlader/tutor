'use client'
import React, { useState } from 'react'
import {
  Button, FieldError, Select, Form, Input, Label,
  ListBox, Modal, Surface, TextField
} from "@heroui/react";

import {
  AlignLeft, BadgeDollarSign, ImageIcon,
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

      toast.success("Product updated successfully")
      router.push('/products')

    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Modal>
      <Button className="bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white rounded-xl px-5 py-2 shadow-md hover:scale-[1.02] transition">
        Edit Product
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
                      Edit Product
                    </h2>
                    <p className="text-gray-500 mt-2">
                      Fill all information carefully
                    </p>
                  </div>

                  {/* Name */}
                  <TextField isRequired name="name" type="text" defaultValue={singleProduct.name}>
                    <Label className="text-sm font-semibold text-gray-700">
                      Product Name
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

                  {/* Description */}
                  <TextField isRequired name="description" type="text" defaultValue={singleProduct.description}>
                    <Label className="text-sm font-semibold text-gray-700">
                      Description
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

                  {/* Price */}
                  <TextField isRequired name="price" type="number" defaultValue={singleProduct.price}>
                    <Label className="text-sm font-semibold text-gray-700">
                      Price
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

                  {/* Stock */}
                  <TextField isRequired name="stock" type="text" defaultValue={singleProduct.stock}>
                    <Label className="text-sm font-semibold text-gray-700">
                      InStock
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