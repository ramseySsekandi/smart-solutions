import { Cpu } from 'lucide-react'
import React from 'react'
import BackToTop from './BackToTop'
import Link from "next/link";

const Footer = () => {
  return (
    <section className="bg-gray-800 text-white py-10 px-6 lg:grid lg:grid-cols-3 lg:px-20 gap-10 space-y-8 text-sm">
        <div className="space-y-8 flex flex-col justify-between">
            {/* Logo */}
            {/* <img src="/pe-logo-white.png" className='w-50' alt="A logo pg energy" /> */}
          <div className="flex items-center gap-4">
            <Cpu
              className="text-white bg-gradient-to-r from-green-300 to-green-600 p-2 rounded-lg" 
              size={48} 
            />
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-300">
              Smart Solutions
            </h1>
          </div>

          <div className="">
            <BackToTop />
          </div>
        </div>
        <div className="space-y-8">
            {/* Footer Locations Nigeria */}
            <article className='space-y-2'>
            <h2 className='text-lg font-bold'>Smart Solutions Limited</h2>
            <p className='text-green-300'>Port Harcourt, Nigeria</p>
            <p >Centre of Excellence: Plot 94 Rivoc Road, Trans Amadi Industrial Layout, Port Harcourt, Rivers State.
                No 54 Emekuku Street, D-Line, Port Harcourt, Rivers State, Nigeria.
                Tel: +234 702 600 0116
            </p>
            </article>
            <article className='space-y-2'>
            <p className='text-green-300'>Abuja, Nigeria</p>
            <p >No. 5 Vattern Street, off Amazon Street, Maitama, Abuja, FCT, Nigeria
            Tel: + 234 702 600 0119</p>
            </article>
            {/* Data Buttons*/}
            <div className="space-y-2 lg:space-y-0 lg:flex lg:gap-2">
            <div className=" flex gap-2 flex-col w-max">
            <button className="bg-gray-500 text-white px-4 py-2 rounded-lg">Data Protection Policy</button>
            </div>
            <div className=" flex gap-2 flex-col w-max">
            <button className="bg-gray-500 text-white px-4 py-2 rounded-lg">Privacy Policy</button>
            </div>
            </div>
        </div>
        <div className="space-y-8">
        <article className='space-y-2'>
            <p className='text-green-300'>Kampala, Uganda</p>
            <p >Kampala, Uganda
C/O Cristal Advocates, 4th Floor, Padre Pio House,
Plot 32 Lumumba Avenue, Kampala, Uganda. P.O Box 1769</p>
            </article>
            <article className='space-y-2'>
            <p className='text-green-300'>
            Dubai, U.A.E</p>
            <p >Business Center 1, M Floor, The Meydan Hotel, Nad Al Sheba, Dubai, U.A.E</p>
            <p >Email: info@pe-ng.com</p>
            </article>
            {/* Socials */}
            <div className="flex gap-4">
            <img src="/facebook.png" alt="Facebook" className='w-6 h-6' />
            <img src="/linkedin.png" alt="LinkedIn" className='w-6 h-6' />
            <img src="/x.png" alt="Twitter"  className='w-6 h-6'/>
            <img src="/instagram.png" alt="Instagram"  className='w-6 h-6'/>
            </div>
        </div>
    </section>
  )
}

export default Footer