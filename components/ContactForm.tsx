'use client'
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

const ContactForm = () => {
    interface FormInputs {
        name: string;
        email: string;
        message: string;
      }
     const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
      const [loading, setLoading] = useState(false);
    
      const onSubmit = async (data: FormInputs) => {
        
        try {
          setLoading(true);
          const response = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...data, to: 'moshehravens@gmail.com' }),
          });
    
          if (response.ok) {
            console.log('Message sent successfully!');
          } else {
            console.log('Failed to send message. Please try again later.');
          }
        } catch (error) {
          console.log('An error occurred. Please try again later.');
        } finally {
          setLoading(false);
        }
      };
  return (
    <div className='flex items-center'>
      {/* Add form elements here */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className=''>
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
                  <label htmlFor="message" className="block text-sm font-medium">Message</label>
                  <textarea
                    id="message"
                    {...register('message', { required: 'Message is required' })}
                    className="w-full bg-gray-100 border-2 border-green-400 rounded-xl p-4 h-40 focus:outline-none focus:ring-2 focus:ring-green-500"
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                </div>

                <button type="submit" className="w-full bg-green-500 text-white py-4 rounded-xl hover:scale-[1.01] transition-all">
                  {loading?'Sending Message' : 'Send Message'}
                </button>
              </form>
    </div>
  )
}

export default ContactForm