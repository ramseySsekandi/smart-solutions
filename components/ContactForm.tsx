'use client'
import { sendContactMail } from '@/app/actions/send-mail';
import { IContactInputs } from '@/types/mail-forms';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const ContactForm = () => {
    
     const { register, handleSubmit, formState: { errors }, reset } = useForm<IContactInputs>();
      const [loading, setLoading] = useState(false);
    
      const onSubmit = async (data: IContactInputs) => {
       try {
        setLoading(true);
        const response = await sendContactMail(data);
        if (response?.success) {
        toast.success('Submitted Successfully')
        reset()
        } else {
        toast.error('Something Went Wrong')
        }
       } catch (error) {
        console.log(error)
       } finally{
        setLoading(false)
       }
       
       
      };
  return (
    <div className=''>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className=''>
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
          <label htmlFor="message" className="block text-sm font-medium mb-1">Your Message</label>
          <textarea
            id="message"
            placeholder="Please provide details about your inquiry..."
            {...register('message', { required: 'Message content is required' })}
            className="w-full bg-gray-100 border-2 border-green-400 rounded-xl p-4 h-40 focus:outline-none focus:ring-1 focus:ring-green-500"
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
        </div>

        <button type="submit" disabled={loading} className="w-full bg-green-500 text-white py-4 rounded-xl hover:scale-[1.01] transition-all">
          {loading ? 'Sending Message...' : 'Send Message'}
        </button>
      </form>
    </div>
  )
}

export default ContactForm