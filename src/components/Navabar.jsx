'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import {
  Menu,
  Search,
  ShoppingBag,
  User,
  X,
} from 'lucide-react'
import { authClient } from '@/lib/auth-client'
import { Avatar, Button } from '@heroui/react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const {data:session}= authClient.useSession()

  // change this based on auth
  const isLoggedIn =session?.user

  const handlelogout =async ()=>{
     await authClient.signOut()
  }
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-8">
        
        {/* LEFT SIDE LOGO */}
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500 shadow-lg shadow-violet-500/30">
            <ShoppingBag className="h-5 w-5 text-white" />
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-wide text-white">
              Tutor Booking System
            </h1>
            <p className="text-xs text-gray-400">
              Premium Booking Website
            </p>
          </div>
        </Link>


        {/* DESKTOP MENU */}
        <div className="hidden items-center gap-6 lg:flex">
          <Link
            href="/"
            className="text-sm font-medium text-gray-300 transition hover:text-violet-400"
          >
            Home
          </Link>

          <Link
            href="/tutors"
            className="text-sm font-medium text-gray-300 transition hover:text-violet-400"
          >
            Tutors
          </Link>

        {isLoggedIn &&  <Link
            href="/add-tutors"
            className="text-sm font-medium text-gray-300 transition hover:text-violet-400"
          >
            Add Tutors
          </Link>}

         {isLoggedIn && <Link
            href="/my-tutors"
            className="text-sm font-medium text-gray-300 transition hover:text-violet-400"
          >
            My Tutors
          </Link>}

        {isLoggedIn &&  <Link
            href="/my-booked"
            className="text-sm font-medium text-gray-300 transition hover:text-violet-400"
          >
            My Booked Sessions 
          </Link>}

          {!isLoggedIn ? (
            <div className="flex items-center gap-3">
             <Link href={'/signin'}>
              <button className="rounded-xl border border-white/10 px-5 py-2 text-sm font-medium text-white transition hover:border-violet-500 hover:bg-violet-500/10">
                Sign In
              </button>
             </Link>

            <Link href={'/signup'}>
              <button className="rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:scale-105">
                Sign Up
              </button>
            </Link>
            </div>
          ) : (
          <>
           <Avatar>
         <Avatar.Image alt={isLoggedIn?.name} src={isLoggedIn?.image || "https://img.heroui.chat/image/avatar?w=400&h=400&u=3"} />
         <Avatar.Fallback>{isLoggedIn?.name?.charAt(0)}</Avatar.Fallback>
         </Avatar>
          <Button onClick={handlelogout} variant='danger'>Log Out</Button>
          </>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
        >
          {menuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* MOBILE SEARCH */}
      <div className="px-4 pb-4 md:hidden">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder="Search products..."
            className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 pl-12 pr-4 text-sm text-white outline-none placeholder:text-gray-500 focus:border-violet-500"
          />
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-black/95 px-4 py-6 lg:hidden">
          <div className="flex flex-col gap-5">
            <Link
              href="/"
              className="text-sm font-medium text-gray-300 transition hover:text-violet-400"
            >
              Home
            </Link>

            <Link
              href="/products"
              className="text-sm font-medium text-gray-300 transition hover:text-violet-400"
            >
              All Products
            </Link>

            <Link
              href="/create-products"
              className="text-sm font-medium text-gray-300 transition hover:text-violet-400"
            >
              Create Product
            </Link>

            {!isLoggedIn ? (
              <div className="flex flex-col gap-3 pt-2">
                <button className="h-11 rounded-xl border border-white/10 text-sm font-medium text-white transition hover:border-violet-500 hover:bg-violet-500/10">
                  Sign In
                </button>

                <button className="h-11 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 text-sm font-semibold text-white">
                  Sign Up
                </button>
              </div>
            ) : (
              <button className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white">
                <User className="h-5 w-5" />
                Profile
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar