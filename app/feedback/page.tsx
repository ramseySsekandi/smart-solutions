
import FeedbackForm from '@/components/FeedbackForm'
import SecondaryCarousel from '@/components/Secondary-Carousel'
import { CheckCircle, MessageCircle, Star } from 'lucide-react'




const page = () => {


  return (
    <>
    <SecondaryCarousel id = 'ep' img = "https://plus.unsplash.com/premium_photo-1679089778076-f750c7d64ddc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9jYXRpb258ZW58MHx8MHx8fDA%3D" alt = 'Image' title = 'Feedback & Customer Interaction'/>
        <section className="mt-[250px] bg-[#f9f9f9] text-gray-800 flex justify-center items-center">
        <section className="py-16 px-6 container mx-auto">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-12 transform transition-all hover:scale-[1.02]">
          <h2 className="text-4xl font-bold mb-8 text-center text-green-600">
            Customer Feedback
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#f0f4f8] p-6 rounded-xl text-center transition-all hover:bg-[#e6eef5]">
              <Star className="mx-auto mb-4 text-yellow-400" size={48} />
              <h3 className="text-xl font-semibold mb-3">Share Your Experience</h3>
              <p className="text-gray-600">Tell us about your journey with us</p>
            </div>
            
            <div className="bg-[#f0f4f8] p-6 rounded-xl text-center transition-all hover:bg-[#e6eef5]">
              <MessageCircle className="mx-auto mb-4 text-green-400" size={48} />
              <h3 className="text-xl font-semibold mb-3">Detailed Insights</h3>
              <p className="text-gray-600">Provide comprehensive feedback</p>
            </div>
            
            <div className="bg-[#f0f4f8] p-6 rounded-xl text-center transition-all hover:bg-[#e6eef5]">
              <CheckCircle className="mx-auto mb-4 text-purple-400" size={48} />
              <h3 className="text-xl font-semibold mb-3">Impact Driven</h3>
              <p className="text-gray-600">Help us improve our services</p>
            </div>
          </div>
          
          <FeedbackForm />

          
        </div>
      </section>
        </section>
        </>
  )
}

export default page