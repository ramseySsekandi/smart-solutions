import SecondaryCarousel from '@/components/Secondary-Carousel'
import { CheckCircle, MessageCircle, Star } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <>
    <SecondaryCarousel id = 'ep' img = "https://plus.unsplash.com/premium_photo-1679089778076-f750c7d64ddc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9jYXRpb258ZW58MHx8MHx8fDA%3D" alt = 'Image' title = 'Feedback & Customer Interaction'/>
        <section className='mt-[250px] bg-[#000818] text-white flex justify-center items-center'>
        <section className="py-16 px-6 container mx-auto">
        <div className="max-w-4xl mx-auto bg-[#0a1128] rounded-2xl shadow-2xl p-12 transform transition-all hover:scale-[1.02]">
          <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
            Customer Feedback
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#122540] p-6 rounded-xl text-center transition-all hover:bg-[#1c3657]">
              <Star className="mx-auto mb-4 text-yellow-400" size={48} />
              <h3 className="text-xl font-semibold mb-3">Share Your Experience</h3>
              <p className="text-gray-300">Tell us about your journey with us</p>
            </div>
            
            <div className="bg-[#122540] p-6 rounded-xl text-center transition-all hover:bg-[#1c3657]">
              <MessageCircle className="mx-auto mb-4 text-green-400" size={48} />
              <h3 className="text-xl font-semibold mb-3">Detailed Insights</h3>
              <p className="text-gray-300">Provide comprehensive feedback</p>
            </div>
            
            <div className="bg-[#122540] p-6 rounded-xl text-center transition-all hover:bg-[#1c3657]">
              <CheckCircle className="mx-auto mb-4 text-purple-400" size={48} />
              <h3 className="text-xl font-semibold mb-3">Impact Driven</h3>
              <p className="text-gray-300">Help us improve our services</p>
            </div>
          </div>
          
          <form className="mt-12 space-y-6">
            <textarea 
              className="w-full bg-[#0a1128] border-2 border-blue-600 rounded-xl p-4 h-40 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Share your detailed feedback..."
            ></textarea>
            <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 py-4 rounded-xl hover:scale-[1.01] transition-all">
              Submit Feedback
            </button>
          </form>
        </div>
      </section>
        </section>
        </>
  )
}

export default page