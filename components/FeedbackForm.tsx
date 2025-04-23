"use client";

import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react'
import { IFeedbackInputs } from '@/types/mail-forms';
import toast from 'react-hot-toast';

const FeedbackForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<IFeedbackInputs>();
    const [formStatus, setFormStatus] = useState(false);

    const onSubmit: SubmitHandler<IFeedbackInputs> = async (data) => {
      console.log(data);
      const baseUrl = process.env.NEXT_PUBLIC_URL;
      try {
        setFormStatus(true);
        // Send the data to the server
        const response = await fetch(`${baseUrl}/api/mail/feedback`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
  
        const res = await response.json();
        if (res.success) {
          toast.success('Feedback sent successfully!');
          reset();
        } else {
          toast.error('Failed to send feedback. Please try again later.');
        }
      } catch (error) {
        console.log(error)
      }finally {
        setFormStatus(false);
      }
    };
  return (
    <section>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
              <input
                id="name"
                placeholder="Enter your full name"
                {...register('name', { required: 'Full name is required' })}
                className="w-full bg-gray-100 border-2 border-green-400 rounded-xl p-4 focus:outline-none focus:ring-1 focus:ring-green-500"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email address"
                {...register('email', { required: 'Email address is required' })}
                className="w-full bg-gray-100 border-2 border-green-400 rounded-xl p-4 focus:outline-none focus:ring-1 focus:ring-green-500"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="feedback" className="block text-sm font-medium mb-1">Your Feedback</label>
              <textarea
                id="feedback"
                placeholder="Share your experience with our services..."
                {...register('feedback', { required: 'Please provide your feedback' })}
                className="w-full bg-gray-100 border-2 border-green-400 rounded-xl p-4 h-40 focus:outline-none focus:ring-1 focus:ring-green-500"
              ></textarea>
              {errors.feedback && <p className="text-red-500 text-sm">{errors.feedback.message}</p>}
            </div>

            <button type="submit" disabled={formStatus} className="w-full bg-green-500 text-white py-4 rounded-xl hover:scale-[1.01] transition-all">
              {formStatus ? 'Sending...' : 'Submit Feedback'}
            </button>
        </form>
    </section>
  )
}

export default FeedbackForm