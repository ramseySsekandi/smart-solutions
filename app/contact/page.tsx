'use client';
import SecondaryCarousel from '@/components/Secondary-Carousel';
import { Mail, User } from 'lucide-react';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormInputs {
  name: string;
  email: string;
  message: string;
}

const ContactPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
  const [formStatus, setFormStatus] = useState('');

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setFormStatus('Sending...');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, to: 'moshehravens@gmail.com' }),
      });

      if (response.ok) {
        setFormStatus('Message sent successfully!');
      } else {
        setFormStatus('Failed to send message. Please try again later.');
      }
    } catch (error) {
      setFormStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <>
      <SecondaryCarousel id="ep" img="https://plus.unsplash.com/premium_photo-1679089778076-f750c7d64ddc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9jYXRpb258ZW58MHx8MHx8fDA%3D" alt="Image" title="Contact Us" />
      <section className="mt-[250px] bg-[#f9f9f9] text-gray-800 flex justify-center items-center">
        <section className="py-16 px-6 container mx-auto">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-12 transform transition-all hover:scale-[1.02]">
            <h2 className="text-4xl font-bold mb-8 text-center text-green-600">
              Contact Us
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6 mx-auto">
                <div className="flex items-center bg-gray-100 p-4 rounded-xl">
                  <Mail className="mr-4 text-green-400" size={36} />
                  <div>
                    <h3 className="font-semibold">Email Support</h3>
                    <p className="text-gray-600">info@smartsolutions.com</p>
                  </div>
                </div>

                <div className="flex items-center mx-auto bg-gray-100 p-4 rounded-xl">
                  <User className="mr-4 text-green-400" size={36} />
                  <div>
                    <h3 className="font-semibold">Customer Support</h3>
                    <p className="text-gray-600">+256 756743403</p>
                  </div>
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
                  <label htmlFor="message" className="block text-sm font-medium">Message</label>
                  <textarea
                    id="message"
                    {...register('message', { required: 'Message is required' })}
                    className="w-full bg-gray-100 border-2 border-green-400 rounded-xl p-4 h-40 focus:outline-none focus:ring-2 focus:ring-green-500"
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                </div>

                <button type="submit" className="w-full bg-green-500 text-white py-4 rounded-xl hover:scale-[1.01] transition-all">
                  Send Message
                </button>
              </form>
            </div>
            {formStatus && <p className="text-center mt-4 text-sm text-green-600">{formStatus}</p>}
          </div>
        </section>
      </section>
    </>
  );
};

export default ContactPage;