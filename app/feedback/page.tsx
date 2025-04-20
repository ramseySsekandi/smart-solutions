"use client";
import SecondaryCarousel from '@/components/Secondary-Carousel'
import { CheckCircle, MessageCircle, Star } from 'lucide-react'
import React, { useState } from 'react'
import Link from "next/link";
import { useForm, SubmitHandler } from 'react-hook-form';

interface FeedbackInputs {
  name: string;
  email: string;
  feedback: string;
}

const FeedbackPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FeedbackInputs>();
  const [formStatus, setFormStatus] = useState('');

  const onSubmit: SubmitHandler<FeedbackInputs> = async (data) => {
    setFormStatus('Sending...');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, to: 'moshehravens@gmail.com' }),
      });

      if (response.ok) {
        setFormStatus('Feedback sent successfully!');
      } else {
        setFormStatus('Failed to send feedback. Please try again later.');
      }
    } catch (error) {
      setFormStatus('An error occurred. Please try again later.');
    }
  };

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
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">Name</label>
              <input
                id="name"
                {...register('name', { required: 'Name is required' })}
                className="w-full bg-gray-100 border-2 border-green-400 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input
                id="email"
                type="email"
                {...register('email', { required: 'Email is required' })}
                className="w-full bg-gray-100 border-2 border-green-400 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="feedback" className="block text-sm font-medium">Feedback</label>
              <textarea
                id="feedback"
                {...register('feedback', { required: 'Feedback is required' })}
                className="w-full bg-gray-100 border-2 border-green-400 rounded-xl p-4 h-40 focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
              {errors.feedback && <p className="text-red-500 text-sm">{errors.feedback.message}</p>}
            </div>

            <button type="submit" className="w-full bg-green-500 text-white py-4 rounded-xl hover:scale-[1.01] transition-all">
              Send Feedback
            </button>
          </form>

          {formStatus && <p className="text-center mt-4 text-sm text-green-600">{formStatus}</p>}
        </div>
      </section>
        </section>
        </>
  )
}

export default FeedbackPage