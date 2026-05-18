'use client'

import { Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { LiaLinkedin } from 'react-icons/lia'

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          <div>
            <h2 className="text-2xl font-bold text-white">
              MediQueue
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              MediQueue is a smart tutor booking platform where students
              can easily find tutors, book online learning sessions,
              and manage classes efficiently.
            </p>
          </div>

          
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Learning Services
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/tutors"
                  className="transition hover:text-cyan-400"
                >
                  Find Tutors
                </Link>
              </li>

              <li>
                <Link
                  href="/subjects"
                  className="transition hover:text-cyan-400"
                >
                  Browse Subjects
                </Link>
              </li>

              <li>
                <Link
                  href="/sessions"
                  className="transition hover:text-cyan-400"
                >
                  Online Sessions
                </Link>
              </li>

              <li>
                <Link
                  href="/booking"
                  className="transition hover:text-cyan-400"
                >
                  Book a Class
                </Link>
              </li>

              <li>
                <Link
                  href="/resources"
                  className="transition hover:text-cyan-400"
                >
                  Learning Resources
                </Link>
              </li>
            </ul>
          </div>

         
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Contact Info
            </h3>

            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-cyan-400" />
                <span>Dhaka, Bangladesh</span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-cyan-400" />
                <span>+880 1404 576 127</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-cyan-400" />
                <span>mirajhowlader9999@gmail.com</span>
              </li>
            </ul>
          </div>

        
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Follow Us
            </h3>

            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-cyan-500 hover:text-white"
              >
                <FaFacebook className="h-5 w-5" />
              </Link>

              <Link
                href="#"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-cyan-500 hover:text-white"
              >
                <BsInstagram className="h-5 w-5" />
              </Link>

              <Link
                href="#"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-cyan-500 hover:text-white"
              >
                <BsTwitter className="h-5 w-5" />
              </Link>

              <Link
                href="#"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-cyan-500 hover:text-white"
              >
                <LiaLinkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

       
        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} MediQueue. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer