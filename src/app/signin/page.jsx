'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from '@heroui/react'
import { FaGoogle } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client'

const SignInPage = () => {
  const [loading,setLoading]=useState(false)
      const [error,setError]=useState('')
      const router = useRouter()

  const handleSignup = async (e)=>{
          e.preventDefault()
          const formData = new FormData(e.currentTarget)
          const user = Object.fromEntries(formData.entries())
          
        try {
          setLoading(true)
            const {data,error} = await authClient.signIn.email({
              email:user.email,
              password:user.password,
             
          })
           if(error){
              setError(error.message || "Something went wrong")
              return
          }
          if(data){
              router.push('/')
          }
         
          setLoading(false)
        } catch (error) {
          setLoading(false)
          setError('Something went wrong')
      
        }finally{
          setLoading(false)
        }
       
      }
  
      const handleGoogle =async ()=>{
        const data = await authClient.signIn.social({
          provider:"google"
        })
      }
  return (
     <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-black via-zinc-950 to-black px-4">
          
          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
            
            {/* HEADER */}
            <div className="mb-8 text-center">
              <h1 className="text-4xl font-bold text-white">
               Welcome to Login
              </h1>
    
              <p className="mt-2 text-sm text-gray-400">
                Join and start exploring amazing products
              </p>
            </div>
    
            {/* FORM */}
            <Form className="flex flex-col gap-5" onSubmit={handleSignup}>
    
             
    
              {/* EMAIL */}
              <TextField
                isRequired
                name="email"
                type="email"
              >
                <Label className="text-gray-300">
                  Email
                </Label>
    
                <Input
                  placeholder="john@example.com"
                  className="h-12"
                />
    
                <FieldError />
              </TextField>
    
              {/* PASSWORD */}
              <TextField
                isRequired
                minLength={8}
                name="password"
                type="password"
              >
                <Label className="text-gray-300">
                  Password
                </Label>
    
                <Input
                  placeholder="Create your password"
                  className="h-12"
                />
    
                <Description className="text-xs text-gray-500">
                  Must contain 8 characters, 1 uppercase & 1 number
                </Description>
    
                <FieldError />
              </TextField>
    
              {/* CONFIRM PASSWORD */}
               <p className="text-sm text-gray-500 justify-end flex">Forgot Password</p>
    
              {/* SIGNUP BUTTON */}
              <Button
                type="submit"
                className="mt-2 h-12 w-full rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 text-sm font-semibold text-white transition hover:scale-[1.02]"
              >
                 Login
              </Button>
    
              {/* DIVIDER */}
              <div className="relative flex items-center py-2">
                <div className="h-px w-full bg-white/10" />
    
                <span className="absolute left-1/2 -translate-x-1/2 bg-zinc-950 px-3 text-xs text-gray-500">
                  OR
                </span>
              </div>
    
              {/* GOOGLE BUTTON */}
              <Button
              onClick={handleGoogle}
                type="button"
                className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
              >
               <FaGoogle/> Continue with Google
              </Button>
    
              {/* LOGIN */}
              <p className="text-center text-sm text-gray-400">
                Do not have an account?{' '}
                <Link
                  href="/signup"
                  className="font-medium text-violet-400 hover:text-violet-300"
                >
                  Sign Up
                </Link>
              </p>
            </Form>
          </div>
        </div>
  )
}

export default SignInPage