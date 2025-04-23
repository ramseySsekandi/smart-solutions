'use client';
import { servicesData } from '@/lib/utils';
import { IQuotationInputs } from '@/types/mail-forms';
import { useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import toast from 'react-hot-toast';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const QuotationForm = () => {
    const { register, handleSubmit, formState: { errors }, reset, control } = useForm<IQuotationInputs>();
    const [formStatus, setFormStatus] = useState(false);

    const onSubmit: SubmitHandler<IQuotationInputs> = async (data) => {
      try {
        setFormStatus(true);
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/mail/quotation`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
  
        const res = await response.json();
        if (res.success) {
          toast.success('Quotation request sent successfully!');
          reset();
        } else {
          toast.error('Failed to send quotation request. Please try again later.');
        }
      } catch (error) {
        console.log(error);
        toast.error('An error occurred. Please try again.');
      } finally {
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
                <label htmlFor="email" className="block text-sm font-medium mb-1">Business Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your business email address"
                  {...register('email', { required: 'Business email is required' })}
                  className="w-full bg-gray-100 border-2 border-green-400 rounded-xl p-4 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">Contact Number</label>
                <Controller
                  name="phone"
                  control={control}
                  rules={{
                    required: 'Contact number is required',
                    validate: (value) => value.length >= 10 || 'Please enter a valid phone number'
                  }}
                  render={({ field: { onChange, value } }) => (
                    <PhoneInput
                      country={'ng'}
                      value={value}
                      onChange={onChange}
                      inputClass="!w-full !h-full !bg-gray-100 !border-2 !border-green-400 !rounded-xl p-4 focus:outline-none focus:ring-1 focus:ring-green-500"
                      containerClass="!w-full"
                      buttonClass="!border-2 !rounded-l-xl !border-green-400"
                    />
                  )}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-1">Service Required</label>
                <select
                  id="service"
                  {...register('service', { required: 'Please select a service' })}
                  className="w-full bg-gray-100 border-2 border-green-400 rounded-xl p-4 focus:outline-none focus:ring-1 focus:ring-green-500"
                >
                  <option value="">Select the service you're interested in</option>
                  {servicesData.map((service) => (
                    <option key={service.id} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
                {errors.service && <p className="text-red-500 text-sm">{errors.service.message}</p>}
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium mb-1">Project Requirements</label>
                <textarea
                  id="description"
                  placeholder="Please describe your project requirements in detail..."
                  {...register('description', { required: 'Project requirements are needed for accurate quotation' })}
                  className="w-full bg-gray-100 border-2 border-green-400 rounded-xl p-4 h-40 focus:outline-none focus:ring-1 focus:ring-green-500"
                ></textarea>
                {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
              </div>

              <button 
                type="submit" 
                disabled={formStatus}
                className="w-full bg-green-500 text-white py-4 rounded-xl hover:scale-[1.01] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus ? 'Sending Request...' : 'Request Quotation'}
              </button>
            </form>
    </section>
  )
}

export default QuotationForm