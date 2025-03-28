import SecondaryCarousel from '@/components/Secondary-Carousel'
import { Send } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
        <>
    <SecondaryCarousel id = 'ep' img = "https://image.shutterstock.com/image-photo/diverse-group-people-socializing-casual-260nw-2541238159.jpg" alt = 'Image' title = 'Inquiries & Quotation'/>
        <section className='mt-[250px] bg-[#000818] text-white flex justify-center items-center'>
        <section className="py-16 px-6 container mx-auto">
        <div className="max-w-4xl mx-auto bg-[#0a1128] rounded-2xl shadow-2xl p-12 transform transition-all hover:scale-[1.02]">
          <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Get Your Quotation
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-[#122540] p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-green-400">Personalized Service</h3>
                <p className="text-gray-300">We provide tailored solutions to meet your unique requirements.</p>
              </div>
              
              <div className="bg-[#122540] p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Transparent Pricing</h3>
                <p className="text-gray-300">Clear, upfront pricing with no hidden costs.</p>
              </div>
            </div>
            
            <form className="space-y-6">
              <select 
                className="w-full bg-[#0a1128] border-2 border-green-600 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Select Service Type</option>
                <option>Consulting</option>
                <option>IT/Technology</option>
                <option>Event Management</option>
                <option>Property Management</option>
                <option>Charity Foundation</option>
              </select>
              
              <input 
                type="text" 
                placeholder="Company Name" 
                className="w-full bg-[#0a1128] border-2 border-green-600 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              
              <input 
                type="email" 
                placeholder="Business Email" 
                className="w-full bg-[#0a1128] border-2 border-green-600 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              
              <textarea 
                className="w-full bg-[#0a1128] border-2 border-green-600 rounded-xl p-4 h-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Brief Project Description"
              ></textarea>
              
              <button className="w-full bg-gradient-to-r from-green-500 to-blue-600 py-4 rounded-xl hover:scale-[1.01] transition-all flex items-center justify-center">
                <Send className="mr-2" size={20} /> Request Quotation
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