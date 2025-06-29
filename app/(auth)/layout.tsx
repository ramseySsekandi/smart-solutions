import React from 'react'
import ToastProvider from "@/components/ToastProvider"

const AuthLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <section className='w-full'>
      <ToastProvider />
      <div className='h-screen w-full flex justify-center'>
        {children}
      </div>
    </section>
  )
}

export default AuthLayout