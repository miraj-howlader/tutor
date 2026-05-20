'use client'

import Link from 'next/link'
import { Home, ArrowLeft, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black px-6 relative overflow-hidden">
      
    
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full" />

      
      <div className="relative z-10 max-w-2xl w-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl text-center">
        
        
        <h1 className="text-8xl md:text-9xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          404
        </h1>

      
        <h2 className="mt-6 text-3xl md:text-4xl font-bold text-white">
          Page Not Found
        </h2>

        <p className="mt-4 text-zinc-400 text-lg leading-relaxed">
          Oops! The page you are looking for does not exist or may have been moved.
        </p>

        
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          
          <Link
            href="/"
            className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Home size={20} />
            Back Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-6 py-3 rounded-2xl border border-white/10 bg-white/5 text-white font-semibold hover:bg-white/10 transition-all duration-300"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>

      </div>
    </div>
  )
}