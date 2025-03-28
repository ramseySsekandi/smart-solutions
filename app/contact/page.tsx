import SecondaryCarousel from '@/components/Secondary-Carousel'
import { Mail, User } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <>
    <SecondaryCarousel id = 'ep' img = "https://plus.unsplash.com/premium_photo-1679089778076-f750c7d64ddc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9jYXRpb258ZW58MHx8MHx8fDA%3D" alt = 'Image' title = 'Contact Us'/>
        <section className='mt-[250px] bg-[#000818] text-white flex justify-center items-center'>
        <section className="py-16 px-6 container mx-auto">
        <div className="max-w-4xl mx-auto bg-[#0a1128] rounded-2xl shadow-2xl p-12 transform transition-all hover:scale-[1.02]">
          <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Contact Us
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6 mx-auto">
              <div className="flex items-center bg-[#122540] p-4 rounded-xl">
                <Mail className="mr-4 text-pink-400" size={36} />
                <div>
                  <h3 className="font-semibold">Email Support</h3>
                  <p className="text-gray-300">info@smartsolutions.com</p>
                </div>
              </div>
              
              <div className="flex items-center mx-auto bg-[#122540] p-4 rounded-xl">
                <User className="mr-4 text-purple-400" size={36} />
                <div>
                  <h3 className="font-semibold">Customer Support</h3>
                  <p className="text-gray-300">+256 756743403</p>
                </div>
              </div>
            </div>
            
            <form className="space-y-6">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full bg-[#0a1128] border-2 border-purple-600 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full bg-[#0a1128] border-2 border-purple-600 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <textarea 
                className="w-full bg-[#0a1128] border-2 border-purple-600 rounded-xl p-4 h-40 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Your Message"
              ></textarea>
              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 py-4 rounded-xl hover:scale-[1.01] transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
        </section>
        </>
  )
}

export default page