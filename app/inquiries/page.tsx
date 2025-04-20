"use client";
import SecondaryCarousel from '@/components/Secondary-Carousel'
import { Send } from 'lucide-react'
import React, { useState } from 'react'
import Link from "next/link";
import { useForm, SubmitHandler } from 'react-hook-form';

interface QuotationInputs {
  name: string;
  email: string;
  service: string;
  description: string;
}

const QuotationPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<QuotationInputs>();
  const [formStatus, setFormStatus] = useState('');

  const onSubmit: SubmitHandler<QuotationInputs> = async (data) => {
    setFormStatus('Sending...');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, to: 'moshehravens@gmail.com' }),
      });

      if (response.ok) {
        setFormStatus('Quotation request sent successfully!');
      } else {
        setFormStatus('Failed to send quotation request. Please try again later.');
      }
    } catch (error) {
      setFormStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <>
      <SecondaryCarousel id='ep' img="https://image.shutterstock.com/image-photo/diverse-group-people-socializing-casual-260nw-2541238159.jpg" alt='Image' title='Inquiries & Quotation' />
      <section className="mt-[250px] bg-[#f9f9f9] text-gray-800 flex justify-center items-center">
        <section className="py-16 px-6 container mx-auto">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-12 transform transition-all hover:scale-[1.02]">
            <h2 className="text-4xl font-bold mb-8 text-center text-green-600">
              Get Your Quotation
            </h2>
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
                <label htmlFor="service" className="block text-sm font-medium">Service</label>
                <input
                  id="service"
                  {...register('service', { required: 'Service is required' })}
                  className="w-full bg-gray-100 border-2 border-green-400 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                {errors.service && <p className="text-red-500 text-sm">{errors.service.message}</p>}
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium">Project Description</label>
                <textarea
                  id="description"
                  {...register('description', { required: 'Description is required' })}
                  className="w-full bg-gray-100 border-2 border-green-400 rounded-xl p-4 h-40 focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
                {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
              </div>

              <button type="submit" className="w-full bg-green-500 text-white py-4 rounded-xl hover:scale-[1.01] transition-all">
                Request Quotation
              </button>
            </form>
            {formStatus && <p className="text-center mt-4 text-sm text-green-600">{formStatus}</p>}
          </div>
        </section>
      </section>
    </>
  );
};

export default QuotationPage;